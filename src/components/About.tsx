import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {

   const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : undefined}
        className="max-w-4xl mx-auto"
      >

        
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 text-center"
        >

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
           I am a Full Stack Developer with 1 year of experience building web applications. 
           I started coding in university and have enjoyed learning and creating projects ever since. 
           I mainly work with React, Node.js, and TypeScript, and I love exploring new technologies and solving real-world problems.
           In my free time, I enjoy hiking, reading sci-fi books, and experimenting with new recipes.
          </motion.p>

          

          {/* Download CV Button */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex justify-center"
          >

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >

              Download CV

              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />

              </svg>

            </motion.a>

          </motion.div>

        </motion.div>

      </motion.div>

    </div>
  );
};

export default About;