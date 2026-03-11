
import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux', level: 75 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'AWS', level: 60 },
      { name: 'Jest', level: 70 },
      { name: 'Webpack', level: 65 },
      { name: 'Figma', level: 75 },
    ],
  },
];