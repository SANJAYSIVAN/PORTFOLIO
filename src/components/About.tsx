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
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-center font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
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