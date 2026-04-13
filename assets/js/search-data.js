// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Work experience, research experience, and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-ama-bench-for-agent-trajectory-memory-released-on-arxiv-check-out-our-benchmark",
          title: 'AMA-Bench for agent trajectory memory released on arXiv. Check out our benchmark!',
          description: "",
          section: "News",},{id: "news-diagnosing-retrieval-vs-utilization-bottlenecks-in-llm-agent-memory-accepted-to-iclr-2026-workshop-memagents",
          title: 'Diagnosing Retrieval vs. Utilization Bottlenecks in LLM Agent Memory accepted to ICLR 2026...',
          description: "",
          section: "News",},{id: "news-ama-bench-accepted-to-iclr-2026-workshop-memagents",
          title: 'AMA-Bench accepted to ICLR 2026 Workshop MemAgents.',
          description: "",
          section: "News",},{id: "news-diagnosing-retrieval-vs-utilization-bottlenecks-in-llm-agent-memory-accepted-to-iclr-2026-workshop-memagents",
          title: 'Diagnosing Retrieval vs. Utilization Bottlenecks in LLM Agent Memory accepted to ICLR 2026...',
          description: "",
          section: "News",},{id: "news-ama-bench-accepted-to-iclr-2026-workshop-memagents",
          title: 'AMA-Bench accepted to ICLR 2026 Workshop MemAgents.',
          description: "",
          section: "News",},{id: "news-l-mars-v2-updated-on-arxiv",
          title: 'L-MARS v2 updated on arXiv.',
          description: "",
          section: "News",},{id: "news-l-mars-v2-updated-on-arxiv",
          title: 'L-MARS v2 updated on arXiv.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
