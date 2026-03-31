import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/19mekdes' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/yourhandle' },
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:youremail@example.com' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Mekdi Wale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;