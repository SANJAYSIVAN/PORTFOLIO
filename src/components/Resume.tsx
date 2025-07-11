import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            My Resume
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Download my complete resume to learn more about my education, experience, 
            and technical skills. I'm always excited to discuss new opportunities 
            and how I can contribute to your team.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="p-8 shadow-card hover:shadow-card-hover transition-all duration-300 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-20 bg-secondary rounded border-2 border-border flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-muted-foreground" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 18h12V6h-4V2H4v16zm-2 1V1h10l4 4v14H2z"/>
                    <path d="M6 10h8v1H6zM6 12h8v1H6zM6 14h5v1H6z"/>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                Sanjay M - Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Computer Science Engineer • PDF Document
              </p>

              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <a
                  href="/sanjay-m-cv.pdf"
                  download="Sanjay-M-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  Download Resume
                </a>
              </Button>
            </Card>
          </motion.div>

          <p className="text-sm text-muted-foreground">
            Last updated: March 2025 • PDF Format • 1 page
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
