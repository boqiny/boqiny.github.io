import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import profilePlaceholder from "@/assets/touxiang.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/boqiny", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/boqin-yuan", label: "LinkedIn" },
  { icon: FileText, href: "https://scholar.google.com/citations?user=AglrzBgAAAAJ&hl=en", label: "Scholar" },
  { icon: Mail, href: "mailto:b4yuan@ucsd.edu", label: "Email" },
];

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-card card-elevated border-4 border-background shadow-xl">
              <img 
                src={profilePlaceholder} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-foreground">
              Boqin Yuan
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-2">
              MSCS @ UC San Diego
            </p>
            <p className="text-muted-foreground mb-6">
              b4yuan[at]ucsd.edu
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-3 bg-card rounded-xl card-elevated hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
