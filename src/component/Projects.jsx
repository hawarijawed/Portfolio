import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Folder } from 'lucide-react';

const projectCategories = [
  {
    id: 'ml-ai',
    name: 'ML/AI Projects',
    description: 'Machine Learning and Artificial Intelligence projects',
    icon: '🤖',
    projects: [
      {
        id: 1,
        title: 'Image Classification Model',
        description: 'Deep learning model for multi-class image classification using CNNs',
        tags: ['Python', 'TensorFlow', 'Keras', 'CV'],
      },
      {
        id: 2,
        title: 'NLP Sentiment Analysis',
        description: 'Sentiment analysis tool using transformers and BERT',
        tags: ['Python', 'PyTorch', 'BERT', 'NLP'],
      },
      {
        id: 3,
        title: 'Recommendation System',
        description: 'Collaborative filtering recommendation engine',
        tags: ['Python', 'Scikit-learn', 'Pandas'],
      },
    ],
  },
  {
    id: 'mern',
    name: 'MERN Stack Projects',
    description: 'Full-stack applications built with MongoDB, Express, React, and Node.js',
    icon: '⚛️',
    projects: [
      {
        id: 4,
        title: 'E-commerce Platform',
        description: 'Full-featured online shopping platform with payment integration',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      },
      {
        id: 5,
        title: 'Social Media App',
        description: 'Real-time social networking application with chat features',
        tags: ['React', 'Socket.io', 'MongoDB', 'JWT'],
      },
      {
        id: 6,
        title: 'Task Management System',
        description: 'Collaborative project management tool with real-time updates',
        tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      },
    ],
  },
  {
    id: 'java',
    name: 'Java Stack Projects',
    description: 'Enterprise applications built with Java and Spring Framework',
    icon: '☕',
    projects: [
      {
        id: 7,
        title: 'Banking Management System',
        description: 'Secure banking application with transaction management',
        tags: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
      },
      {
        id: 8,
        title: 'Employee Portal',
        description: 'Enterprise HR management system with role-based access',
        tags: ['Java', 'Spring MVC', 'Hibernate', 'Thymeleaf'],
      },
      {
        id: 9,
        title: 'Inventory Management',
        description: 'Real-time inventory tracking and management system',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
      },
    ],
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const currentCategory = projectCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            // Category View
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-white mb-4">Project Categories</h2>
                <div className="h-px w-20 bg-white/30" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-4xl">{category.icon}</span>
                        <Folder className="text-white/40 group-hover:text-white/60 transition-colors" size={24} />
                      </div>
                      <h3 className="text-white mb-3">{category.name}</h3>
                      <p className="text-white/60 mb-4 flex-grow">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/50">
                          {category.projects.length} {category.projects.length === 1 ? 'project' : 'projects'}
                        </span>
                        <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all text-sm">
                          →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Detailed Projects View
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-16">
                <button
                  onClick={handleBackClick}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm uppercase tracking-wider">Back to Categories</span>
                </button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{currentCategory?.icon}</span>
                    <h2 className="text-white">{currentCategory?.name}</h2>
                  </div>
                  <p className="text-white/60 mb-6">{currentCategory?.description}</p>
                  <div className="h-px w-20 bg-white/30" />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory?.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-white">{project.title}</h3>
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-white/60 hover:text-white transition-colors">
                            <Github size={20} />
                          </button>
                          <button className="text-white/60 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                          </button>
                        </div>
                      </div>
                      <p className="text-white/60 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-white/50 border border-white/20 px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;