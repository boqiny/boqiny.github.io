---
layout: about
title: About
permalink: /
subtitle: Machine learning engineer · MS Computer Science, UC San Diego

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>b4yuan[at]ucsd.edu</p>

selected_papers: true
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 20

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
</style>

I build the infrastructure that measures whether LLM agents actually work: benchmarks, memory diagnostics, and the evaluation harnesses they run on. I also train and serve the models underneath.

I'm a Master's student in Computer Science at **UC San Diego**, where I work with [Prof. Jishen Zhao](https://cseweb.ucsd.edu/~jzhao/)'s STABLE Lab on **agent memory** and **ML systems**. I spent summer 2026 as an SDE Intern (AI Agent) at [Moody's Analytics](https://www.moodys.com/){:.hl} in San Francisco, working on knowledge iteration and evaluation for their banking agent. Before UCSD, I was a full-time Machine Learning Engineer at [CambioML (YC S23)](https://www.cambioml.com/en){:.hl} for a year, building [AnyParser](https://github.com/CambioML/any-parser), a vision-language model for document parsing, and [Energent.ai](https://energent.ai), a computer-use agent sandbox. I studied Mathematics & Computer Science at **UIUC** before that.

- **Agent evaluation and benchmarks** - co-author of [SkillsBench](https://arxiv.org/abs/2602.12670), [Agents' Last Exam](https://arxiv.org/abs/2606.05405), and [AMA-Bench](https://github.com/AMA-Bench/AMA-Bench){:.hl} (ICML 2026, long-horizon agent memory); first author of [memory-probe](https://github.com/boqiny/memory-probe){:.hl} (ICLR 2026 workshop), which separates retrieval failures from utilization failures. Open-source contributor to [Harbor](https://github.com/harbor-framework/harbor){:.hl}, [Terminal-Bench](https://www.tbench.ai/), [QF-Bench](https://qfbench.com/), and [AgenticVBench](https://github.com/PhiloLabs/agentic-vbench).
- **Model training and alignment** - fully fine-tuned and preference-aligned a 1B/2B VLM (AnyParser) past GPT-4 baselines and into production; co-authored [PRO-V-R1](https://arxiv.org/abs/2506.12200){:.hl} (DAC 2026), an 8B agent post-trained with SFT plus GRPO on verification rewards that beats far larger proprietary models on functional correctness; and built a [DPO trainer](https://github.com/boqiny/deepspeed-chat){:.hl} from scratch with LoRA and ZeRO, extending a DeepSpeed-Chat pipeline that shipped with PPO only.
- **ML systems and inference** - high-concurrency production serving of the AnyParser VLM at 8× throughput on L4 GPUs with SGLang, deployed on Kubernetes and AWS. Familiar with distributed training and inference optimization: vLLM, speculative decoding, and model quantization. Built [speculative tool calling](https://github.com/boqiny/spec_tool_call){:.hl} to cut agent latency by pre-executing tools during reasoning.

**Graduating Dec 2026, available for full-time roles from Jan 2027.**

<div style="display:flex; flex-wrap:wrap; gap:0.6rem 1.4rem; margin-top:0.5rem; font-size:1rem;">
  <a href="mailto:b4yuan@ucsd.edu" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-solid fa-envelope"></i> Email</a>
  <a href="https://github.com/boqiny" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-brands fa-github"></i> GitHub</a>
  <a href="https://linkedin.com/in/boqin-yuan" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
  <a href="https://scholar.google.com/citations?user=AglrzBgAAAAJ" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="ai ai-google-scholar"></i> Google Scholar</a>
  <a href="/assets/pdf/Boqin_Resume.pdf" target="_blank" style="display:flex; align-items:center; gap:0.4rem; text-decoration:none; opacity:0.8;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'"><i class="fa-solid fa-file-pdf"></i> Resume</a>
</div>

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
    "description": "Machine learning engineer who builds infrastructure for evaluating LLM agents: benchmarks, memory diagnostics, and evaluation harnesses. Also trains and serves models. Graduating December 2026, available for full-time roles from January 2027.",
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
