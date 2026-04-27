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
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>
{% endif %}

---

## Pinned Repositories

{% if site.data.repositories.github_repos %}
<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:0.5rem; max-width:700px;">
  {% for repo in site.data.repositories.github_repos %}
    {% assign repo_parts = repo | split: '/' %}
    <a href="https://github.com/{{ repo }}" target="_blank" style="display:block; line-height:0;">
      <img class="only-light w-100" style="border-radius:6px;" alt="{{ repo }}"
        src="{{ site.external_services.github_readme_stats_url }}/api/pin/?username={{ repo_parts[0] }}&repo={{ repo_parts[1] }}&theme={{ site.repo_theme_light }}&show_owner=true&description_lines_count=2">
      <img class="only-dark w-100" style="border-radius:6px;" alt="{{ repo }}"
        src="{{ site.external_services.github_readme_stats_url }}/api/pin/?username={{ repo_parts[0] }}&repo={{ repo_parts[1] }}&theme={{ site.repo_theme_dark }}&show_owner=true&description_lines_count=2">
    </a>
  {% endfor %}
</div>
{% endif %}
