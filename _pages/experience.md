---
layout: page
title: Experience
permalink: /experience/
description: Industry roles and research positions I've held.
nav: true
nav_order: 1
---

<style>
  .exp-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  .exp-item {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1rem 1.1rem;
    border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08));
    border-radius: 10px;
    background: var(--global-card-bg-color, transparent);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }
  .exp-item:hover {
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }
  .exp-logo {
    flex: 0 0 72px;
    width: 72px;
    height: 72px;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.06);
  }
  .exp-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 4px;
  }
  .exp-logo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    color: #555;
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  }
  .exp-body { flex: 1; min-width: 0; }
  .exp-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.4rem 1rem;
  }
  .exp-role {
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0;
  }
  .exp-meta {
    font-size: 0.88rem;
    opacity: 0.75;
    white-space: nowrap;
  }
  .exp-company {
    font-size: 0.95rem;
    margin: 0.1rem 0 0.45rem;
    opacity: 0.85;
  }
  .exp-company a { text-decoration: none; }
  .exp-company a:hover { text-decoration: underline; }
  .exp-desc {
    font-size: 0.92rem;
    line-height: 1.55;
    margin: 0;
    opacity: 0.92;
  }
  .exp-section-title {
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    border-bottom: 1px solid var(--global-divider-color, rgba(0,0,0,0.08));
    padding-bottom: 0.35rem;
  }
  @media (max-width: 576px) {
    .exp-item { flex-direction: column; align-items: center; text-align: center; }
    .exp-header { justify-content: center; }
  }
</style>

<h2 class="exp-section-title">Industry</h2>

<div class="exp-list">

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/moodys_icon.png' | relative_url }}" alt="Moody's Analytics"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">SDE Intern (AI Agent)</p>
        <span class="exp-meta">Jun 2026 – Sep 2026 · San Francisco, CA</span>
      </div>
      <p class="exp-company"><a href="https://www.moodys.com/" target="_blank">Moody's Analytics</a> · Banking team</p>
      <p class="exp-desc">Building and evaluating AI agents for financial services applications, focused on banking workflows and analyst-facing automation.</p>
    </div>
  </div>

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/cambioml_logo.jpeg' | relative_url }}" alt="CambioML"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">Machine Learning Engineer</p>
        <span class="exp-meta">Jul 2024 – Jul 2025 · San Jose, CA</span>
      </div>
      <p class="exp-company"><a href="https://www.cambioml.com/en" target="_blank">CambioML (YC S23)</a> · Full-time</p>
      <p class="exp-desc">Engineered and productionized <strong>AnyParser</strong>, a fine-tuned 1B &amp; 2B vision-language model for parsing PDFs into structured Markdown — fully fine-tuned and preference-aligned, beating GPT-4 baselines; SGLang inference delivered 8× throughput on L4 GPUs, deployed as a SaaS on AWS (ECS + Lambda). Led design and deployment of <strong>Energent.ai</strong>, a Claude-powered Computer-Use Agent (CUA) sandbox with multi-agent orchestration, long-term memory, and per-user Kubernetes-isolated VM sessions scaling to 1000+ users.</p>
    </div>
  </div>

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/inspur.jpeg' | relative_url }}" alt="Inspur Group"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">Machine Learning Engineer Intern</p>
        <span class="exp-meta">May 2023 – Aug 2023 · Jinan, China</span>
      </div>
      <p class="exp-company">Inspur Group · Internship</p>
      <p class="exp-desc">Built and annotated a custom volleyball dataset and trained YOLOv7 detectors for real-time AI fitness assessment. Implemented YOLO Pose keypoint detection for athletic movement analysis and accelerated inference with TensorRT, reducing latency while preserving accuracy.</p>
    </div>
  </div>

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/illinois_leadership_center_logo.jpeg' | relative_url }}" alt="Illinois Leadership Center"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">Data Analyst</p>
        <span class="exp-meta">Aug 2022 – May 2023 · Urbana, IL</span>
      </div>
      <p class="exp-company"><a href="https://leadership.illinois.edu/" target="_blank">Illinois Leadership Center</a> · Part-time</p>
      <p class="exp-desc">Analyzed weekly leadership-survey data, produced visualizations and reports, and helped facilitate leadership and communication workshops on campus.</p>
    </div>
  </div>

</div>

<h2 class="exp-section-title">Research</h2>

<div class="exp-list">

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/university_of_illinois_at_urbana_champaign_logo.jpeg' | relative_url }}" alt="Yu Lab, UIUC"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">Research Assistant — Yu Lab</p>
        <span class="exp-meta">Aug 2023 – Jul 2024 · Urbana, IL</span>
      </div>
      <p class="exp-company"><a href="https://yu-lab.org/" target="_blank">UIUC, Prof. Xinzhu Yu</a> · Part-time</p>
      <p class="exp-desc">Applied deep learning to time-series microscopy of astrocytes for early detection of Alzheimer's-related changes.</p>
    </div>
  </div>

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/ncsaatillinois_logo.jpeg' | relative_url }}" alt="NCSA"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">NCSA SPIN Research Intern</p>
        <span class="exp-meta">Aug 2023 – May 2024 · Urbana, IL</span>
      </div>
      <p class="exp-company"><a href="https://www.ncsa.illinois.edu/about/" target="_blank">National Center for Supercomputing Applications</a> · Part-time</p>
      <p class="exp-desc">Worked with Prof. Kaiyu Guan and Prof. Sheng Wang on machine learning for geospatial and remote-sensing data, including multi-temporal crop classification on pre-trained foundation models and a tillage-practice detection model spanning Europe.</p>
    </div>
  </div>

  <div class="exp-item">
    <div class="exp-logo"><img src="{{ '/assets/img/logos/igl.jpeg' | relative_url }}" alt="Illinois Geometry Lab"></div>
    <div class="exp-body">
      <div class="exp-header">
        <p class="exp-role">Research Assistant</p>
        <span class="exp-meta">Jan 2022 – May 2022 · Urbana, IL</span>
      </div>
      <p class="exp-company"><a href="https://iml.math.illinois.edu/" target="_blank">Illinois Geometry Lab</a> · Prof. Felix Leditzky</p>
      <p class="exp-desc">Studied quantum capacity bounds via semidefinite programming.</p>
    </div>
  </div>

</div>
