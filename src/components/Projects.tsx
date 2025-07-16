import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Fitness Tracker",
      description: "A Streamlit web app that predicts calories burned during exercise using a Random Forest Regressor and Python trained on personal fitness data ",
      image: project1,
      github: "https://github.com/SANJAYSIVAN/FITNESS-TRACKER",
      demo: "https://shadow-tracker-fitness.streamlit.app/",
      technologies: ["Python", "Machine Learning", "Streamlit", "Jupiter Notebooks"]
    },
    {
      id: 2,
      title: "CHATBOT FOR CIET",
      description: "A Chat Bot for College Related Queries that Helps Students and Parents By Providing Further needed Information without delay and real time queues.",
      image: project2,
      github: "https://github.com/SANJAYSIVAN/CHAT-BOT",
      demo: "NOT AVAILABLE",
      technologies: ["HTML", "CSS", "JavaScript", "Flask" , "Mongo DB"]
    },
   {
      id: 3,
      title: "BANKAI MUSIC PLAYER",
      description: "Bankai Music Player is a clean and easy-to-use Local Device music player built with React. It lets you load songs from your device, manage playlists, and enjoy smooth playback with a modern, stylish interface that is still in developing phase.",
      image: project3,
      github: "error",
      demo: "https://bankai-musicplayer.vercel.app",
      technologies: ["React 18", "Vite", "Type Script", "Tail Wind CSS", "Radix UI","React router DOM", "Embla"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;