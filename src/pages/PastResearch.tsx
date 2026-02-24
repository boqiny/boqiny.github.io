import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import uiucLogo from "@/assets/logos/university_of_illinois_at_urbana_champaign_logo.jpeg";
import ncsaLogo from "@/assets/logos/ncsaatillinois_logo.jpeg";
import iglLogo from "@/assets/logos/igl.jpeg";
import iglPoster from "@/assets/pdfs/igl2022_capacity_poster.pdf";

const experiences = [
  {
    logo: uiucLogo,
    title: "Research Assistant - Yu Lab",
    organization: "University of Illinois Urbana-Champaign",
    type: "Part-time",
    duration: "Aug 2023 - Jul 2024 · 1 yr",
    location: "Champaign, Illinois, United States",
    description: [
      "Deep learning application for analyzing astrocyte in time series images to detect Alzheimer's disease.",
    ],
    links: [
      {
        text: "Yu Lab | Astrocyte Research",
        url: "https://yu-lab.org/",
      },
    ],
  },
  {
    logo: ncsaLogo,
    title: "NCSA SPIN",
    organization: "National Center for Supercomputing Applications",
    type: "Part-time",
    duration: "Aug 2023 - May 2024 · 10 mos",
    location: "Champaign, Illinois, United States",
    description: [
      "Researching machine learning and deep learning applications in geospatial and remote sensing.",
      "Applying deep learning to downstream tasks on pre-trained foundation models, focusing on multi-temporal crop classification.",
      "Creating a machine learning model to detect tillage practices throughout Europe.",
    ],
    links: [
      {
        text: "National Center for Supercomputing Applications",
        url: "https://www.ncsa.illinois.edu/about/",
      },
    ],
  },
  {
    logo: iglLogo,
    title: "Research Assistant",
    organization: "Illinois Geometry Lab",
    type: "Part-time",
    duration: "Jan 2022 - May 2022 · 5 mos",
    location: "Champaign, Illinois, United States",
    description: [
      "Quantum Capacity Bounds and Semidefinite Programming",
      "Under supervision of Professor Felix Leditzky",
    ],
    links: [
      {
        text: "View Research Poster",
        url: iglPoster,
      },
      {
        text: "Illinois Mathematics Lab",
        url: "https://iml.math.illinois.edu/",
      },
    ],
  },
];

const PastResearch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Past Research Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              Previous research positions and contributions
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                className="bg-card rounded-xl card-elevated p-8"
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
                        <span>{exp.organization}</span>
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

                    <div className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-foreground leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>

                    {exp.links && exp.links.length > 0 && (
                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        {exp.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                          >
                            {link.text}
                            <ExternalLink size={16} />
                          </a>
                        ))}
                      </div>
                    )}
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

export default PastResearch;
