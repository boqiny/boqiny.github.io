import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const VisitorMapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visitor-map" className="py-16 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex justify-center"
        >
          <a href="https://clustrmaps.com/site/1c8ww" title="Visit tracker">
            <img 
              src="//www.clustrmaps.com/map_v2.png?d=_SZuuAE6cFmYSznUFaOGJ8whoMhwR1rCE-hLZSYJITs&cl=ffffff" 
              alt="Visitor map"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorMapSection;

