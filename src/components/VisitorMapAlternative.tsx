import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Globe, Users, Eye } from "lucide-react";
import { Card } from "./ui/card";

// Sample visitor data - Replace with real data from your analytics
const sampleVisitorData = [
  { country: "United States", visitors: 1243, lat: 37.0902, lng: -95.7129 },
  { country: "China", visitors: 856, lat: 35.8617, lng: 104.1954 },
  { country: "United Kingdom", visitors: 432, lat: 55.3781, lng: -3.4360 },
  { country: "Germany", visitors: 321, lat: 51.1657, lng: 10.4515 },
  { country: "India", visitors: 289, lat: 20.5937, lng: 78.9629 },
  { country: "Canada", visitors: 267, lat: 56.1304, lng: -106.3468 },
  { country: "France", visitors: 198, lat: 46.2276, lng: 2.2137 },
  { country: "Japan", visitors: 176, lat: 36.2048, lng: 138.2529 },
  { country: "Australia", visitors: 143, lat: -25.2744, lng: 133.7751 },
  { country: "Brazil", visitors: 121, lat: -14.2350, lng: -51.9253 },
];

const VisitorMapAlternative = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate total visitors count
      const total = sampleVisitorData.reduce((sum, item) => sum + item.visitors, 0);
      let current = 0;
      const increment = total / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= total) {
          setTotalVisitors(total);
          clearInterval(timer);
        } else {
          setTotalVisitors(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="visitor-map" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-accent rounded-lg">
            <Globe className="w-6 h-6 text-accent-foreground" />
          </div>
          <h2 className="section-heading">Global Reach</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 text-center">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {totalVisitors.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Visitors</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {sampleVisitorData.length}
                </div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {Math.floor(totalVisitors / 30)}
                </div>
                <div className="text-sm text-muted-foreground">Daily Average</div>
              </Card>
            </motion.div>
          </div>

          {/* Visitor List */}
          <Card className="p-6 bg-card">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Top Visitor Locations
            </h3>
            <div className="space-y-3">
              {sampleVisitorData.map((location, index) => (
                <motion.div
                  key={location.country}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-muted-foreground w-6">
                      {index + 1}
                    </span>
                    <span className="font-medium text-foreground">
                      {location.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-background rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(location.visitors / sampleVisitorData[0].visitors) * 100}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                        className="h-full bg-primary"
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-16 text-right">
                      {location.visitors.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Integration Instructions */}
          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-sm text-foreground mb-2">
              🔌 Integration Options:
            </h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Google Analytics:</strong> Use the Analytics API to fetch real visitor data by location.
              </p>
              <p>
                <strong>Vercel Analytics:</strong> If deployed on Vercel, use their analytics to get geographic data.
              </p>
              <p>
                <strong>Custom Backend:</strong> Build a simple API that logs visitor IPs and resolves them to countries.
              </p>
              <p>
                <strong>ClustrMaps:</strong> Switch to the ClustrMaps component for zero-config tracking.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorMapAlternative;

