import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-foreground cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Sanjay M
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8">
              {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-foreground"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;