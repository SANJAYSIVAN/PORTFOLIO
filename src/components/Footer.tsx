import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Sanjay M</h3>
            <p className="text-primary-foreground/80 mb-6">
              Building Designs, one component at a time.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="www.linkedin.com/in/sanjay-m-3a1426307"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/SANJAYSIVAN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                GitHub
              </motion.a>
              <motion.a
                href="mailto:m.k.sanjaysivan@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Email
              </motion.a>
            </div>
            
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 Sanjay Sivan. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;