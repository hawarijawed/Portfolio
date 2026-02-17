import { motion } from 'framer-motion';
import { GraduationCap, Target, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institute: 'Amrita School of Engineering, Bengaluru',
    duration: '2021 – 2025',
    details:
      'Focused on Data Structures, Algorithms, Web Development, and Software Engineering fundamentals.',
  },
  {
    degree: 'Higher Secondary Education (Science)',
    institute: 'Alpine Secondary School, Shreepur, Nepal',
    duration: '2019 – 2021',
    details:
      'Specialized in Physics, Chemistry, and Mathematics with a strong foundation in problem solving.',
  },
];

const goals = [
  'Become a well-rounded Software Development Engineer (SDE) capable of owning end‑to‑end features.',
  'Work on impactful products that solve real‑world problems using modern web technologies.',
  'Continuously improve skills in system design, performance optimization, and clean architecture.',
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-black"
    >
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Header */} 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white mb-4">About Me</h2>
          <div className="h-px w-20 bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Intro & Goals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-white/80" size={28} />
                <h3 className="text-white text-lg">Who I Am</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-justify">
                I&apos;m a passionate developer who enjoys turning ideas into scalable and
                visually appealing web experiences. With a strong academic foundation in
                computer science and hands-on experience across frontend and backend
                technologies, I love building products that feel fast, intuitive, and
                delightful to use.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-white/80" size={28} />
                <h3 className="text-white text-lg">My Goals</h3>
              </div>
              <ul className="space-y-3">
                {goals.map((goal) => (
                  <li key={goal} className="text-white/70 text-sm leading-relaxed">
                    • {goal}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-white/80" size={28} />
              <h3 className="text-white text-lg">Academic Journey</h3>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <p className="text-sm text-white/50 mb-1">{item.duration}</p>
                  <h4 className="text-white font-semibold mb-1">{item.degree}</h4>
                  <p className="text-white/80 mb-2">{item.institute}</p>
                  <p className="text-white/70 text-sm leading-relaxed text-justify">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


