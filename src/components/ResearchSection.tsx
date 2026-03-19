import { motion } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Brain, Cpu, Database, Shield, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const researchInterests = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Vision-Language Models, Model Training, Reinforcement Learning",
  },
  {
    icon: Cpu,
    title: "ML Systems",
    description: "Efficient Inference, Distributed Training, Model Compression",
  },
  {
    icon: Database,
    title: "Agent Memory",
    description: "Long-Horizon Memory, Agent Trajectories, Causality Graphs, Agentic RAG",
  },
  {
    icon: Shield,
    title: "AI Safety",
    description: "LLM Jailbreaking, LLM Alignment",
  }
];
  
const ResearchSection = () => {
  const ref = useRef(null);
  const { isVisible } = useScrollAnimation(ref);

  return (
    <section id="research" className="py-24 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={false}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-accent rounded-lg">
            <Lightbulb className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="section-heading">Research Interests</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchInterests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={false}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
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

        <motion.div
          initial={false}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            to="/past-research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-xl card-elevated hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            Past Research Experience
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
