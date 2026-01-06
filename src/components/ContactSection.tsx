import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-accent rounded-lg">
              <Send className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="section-heading">Get In Touch</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-10">
            I'm always open to discussing new opportunities, research collaborations, 
            or just having a chat about technology. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="mailto:b4yuan@ucsd.edu"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl card-elevated hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">b4yuan@ucsd.edu</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl card-elevated"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">San Diego, CA</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com/boqiny"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-background rounded-xl card-elevated hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/boqin-yuan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-background rounded-xl card-elevated hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center"
          >
            <a 
              href="https://clustrmaps.com/site/1c8ww" 
              title="Visit tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl overflow-hidden card-elevated hover:scale-105 transition-transform"
            >
              <img 
                src="//www.clustrmaps.com/map_v2.png?d=_SZuuAE6cFmYSznUFaOGJ8whoMhwR1rCE-hLZSYJITs&cl=ffffff" 
                alt="Visitor map"
                className="max-w-full h-auto"
                style={{ minWidth: '300px' }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
