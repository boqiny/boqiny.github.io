#!/usr/bin/env python3
"""Refresh _data/citations.yml from the public Google Scholar profile.

Google Scholar has no API. With SERPAPI_KEY set (the daily GitHub workflow
sets it from a repo secret), the profile comes from SerpApi's Google Scholar
Author API, because Scholar returns 403 to GitHub's servers. Without it, the
script reads the profile page directly, which works from a home connection.
Standard library only. If the fetch fails or parses to nothing, the script
exits non-zero and leaves the existing file untouched, so the site keeps
showing the last good numbers.

Usage: python3 bin/update_citations.py [SCHOLAR_USER_ID]
"""

import datetime
import html
import json
import os
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "_data" / "citations.yml"
USER = sys.argv[1] if len(sys.argv) > 1 else "AglrzBgAAAAJ"
URL = f"https://scholar.google.com/citations?user={USER}&hl=en&cstart=0&pagesize=100&sortby=pubdate"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"


def fetch(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
            with urllib.request.urlopen(req, timeout=30) as r:
                body = r.read().decode("utf-8", "replace")
            if "gsc_a_tr" in body:
                return body
            title = re.search(r"<title>(.*?)</title>", body, re.S)
            print(f"attempt {i + 1}: no publication rows; got {r.status} {r.url[:80]!r}, title {title.group(1).strip()[:80] if title else None!r}", file=sys.stderr)
        except Exception as e:  # network errors, 429s
            print(f"attempt {i + 1}: {e}", file=sys.stderr)
        time.sleep(10 * (i + 1))
    sys.exit("Could not read the Scholar profile; keeping the existing citations.yml")


def text(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def parse(page):
    stats = [int(x) for x in re.findall(r'class="gsc_rsb_std">(\d+)<', page)]
    years = [int(x) for x in re.findall(r'class="gsc_g_t"[^>]*>(\d+)<', page)]
    counts = [int(x) for x in re.findall(r'class="gsc_g_al">(\d+)<', page)]
    papers = {}
    for row in re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', page, re.S):
        pid = re.search(r"citation_for_view=[\w-]+:([\w-]+)", row)
        title = re.search(r'class="gsc_a_at">(.*?)</a>', row, re.S)
        cited = re.search(r'<a href="([^"]*)"[^>]*class="gsc_a_ac gs_ibl"[^>]*>(\d*)</a>', row)
        year = re.search(r'class="gsc_a_h gsc_a_hc gs_ibl">(\d*)<', row)
        if not (pid and title):
            continue
        n = int(cited.group(2)) if cited and cited.group(2) else 0
        papers[f"{USER}:{pid.group(1)}"] = {
            "title": text(title.group(1)),
            "year": int(year.group(1)) if year and year.group(1) else None,
            "citations": n,
            "cited_by_url": html.unescape(cited.group(1)) if cited and n else None,
        }
    if len(stats) < 6 or not papers:
        sys.exit("Profile parsed to nothing; keeping the existing citations.yml")
    return {
        "metadata": {
            "user": USER,
            "last_updated": datetime.date.today().isoformat(),
            "total_citations": stats[0],
            "h_index": stats[2],
            "i10_index": stats[4],
            "by_year": dict(zip(years, counts)),
        },
        "papers": papers,
    }


def from_serpapi(key):
    query = urllib.parse.urlencode({
        "engine": "google_scholar_author", "author_id": USER, "hl": "en",
        "num": 100, "sort": "pubdate", "api_key": key,
    })
    try:
        with urllib.request.urlopen("https://serpapi.com/search.json?" + query, timeout=60) as r:
            d = json.load(r)
    except Exception as e:  # never print the URL: it carries the key
        sys.exit(f"SerpApi request failed ({type(e).__name__}); keeping the existing citations.yml")
    if d.get("error") or not d.get("articles"):
        sys.exit(f"SerpApi returned no articles ({d.get('error')}); keeping the existing citations.yml")
    table = {k: v["all"] for row in d["cited_by"]["table"] for k, v in row.items()}
    papers = {}
    for a in d["articles"]:
        cited = a.get("cited_by") or {}
        n = cited.get("value") or 0
        papers[a["citation_id"]] = {
            "title": a["title"],
            "year": int(a["year"]) if a.get("year") else None,
            "citations": n,
            "cited_by_url": cited.get("link") if n else None,
        }
    return {
        "metadata": {
            "user": USER,
            "last_updated": datetime.date.today().isoformat(),
            "total_citations": table["citations"],
            "h_index": table["h_index"],
            "i10_index": table["i10_index"],
            "by_year": {g["year"]: g["citations"] for g in d["cited_by"].get("graph", [])},
        },
        "papers": papers,
    }


def to_yaml(data):
    # Every scalar is JSON-encoded, which is valid YAML and needs no PyYAML.
    j = json.dumps
    m = data["metadata"]
    out = ["# Generated by bin/update_citations.py. Do not edit by hand.", "metadata:"]
    for k in ("user", "last_updated", "total_citations", "h_index", "i10_index"):
        out.append(f"  {k}: {j(m[k])}")
    out.append("  by_year:")
    out += [f"    {y}: {c}" for y, c in m["by_year"].items()]
    out.append("papers:")
    for key, p in data["papers"].items():
        out.append(f"  {j(key)}:")
        out += [f"    {k}: {j(v)}" for k, v in p.items()]
    return "\n".join(out) + "\n"


def main():
    key = os.environ.get("SERPAPI_KEY")
    data = from_serpapi(key) if key else parse(fetch(URL))
    new = to_yaml(data)
    old = OUT.read_text() if OUT.exists() else ""
    # Ignore the date line when deciding whether anything changed.
    strip = lambda s: re.sub(r"\n  last_updated: .*", "", s)
    if strip(old) == strip(new):
        print("No citation changes.")
        return
    OUT.write_text(new)
    m = data["metadata"]
    print(f"Updated: {m['total_citations']} citations, h-index {m['h_index']}, {len(data['papers'])} papers.")


if __name__ == "__main__":
    main()
