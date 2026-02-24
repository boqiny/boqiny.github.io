import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cambiomlLogo from "@/assets/logos/cambioml_logo.jpeg";
import inspurLogo from "@/assets/logos/inspur.jpeg";
import illinoisLeadershipLogo from "@/assets/logos/illinois_leadership_center_logo.jpeg";

const experiences = [
  {
    id: "cambioml",
    logo: cambiomlLogo,
    title: "Machine Learning Engineer",
    organization: "CambioML (YC S23)",
    organizationUrl: "https://www.cambioml.com/en",
    type: "Full-time",
    duration: "July 2024 - July 2025 · 1 yr",
    location: "San Jose, CA",
    description: [
      "Engineered and productionized AnyParser, a fine-tuned 1B & 2B vision-language model for parsing PDFs into structured Markdown (text, tables, charts). Fully fine-tuned and post-aligned with preference data to improve robustness, achieving higher accuracy than GPT-4 baselines. Optimized inference with SGLang, delivering 8x throughput on L4 GPUs. Deployed as a SaaS on AWS using ECS + Lambda, with a React frontend and DynamoDB + Cognito.",
      { type: "link", text: "AnyParser on GitHub", url: "https://github.com/CambioML/any-parser" },
      "Orchestrated the design and deployment of Energent.ai, a computer-use agent (CUA) sandbox powered by Claude that autonomously executes diverse desktop tasks. Engineered a multi-agent system comprising data, web, and coding agents with orchestration, long-term memory persistence, and state management, enabling tool integration and MCP. Leveraged Kubernetes to provision isolated per-user sandbox VM sessions, scaling to support 1000+ users worldwide.",
      { type: "link", text: "Energent.ai", url: "https://app.energent.ai/agent" },
    ],
  },
  {
    id: "inspur",
    logo: inspurLogo,
    title: "Machine Learning Engineer Intern",
    organization: "Inspur Group",
    type: "Internship",
    duration: "May 2023 - Aug 2023 · 4 mos",
    location: "Jinan, China",
    description: [
      "Constructed and annotated a custom volleyball dataset and trained YOLOv7-based object detection models for real-time AI fitness assessment. Implemented and optimized YOLO Pose keypoint detection for athletic movement analysis (e.g., long jump scoring), and accelerated inference with TensorRT, reducing latency while maintaining high accuracy in challenging outdoor environments. Integrated models into the backend system in C++.",
    ],
  },
  {
    id: "illinois-leadership",
    logo: illinoisLeadershipLogo,
    title: "Data Analyst",
    organization: "Illinois Leadership® Center",
    organizationUrl: "https://leadership.illinois.edu/",
    type: "Part-time",
    duration: "Aug 2022 - May 2023 · 10 mos",
    location: "Illinois, United States",
    description: [
      "Analyzed data weekly from leadership surveys, created data visualizations and reports, and helped facilitate leadership and communication workshops.",
      "Really enjoyed working with Nick Bonanno, he is a good supervisor.",
    ],
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      const scrollToSection = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      const timer = setTimeout(scrollToSection, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional experience in machine learning and software engineering
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                id={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                className="bg-card rounded-xl card-elevated p-8 scroll-mt-28"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-background rounded-lg flex items-center justify-center p-3 border border-border">
                      <img 
                        src={exp.logo} 
                        alt={exp.organization}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {exp.organizationUrl ? (
                          <a
                            href={exp.organizationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                          >
                            {exp.organization}
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <span>{exp.organization}</span>
                        )}
                      </div>
                      <span className="text-muted-foreground/50">·</span>
                      <span>{exp.type}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.description.map((item, i) =>
                        typeof item === "string" ? (
                          <p key={i} className="text-foreground leading-relaxed">
                            {item}
                          </p>
                        ) : (
                          <a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                          >
                            {item.text}
                            <ExternalLink size={16} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkExperience;
