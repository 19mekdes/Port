import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for animating the name
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto relative">
            <img
              src="./images/mekdi.jpg"
              alt="Profile"
              className="rounded-full object-cover w-full h-full border-4 border-white shadow-xl"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-400 ring-offset-2" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span>Hi, I'm </span>
          <div className="inline-block overflow-hidden" ref={ref}>
            <div className={`inline-block ${isVisible ? 'animate-name' : 'opacity-0'}`}>
              <span className="text-blue-600 dark:text-blue-400 whitespace-nowrap">
                Mekdes Wale
              </span>
            </div>
          </div>
        </h1>

        {/* Subtitle with Type Animation */}
        <div className="role-container flex items-center justify-center gap-4 mb-6">
          <div className="role-line w-16 h-0.5 bg-gray-400 dark:bg-gray-600"></div>
          <div className="role-text">
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                
                'Full Stack Web Developer', 2000,
                'Performance Optimizer', 2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="role-line w-16 h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        </div>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Passionate about building exceptional digital experiences that make a difference.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onCtaClick}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 active:scale-95"
        >
          View My Work
        </button>
      </div>

      {/* Inline Styles for Name Animation */}
      <style>{`
        .overflow-hidden {
          overflow: hidden;
        }
        .animate-name {
          animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;