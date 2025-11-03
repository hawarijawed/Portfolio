import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Database } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    icon: Palette,
    title: 'Design',
    items: ['UI/UX Design', 'Figma', 'Responsive Design', 'Prototyping'],
  },
  {
    icon: Zap,
    title: 'Tools & Others',
    items: ['Git', 'Docker', 'CI/CD', 'Testing'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white mb-4">Skills & Expertise</h2>
          <div className="h-px w-20 bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="mb-6">
                    <Icon
                      size={32}
                      className="text-white/70 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-white mb-4">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-white/60 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;