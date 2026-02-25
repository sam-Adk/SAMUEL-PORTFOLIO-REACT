import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution with advanced features',
      longDescription: 'Built a comprehensive e-commerce platform with features including real-time inventory management, secure payment processing, advanced search and filtering, and personalized recommendations. The platform handles thousands of daily transactions and provides an intuitive shopping experience across all devices.',
      image: 'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYzMTExNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://e-commerce-product-catalog-2xk2.onrender.com/',
      github: 'https://github.com'
    },
    {
      id: 2,
      title: 'Netflix-Style Web Portfolio',
      description: 'A Netflix-inspired web application that showcases movies and shows in a visually appealing, scrollable interface. Built as a personal project to demonstrate frontend skills, responsive design, and API integration.',
      longDescription: 'Developed a real-time collaborative task management application that helps teams organize, track, and complete projects efficiently. Features include drag-and-drop boards, real-time updates, team chat, file sharing, and detailed analytics. Used by over 1,000 teams worldwide.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMTQ5NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TypeScript', 'Next.js', 'MongoDB', 'WebSocket'],
      link: 'https://my-portfolio-8f1u.onrender.com/',
      github: 'https://github.com'
    },
    {
      id: 3,
      title: 'Mood Movie Recommender',
      description: 'A Netflix-inspired web application that recommends movies based on your mood. Explore trending movies, popular genres, and personalized recommendations in a clean, scrollable interface.',
      longDescription: 'Created an AI-powered platform that generates high-quality content for marketing, blogs, and social media. Integrates with multiple AI models to provide intelligent suggestions, SEO optimization, and content analysis. Reduces content creation time by 60%.',
      image: 'https://images.unsplash.com/photo-1603351130949-476794ec3dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW4lMjBsYXB0b3B8ZW58MXx8fHwxNzYzMjAzNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'React', 'OpenAI', 'FastAPI'],
      link: 'https://mood-movie-recommendor.onrender.com/',
      github: 'https://github.com'
    },
    {
      id: 4,
      title: 'Portfolio Builder',
      description: 'Easy-to-use portfolio website builder for creators',
      longDescription: 'Designed and developed a no-code portfolio builder that empowers creators, designers, and developers to showcase their work beautifully. Features customizable templates, drag-and-drop editing, custom domains, and built-in analytics.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMTg3ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'Tailwind', 'Firebase', 'Cloudflare'],
      link: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 5,
      title: 'Late Night Piphanies — Art Shop',
      description: 'Late Night Piphanies is a dark-themed online art shop concept that brings emotion, mystery, and creativity to digital art lovers It features a sleek minimalist UI, a smooth cart drawer, and dreamy product cards that reflect the late-night creative mood.',
      longDescription: 'This project is built using pure HTML, CSS, and JavaScript, without any frameworks.It demonstrates how to create an elegant and interactive art store interface — complete with product listings, a working shopping cart, and toast notifications — all styled around a moody, late-night aesthetic.',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzE2NTk5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Express', 'Chart.js', 'AWS'],
      link: 'https://late-night-epiphanies.onrender.com/',
      github: 'https://github.com'
    },
    {
      id: 6,
      title: 'Social Analytics Tool',
      description: 'Advanced analytics platform for social media marketers',
      longDescription: 'Developed a powerful analytics platform that aggregates data from multiple social media platforms, providing detailed insights, competitor analysis, and automated reporting. Helps marketers make data-driven decisions and optimize their social media strategy.',
      image: 'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYzMTExNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Angular', 'Django', 'Redis', 'GraphQL'],
      link: 'https://example.com',
      github: 'https://github.com'
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">Projects</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and passion for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-indigo-50 text-indigo-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full rounded-lg hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>Project Details</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="mb-2">Description</h3>
                  <p className="text-slate-600">{selectedProject.longDescription}</p>
                </div>
                
                <div>
                  <h3 className="mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-indigo-50 text-indigo-700 px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Visit Project
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}