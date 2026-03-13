
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto relative">
              <img
                src="./image/mekdi.jpg"
                alt="Profile"
                className="rounded-full object-cover w-full h-full border-4 border-white shadow-xl"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-400 ring-offset-2" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Mekdes Wale
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about building exceptional digital experiences
            that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCtaClick}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              View My Work
            </motion.button>

            
          </div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;