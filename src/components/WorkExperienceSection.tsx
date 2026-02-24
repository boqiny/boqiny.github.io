import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cambiomlLogo from "@/assets/logos/cambioml_logo.jpeg";
import inspurLogo from "@/assets/logos/inspur.jpeg";
import illinoisLeadershipLogo from "@/assets/logos/illinois_leadership_center_logo.jpeg";

const experiences = [
  {
    id: "cambioml",
    logo: cambiomlLogo,
    title: "Machine Learning Engineer",
    organization: "CambioML (YC S23)",
    duration: "July 2024 - July 2025",
    location: "San Jose, CA",
  },
  {
    id: "inspur",
    logo: inspurLogo,
    title: "Machine Learning Engineer Intern",
    organization: "Inspur Group",
    duration: "May 2023 - Aug 2023",
    location: "Jinan, China",
  },
  {
    id: "illinois-leadership",
    logo: illinoisLeadershipLogo,
    title: "Data Analyst",
    organization: "Illinois Leadership® Center",
    duration: "Aug 2022 - May 2023",
    location: "Illinois, United States",
  },
];

const WorkExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work-experience" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-accent rounded-lg">
            <Briefcase className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="section-heading">Work Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.slice(0, 2).map((exp, index) => (
            <Link
              key={exp.id}
              to={`/work-experience#${exp.id}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 bg-card rounded-xl card-elevated group hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center p-2 border border-border">
                    <img 
                      src={exp.logo} 
                      alt={exp.organization}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {exp.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            to="/work-experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-xl card-elevated hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            View Full Work Experience
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
