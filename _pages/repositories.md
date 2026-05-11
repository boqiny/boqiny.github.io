---
layout: page
title: Repositories
permalink: /repositories/
description: Open source projects I have built or contributed to.
nav: true
nav_order: 3
---

## GitHub

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    <div class="repo p-2 text-center">
      <a href="https://github.com/{{ user }}" target="_blank" style="display:flex; align-items:center; gap:0.75rem; text-decoration:none; color:inherit;">
        <img src="https://avatars.githubusercontent.com/{{ user }}" alt="{{ user }}" style="width:64px; height:64px; border-radius:50%;">
        <span style="font-size:1.1rem; font-weight:600;">{{ user }}</span>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}

---

## Pinned Repositories

{% if site.data.repositories.github_repos %}
<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:0.75rem; max-width:760px;">
  {% for repo in site.data.repositories.github_repos %}
    <a href="https://github.com/{{ repo }}" target="_blank" style="display:block; line-height:0; border-radius:8px; overflow:hidden; box-shadow:0 1px 4px rgba(0,0,0,0.12);">
      <img alt="{{ repo }}" style="width:100%; display:block;"
        src="https://opengraph.githubassets.com/1/{{ repo }}">
    </a>
  {% endfor %}
</div>
{% endif %}
