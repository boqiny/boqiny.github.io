import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Brain, Cpu, Code2 } from "lucide-react";

const researchInterests = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, neural networks, and applied ML systems",
  },
  {
    icon: Cpu,
    title: "Systems",
    description: "Distributed systems, performance optimization, and infrastructure",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Scalable architecture, best practices, and clean code",
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-accent rounded-lg">
            <Lightbulb className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="section-heading">Research Interests</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchInterests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="p-6 bg-background rounded-xl card-elevated group"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <interest.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {interest.title}
              </h3>
              <p className="text-muted-foreground">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
