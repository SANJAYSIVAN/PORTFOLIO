import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Python', 'C Programming','HTML','CSS', 'JavaScript', 'React','Git', 'Responsive Design', 'Tailwind CSS','Java',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science Engineer with a keen eye for design and a love for creating 
                seamless user experiences. Currently pursuing my degree in Computer Science, I've been 
                diving deep into modern web technologies and best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring the latest design trends, contributing to 
                simple new open-source projects, or experimenting with different styles. I believe in creating clean, 
                maintainable interfaces that users love to interact with.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities to contribute to innovative projects and grow as a 
                developer in a collaborative team environment.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Core Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        delay: index * 0.08, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      className="group relative bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground px-4 py-3 rounded-xl text-center font-medium hover:bg-gradient-to-br hover:from-accent hover:to-accent/90 hover:text-accent-foreground transition-all duration-300 cursor-default shadow-sm hover:shadow-md border border-border/50 hover:border-accent/30"
                    >
                      <span className="relative z-10 text-sm font-semibold tracking-wide">
                        {skill}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;