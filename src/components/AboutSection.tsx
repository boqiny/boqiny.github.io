import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-accent rounded-lg">
            <GraduationCap className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm a Master student in Computer Science at UC San Diego, exploring the 
            intersection of ML systems, LLM applications, and software engineering.
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
            {" "}from 2024-2025 after graduation, working on vision language models (
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
            Previously studied Mathematics & Computer Science and Statistics at UIUC.
            I enjoy building systems that bridge research and production.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-card rounded-xl card-elevated"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Looking For</h3>
              </div>
              <p className="text-muted-foreground">
                Internship opportunities starting Summer 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-card rounded-xl card-elevated"
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Interests</h3>
              </div>
              <p className="text-muted-foreground">
                Machine Learning, ML Systems, LLM Applications, Software Engineering
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
