import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const scrollToNext = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl px-8"
      >
        {/* Welcome Badge */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-white/60 tracking-widest uppercase text-sm">
            Welcome to my world 👋
          </span>
        </motion.div>

        {/* Name Section */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Hey, I'm Jawed Hawari
        </motion.h1>

        {/* Typing / Interactive Line */}
        <motion.p
          custom={1}
          variants={textVariants}
          className="text-white/80 text-xl sm:text-2xl mb-10 font-light"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1], transition: { repeat: false, duration: 2 } }}
          >
            💻 Full Stack Developer | Turning ideas into interactive web experiences
          </motion.span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 border border-white/40 text-white rounded-md hover:bg-white/10 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 2, duration: 1.5, repeat: Infinity },
        }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors"
      >
        <ChevronDown size={36} />
      </motion.button>
    </section>
  );
};

export default Hero;
