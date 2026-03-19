import { motion } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles, Newspaper, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useRef(null);
  const { isVisible } = useScrollAnimation(ref);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={false}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-accent rounded-lg">
            <GraduationCap className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm a Master student in Computer Science at UC San Diego, exploring the 
            intersection of Machine Learning and Software Engineering.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I was a full-time Machine Learning Engineer at{" "}
            <a
              href="https://www.cambioml.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              CambioML (YC S23)
            </a>
            {" "}from 2024-2025, working on vision language models (
            <a
              href="https://www.cambioml.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              AnyParser
            </a>
            ) and Computer Use Agent (CUA) systems (
            <a
              href="https://www.energent.ai/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Energent.ai
            </a>
            ).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Previously studied Mathematics & Computer Science and Statistics at University of Illinois at Urbana-Champaign (UIUC).
            I bridge research ideas and production-ready engineering.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={false}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-card rounded-xl card-elevated"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Looking For</h3>
              </div>
              <p className="text-muted-foreground">
                Internship opportunities in Summer 2026
              </p>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-card rounded-xl card-elevated"
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Interests</h3>
              </div>
              <p className="text-muted-foreground">
                Machine Learning, Software Engineering, ML Systems, LLM Applications
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 w-full max-w-6xl"
        >
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">News</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 py-3 px-4 bg-muted/30 rounded-lg flex-wrap">
                <Newspaper className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground flex-shrink-0">Mar 3, 2026</span>
                <span className="text-sm text-foreground">
                  <a
                    href="https://ama-bench.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    AMA-Bench
                    <ExternalLink size={12} />
                  </a>
                  {" "}accepted to ICLR 2026 Workshop MemAgents.
                </span>
              </div>
              <div className="flex items-center gap-3 py-3 px-4 bg-muted/30 rounded-lg flex-nowrap overflow-x-auto">
                <Newspaper className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground flex-shrink-0">Mar 3, 2026</span>
                <span className="text-sm text-foreground whitespace-nowrap">
                  <a
                    href="https://arxiv.org/abs/2603.02473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    <em>Diagnosing Retrieval vs. Utilization Bottlenecks in LLM Agent Memory</em>
                  </a>
                  {" "}accepted to ICLR 2026 Workshop MemAgents.
                </span>
              </div>
              <div className="flex items-center gap-3 py-3 px-4 bg-muted/30 rounded-lg flex-wrap">
                <Newspaper className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground flex-shrink-0">Feb 27, 2026</span>
                <span className="text-sm text-foreground">
                  AMA-Bench for agent trajectory memory released on{" "}
                  <a
                    href="https://arxiv.org/abs/2602.22769"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    arXiv
                  </a>
                  .{" "}
                  <a
                    href="https://ama-bench.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Check out our benchmark
                    <ExternalLink size={12} />
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
