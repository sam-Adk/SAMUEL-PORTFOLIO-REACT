import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
} from 'lucide-react';
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
      title: 'E-Commerce Product Catalog',
      description:
        'A modern responsive e-commerce platform with product browsing, filtering, and a clean shopping experience.',
      longDescription:
        'A responsive e-commerce product catalog built to demonstrate modern frontend development. The application focuses on clean UI, responsive layouts, reusable components, product discovery, and an intuitive shopping experience across desktop and mobile devices.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
      link: 'https://e-commerce-product-catalog-2xk2.onrender.com/',
      github: 'https://github.com/sam-Adk',
    },

    {
      id: 2,
      title: 'Netflix-Style Portfolio',
      description:
        'A cinematic Netflix-inspired portfolio experience designed to showcase projects through an engaging interface.',
      longDescription:
        'A Netflix-inspired portfolio application created to demonstrate frontend development, responsive design, API integration, reusable UI components, and interactive navigation. The interface uses a cinematic visual style while presenting projects and content in a familiar streaming-platform experience.',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'CSS', 'API Integration'],
      link: 'https://my-portfolio-8f1u.onrender.com/',
      github: 'https://github.com/sam-Adk',
    },

    {
      id: 3,
      title: 'Mood Movie Recommender',
      description:
        'A movie discovery platform that recommends films based on the user’s mood and preferences.',
      longDescription:
        'A movie recommendation application designed around mood-based discovery. Users can explore movies, genres, trending content, and recommendations through a clean and engaging interface. The project demonstrates API integration, dynamic content rendering, responsive design, and recommendation-focused user experiences.',
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      tags: ['Python', 'React', 'API', 'Recommendation System'],
      link: 'https://mood-movie-recommendor.onrender.com/',
      github: 'https://github.com/sam-Adk',
    },

    {
      id: 4,
      title: 'Portfolio Builder',
      description:
        'A concept for an easy-to-use portfolio builder that helps creators showcase their work online.',
      longDescription:
        'A portfolio builder concept designed to make it easier for developers, designers, and creators to create professional online portfolios. The project focuses on reusable layouts, responsive design, customizable sections, and an approachable user experience.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Tailwind CSS', 'UI Design', 'Responsive Design'],
      link: 'https://example.com',
      github: 'https://github.com/sam-Adk',
    },

    {
      id: 5,
      title: 'Late Night Epiphanies',
      description:
        'A dark-themed digital art shop built around a mysterious, creative and atmospheric visual identity.',
      longDescription:
        'Late Night Epiphanies is an online art shop concept focused on creating an emotional and immersive shopping experience. The project features product cards, a shopping cart interface, interactive notifications, and a distinctive late-night visual aesthetic.',
      image:
        'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-Commerce'],
      link: 'https://late-night-epiphanies-shop.onrender.com',
      github: 'https://github.com/sam-Adk',
    },

    {
      id: 6,
      title: 'CyberWatch Kenya',
      description:
        'A cybersecurity newsletter platform created to deliver security alerts, insights, and technology updates.',
      longDescription:
        'CyberWatch Kenya is a cybersecurity-focused digital platform created to share curated cybersecurity news, threat alerts, security insights, and educational content. The project demonstrates content management, audience-focused design, subscription concepts, and the presentation of technical information in an accessible way.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cybersecurity', 'Web Development', 'Content', 'Newsletter'],
      link: 'https://cyberwatch-kenya.onrender.com',
      github: 'https://github.com/sam-Adk',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            My Work
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Projects I've Built
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            A selection of projects that showcase my experience in web
            development, UI design, APIs, e-commerce, and creative digital
            products.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

                {/* Project Number */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-900 font-semibold shadow-lg">
                    0{project.id}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>

                {/* Bottom title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="text-xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-indigo-50 text-indigo-700 border border-indigo-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project
                  <ArrowUpRight size={17} className="ml-2" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>

          <p className="max-w-2xl mx-auto text-indigo-100 mb-8">
            I'm always interested in building useful, creative, and
            meaningful digital products.
          </p>

          <a href="#/contact">
            <Button
              size="lg"
              className="bg-white text-indigo-700 hover:bg-slate-100 rounded-full px-8 shadow-lg"
            >
              Let's Work Together
              <ArrowUpRight size={18} className="ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={(open) => {
              if (!open) setSelectedProject(null);
            }}
          >
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl overflow-hidden">
              
              {/* Modal Image */}
              <div className="relative h-64 md:h-80">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl font-bold text-slate-900">
                    {selectedProject.title}
                  </DialogTitle>

                  <DialogDescription className="text-slate-500">
                    Project details and technologies
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-7">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      About the Project
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Technologies
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      onClick={() =>
                        window.open(
                          selectedProject.link,
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Visit Live Project
                    </Button>

                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl"
                      onClick={() =>
                        window.open(
                          selectedProject.github,
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                    >
                      <Github size={18} className="mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
