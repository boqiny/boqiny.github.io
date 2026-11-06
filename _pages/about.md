---
layout: about
title: About
permalink: /
subtitle: Building the evaluation, post-training, and serving infrastructure that makes long-horizon LLM agents work

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>b4yuan[at]ucsd.edu</p>
  scholar_stats: true

selected_papers: true
social: false

announcements:
  enabled: false
  scrollable: false
  limit: 3

latest_posts:
  enabled: false
---

<style>
  /* Subtitle sits at the same size and weight as body text by default, so it
     does not read as a tier. Size differentiates it without adding bold. */
  .post-header .desc {
    font-size: 1.1rem;
    letter-spacing: -0.01em;
    margin-top: 0.2rem;
  }
  /* Prose and bullet links: 13 accent-coloured links in a few lines reads as
     speckle. Keep them in the text colour with a soft underline, and reserve
     the accent for hover. Scoped to direct children so the timeline, the
     social row and the publication buttons are untouched. */
  .post .clearfix > p a,
  .post .clearfix > ul li a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    text-decoration-color: color-mix(in srgb, currentColor 35%, transparent);
    transition:
      color 0.15s ease,
      text-decoration-color 0.15s ease;
  }
  .post .clearfix > p a:hover,
  .post .clearfix > ul li a:hover {
    color: var(--global-theme-color);
    text-decoration-color: var(--global-theme-color);
  }
  .post .clearfix > p a.hl,
  .post .clearfix > ul li a.hl {
    color: var(--global-theme-color);
    text-decoration-color: color-mix(in srgb, var(--global-theme-color) 45%, transparent);
  }
  /* News: match the experience timeline (small muted dates, no bold, no
     inner scroll box) so it reads as part of the page, not a widget. */
  .post .news {
    margin-bottom: 0 !important;
  }
  .post .news table th {
    width: 88px !important;
    font-weight: 400;
    font-size: 0.82rem;
    opacity: 0.6;
    padding: 0.2rem 0.75rem 0.2rem 0;
    font-variant-numeric: tabular-nums;
    vertical-align: top;
    line-height: 1.6;
  }
  .post .news table td {
    padding: 0.2rem 0;
  }
  /* News: the newest 3 items show; older ones scroll inside the box. The
     native scrollbar is hidden (macOS, iOS and Firefox only show it while
     scrolling) and replaced by a quiet always-visible indicator: a hairline
     with a slim pill thumb, inset to span the text rather than the box. */
  .post .news {
    position: relative;
  }
  /* Width is set in the script below: just wide enough for the newest item to
     fit on one line, so the indicator sits close to the news text. */
  .post .news-scroll.is-scrollable {
    overflow-y: auto;
    overscroll-behavior: contain;
    padding-right: 1.5rem;
    scrollbar-width: none;
  }
  .post .news-scroll.is-scrollable::-webkit-scrollbar {
    display: none;
  }
  .news-rail {
    position: absolute;
    right: 0;
    width: 11px;
    cursor: pointer;
  }
  .news-rail::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;
    width: 1px;
    background: color-mix(in srgb, var(--global-text-color) 12%, transparent);
  }
  .news-thumb {
    position: absolute;
    top: 0;
    left: 4px;
    width: 3px;
    border-radius: 3px;
    background: color-mix(in srgb, var(--global-text-color) 38%, transparent);
    transition:
      width 0.15s ease,
      left 0.15s ease,
      background-color 0.15s ease;
  }
  .news-rail:hover .news-thumb,
  .news-rail.dragging .news-thumb {
    left: 3px;
    width: 5px;
    background: var(--global-theme-color);
  }
  @media (prefers-reduced-motion: reduce) {
    .news-thumb {
      transition: none;
    }
  }
  /* Scholar totals under the email (rendered in _layouts/about.liquid). */
  .profile .gs-side {
    font-variant-numeric: tabular-nums;
  }
  .profile .gs-side .gs-h {
    color: color-mix(in srgb, var(--global-text-color) 62%, var(--global-bg-color));
  }
  .profile .gs-side .gs-h::before {
    content: "\00B7";
    margin: 0 0.45em;
  }
</style>

I'm a Master's student in Computer Science at **UC San Diego**, where I work with [Prof. Jishen Zhao](https://cseweb.ucsd.edu/~jzhao/)'s STABLE Lab on **model training** and **ML systems**. I spent summer 2026 as a Software Engineer Intern (AI Agent) at [Moody's Analytics](https://www.moodys.com/){:.hl} in San Francisco, working on knowledge iteration and evaluation for their banking agent. Before UCSD, I was the founding Machine Learning Engineer at [CambioML (YC S23)](https://www.cambioml.com/en){:.hl} for over a year, where I trained and deployed [AnyParser](https://github.com/CambioML/any-parser), a vision-language model for document parsing, and built [Energent.ai](https://energent.ai), a computer-use agent sandbox. I studied Mathematics & Computer Science and Statistics at **UIUC** before that.

These days I spend my time on three things:

- **Agent evaluation and benchmarks** - benchmarks and diagnostics for **long-horizon** LLM agents: [SkillsBench](https://arxiv.org/abs/2602.12670), [Agents' Last Exam](https://arxiv.org/abs/2606.05405), [AMA-Bench](https://github.com/AMA-Bench/AMA-Bench){:.hl} (ICML 2026), and [memory-probe](https://github.com/boqiny/memory-probe){:.hl}. I also contribute to open-source agentic benchmarks: [Harbor](https://github.com/harbor-framework/harbor){:.hl}, [Terminal-Bench](https://www.tbench.ai/), and [QF-Bench](https://qfbench.com/).
- **Model training and alignment** - post-training LLMs and VLMs: training data curation, supervised fine-tuning, LoRA, and RL alignment with PPO, DPO, and GRPO in PyTorch and DeepSpeed.
- **ML systems and inference** - serving models under production load with SGLang, vLLM, speculative decoding, quantization, Kubernetes, and AWS.

**Graduating Dec 2026, open to full-time roles starting Jan 2027.**

<div style="display:flex; flex-wrap:wrap; gap:0.6rem 1.4rem; margin-top:0.5rem; font-size:1rem;">
  <a href="mailto:b4yuan@ucsd.edu" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-solid fa-envelope"></i> Email</a>
  <a href="https://github.com/boqiny" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-brands fa-github"></i> GitHub</a>
  <a href="https://linkedin.com/in/boqin-yuan" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
  <a href="https://scholar.google.com/citations?user=AglrzBgAAAAJ" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="ai ai-google-scholar"></i> Google Scholar</a>
  <a href="/assets/pdf/Boqin_Resume.pdf" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-solid fa-file-pdf"></i> Resume</a>
</div>

<h2 style="margin-top: 2.5rem">News</h2>

{% include news.liquid %}

<script>
  // Newest 3 news items visible; older ones scroll inside the box, which ends
  // exactly after the 3rd item. The indicator on the right shows there is
  // more; drag the thumb or click the line to move.
  (function () {
    var box = document.querySelector(".post .news-scroll");
    var rows = box ? box.querySelectorAll("tr") : [];
    if (rows.length <= 3) return;
    box.classList.add("is-scrollable");

    var INSET = 5; // px: span the text, not the row padding
    var rail = document.createElement("div");
    rail.className = "news-rail";
    rail.setAttribute("aria-hidden", "true");
    var thumb = document.createElement("div");
    thumb.className = "news-thumb";
    rail.appendChild(thumb);
    box.after(rail);

    function sync() {
      var h = box.clientHeight - 2 * INSET, max = box.scrollHeight - box.clientHeight;
      var th = Math.max(20, (h * box.clientHeight) / box.scrollHeight);
      rail.style.top = box.offsetTop + INSET + "px";
      rail.style.height = h + "px";
      thumb.style.height = th + "px";
      thumb.style.transform = "translateY(" + (max > 0 ? (box.scrollTop / max) * (h - th) : 0) + "px)";
    }
    var news = box.parentNode;
    function fitWidth() {
      // Narrowest box that keeps the newest item on one line (capped at the
      // column width). Phones keep the full width.
      news.style.maxWidth = "";
      if (window.innerWidth < 576) return;
      var cell = rows[0].cells[1], range = document.createRange();
      cell.style.whiteSpace = "nowrap";
      range.selectNodeContents(cell);
      var textRight = range.getBoundingClientRect().right;
      cell.style.whiteSpace = "";
      var pad = parseFloat(getComputedStyle(box).paddingRight);
      news.style.maxWidth = Math.ceil(textRight - news.getBoundingClientRect().left + pad + 4) + "px";
    }
    function fit() {
      fitWidth();
      // Rounded down so not a pixel of the 4th row shows.
      box.style.maxHeight = Math.floor(rows[2].offsetTop + rows[2].offsetHeight) + "px";
      sync();
    }
    box.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", fit);
    fit();

    function scrollTo(clientY, grab) {
      var r = rail.getBoundingClientRect(), th = thumb.offsetHeight;
      var y = Math.min(Math.max(clientY - r.top - grab, 0), r.height - th);
      box.scrollTop = (y / (r.height - th)) * (box.scrollHeight - box.clientHeight);
    }
    rail.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      var t = thumb.getBoundingClientRect();
      var grab = e.clientY >= t.top && e.clientY <= t.bottom ? e.clientY - t.top : thumb.offsetHeight / 2;
      scrollTo(e.clientY, grab);
      rail.classList.add("dragging");
      rail.setPointerCapture(e.pointerId);
      function move(ev) { scrollTo(ev.clientY, grab); }
      function up() {
        rail.classList.remove("dragging");
        rail.removeEventListener("pointermove", move);
        rail.removeEventListener("pointerup", up);
      }
      rail.addEventListener("pointermove", move);
      rail.addEventListener("pointerup", up);
    });
  })();
</script>

<h2 style="margin-top: 2.5rem"><a href="{{ '/experience/' | relative_url }}" style="color: inherit">Recent Experience</a></h2>

{% include experience_timeline.liquid compact=true %}

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Boqin Yuan",
    "url": "https://boqiny.github.io",
    "email": "mailto:b4yuan@ucsd.edu",
    "jobTitle": "Machine Learning Engineer",
    "description": "Machine learning engineer who builds infrastructure for evaluating LLM agents: benchmarks, memory diagnostics, and evaluation harnesses. Also trains and serves models. Graduating December 2026, available for full-time roles starting January 2027.",
    "knowsAbout": [
      "LLM agents",
      "AI agent evaluation",
      "Benchmark design",
      "Agent memory",
      "Large language models",
      "Vision-language models",
      "Model fine-tuning",
      "Preference alignment",
      "Direct Preference Optimization (DPO)",
      "PPO",
      "GRPO",
      "RLHF",
      "LoRA",
      "ZeRO",
      "Quantization",
      "vLLM",
      "Speculative decoding",
      "Speculative tool calling",
      "Reinforcement learning",
      "DeepSpeed",
      "ML systems",
      "Inference optimization",
      "SGLang",
      "Distributed training",
      "PyTorch",
      "Kubernetes",
      "AWS"
    ],
    "affiliation": {
      "@type": "CollegeOrUniversity",
      "name": "University of California San Diego",
      "url": "https://ucsd.edu"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "University of California San Diego",
        "url": "https://ucsd.edu"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Illinois Urbana-Champaign",
        "url": "https://illinois.edu"
      }
    ],
    "seeks": {
      "@type": "Demand",
      "name": "Full-time roles starting January 2027 in LLM agent development and evaluation, model training and alignment, or ML systems and inference infrastructure",
      "availabilityStarts": "2027-01"
    },
    "sameAs": [
      "https://github.com/boqiny",
      "https://linkedin.com/in/boqin-yuan",
      "https://scholar.google.com/citations?user=AglrzBgAAAAJ"
    ]
  }
</script>
