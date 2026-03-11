
import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/19mekdes/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team features.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/19mekdes/taskapp',
    liveUrl: 'https://taskapp-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with interactive maps and 7-day forecasts.',
    techStack: ['JavaScript', 'APIs', 'Chart.js', 'CSS3'],
    githubUrl: 'https://github.com/19mekdes/weather',
    liveUrl: 'https://weather-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];