
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
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Product Catalog',
      description:
        'A responsive e-commerce application for browsing products, filtering listings, viewing product details, and exploring a modern online shopping experience.',
      longDescription:
        'This e-commerce platform was built to demonstrate the development of a modern online shopping experience. Users can browse products, explore product information, filter available items, and navigate through a responsive interface designed for both desktop and mobile devices. The project focuses on reusable React components, API integration, responsive layouts, and a clean user experience.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
      link:
        'https://e-commerce-product-catalog-2xk2.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 2,
      title: 'Netflix-Style Portfolio',
      description:
        'A cinematic portfolio website inspired by streaming platforms, designed to present projects and personal work through an engaging, interactive interface.',
      longDescription:
        'This project explores how a familiar streaming-platform interface can be adapted into a developer portfolio. It uses a cinematic layout, responsive project sections, interactive navigation, reusable components, and dynamic content presentation to create a more engaging way of showcasing technical work. The project demonstrates frontend architecture, responsive design, animations, and API-driven content.',
      image:
        'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'CSS', 'API Integration'],
      link:
        'https://my-portfolio-8f1u.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 3,
      title: 'Mood Movie Recommender',
      description:
        'A movie discovery application that helps users discover films based on their mood, genres, interests, and current movie trends.',
      longDescription:
        'The Mood Movie Recommender combines movie discovery with personalized recommendations. Users can explore films by mood and genre while discovering popular and relevant titles through an interactive interface. The project demonstrates API integration, dynamic data rendering, responsive UI development, and the implementation of a recommendation-focused user experience.',
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'API', 'Recommendation System'],
      link:
        'https://mood-movie-recommendor.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 4,
      title: 'Portfolio Builder',
      description:
        'A portfolio-building concept designed to help developers and creatives create professional personal websites without starting from scratch.',
      longDescription:
        'Portfolio Builder is a web application concept focused on simplifying the process of creating a professional online portfolio. The project explores reusable portfolio layouts, customizable sections, responsive design, and a user-friendly interface that can help developers, designers, and other professionals present their work online.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Tailwind CSS', 'UI Design', 'Responsive Design'],
      link:
        'https://example.com',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 5,
      title: 'Late Night Epiphanies',
      description:
        'A visually distinctive online art shop featuring product browsing, shopping interactions, and an atmospheric dark-themed design.',
      longDescription:
        'Late Night Epiphanies is an e-commerce concept created around a distinctive artistic identity. The application demonstrates how visual storytelling and product presentation can be combined with e-commerce functionality. It includes product cards, shopping interactions, notifications, responsive layouts, and a dark visual experience designed to make the storefront feel immersive.',
      image:
        'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-Commerce'],
      link:
        'https://late-night-epiphanies-shop.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 6,
      title: 'CyberWatch Kenya',
      description:
        'A cybersecurity-focused platform designed to share security news, threat awareness, educational content, and technology updates.',
      longDescription:
        'CyberWatch Kenya is a cybersecurity information platform created to make security-related information easier to discover and understand. The project focuses on presenting cybersecurity news, threat awareness, educational material, and technology updates through a clean web interface. It also explores content organization and audience-focused digital publishing.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cybersecurity', 'Web Development', 'Content', 'Newsletter'],
      link:
        'https://cyberwatch-kenya.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 7,
      title: 'Weather AI Dashboard',
      description:
        'An AI-powered weather dashboard that combines real-time weather data with location search, forecasts, and intelligent weather insights.',
      longDescription:
        'Weather AI Dashboard is a full-stack weather application that integrates a weather API with a React frontend and Node.js backend. Users can search for locations, view current weather conditions and forecasts, and receive weather information through an intuitive dashboard. The project demonstrates API integration, backend proxying, location services, caching, responsive UI development, and AI-assisted weather insights.',
      image:
        'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Node.js', 'Express', 'Weather API', 'AI'],
      link:
        'https://weather-ai-dashboard-1.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 8,
      title: 'Crypto Tracker',
      description:
        'A cryptocurrency dashboard that allows users to monitor crypto prices, market trends, and digital asset information in one interface.',
      longDescription:
        'Crypto Tracker is a cryptocurrency market dashboard designed to make digital asset information easier to monitor. Users can explore cryptocurrency prices, market data, trends, and other relevant information through a responsive interface. The project demonstrates API integration, dynamic data rendering, reusable React components, responsive dashboard design, and the handling of frequently changing financial data.',
      image:
        'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'Crypto API', 'Dashboard'],
      link:
        'https://crypto-tracker-0hdb.onrender.com/',
      github:
        'https://github.com/sam-Adk/Crypto-Tracker',
    },

    {
      id: 9,
      title: 'Movie-Flix',
      description:
        'A movie streaming-style discovery application where users can browse movies, explore trending titles, and discover films through a modern interface.',
      longDescription:
        'Movie-Flix is a movie discovery application inspired by modern streaming platforms. It allows users to browse movie content, explore popular and trending titles, and discover films through an interactive interface. The project demonstrates external API integration, dynamic content rendering, responsive layouts, reusable components, and modern frontend development techniques.',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'Movie API', 'Responsive UI'],
      link:
        'https://movie-flix-2ixm.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 10,
      title: 'GitHub Profile Finder',
      description:
        'A GitHub profile search application that allows users to find developers and explore their repositories, profiles, and public GitHub activity.',
      longDescription:
        'GitHub Profile Finder connects to the GitHub API to make developer profile discovery simple. Users can search for a GitHub username and view profile information, repositories, project details, and other publicly available information. The project demonstrates API consumption, asynchronous data fetching, dynamic rendering, search functionality, and responsive frontend development.',
      image:
        'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'GitHub API', 'REST API'],
      link:
        'https://github-profile-founder.onrender.com/',
      github:
        'https://github.com/sam-Adk',
    },

    {
      id: 11,
      title: 'Split Wise',
      description:
        'A personal finance dashboard designed to help users organize expenses, monitor spending, and better understand their financial activity.',
      longDescription:
        'Split Wise is a finance management application focused on helping users organize and understand their expenses. The dashboard provides a structured interface for tracking financial activity and presenting important information in an easy-to-understand format. The project demonstrates modern frontend development, responsive dashboard design, reusable components, and the creation of practical financial management tools.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'JavaScript', 'Finance', 'Dashboard'],
      link:
        'https://split-wise2.onrender.com/',
      github:
        'https://github.com/sam-Adk/Split-Wise2',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            My Work
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Projects I've Built
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            A selection of projects that showcase my experience building
            full-stack applications, responsive interfaces, API integrations,
            dashboards, e-commerce platforms, and practical digital products.
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
                    {String(project.id).padStart(2, '0')}
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
                      className="bg-teal-50 text-teal-700 border border-teal-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-slate-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 transition-all"
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
          className="mt-20 rounded-3xl bg-slate-900 p-8 md:p-12 text-center text-white shadow-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-400 mb-4">
            Let's work together
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>

          <p className="max-w-2xl mx-auto text-slate-300 mb-8">
            I'm always interested in building useful, creative, and
            meaningful digital products.
          </p>

          <a href="#/contact">
            <Button
              size="lg"
              className="bg-teal-600 text-white hover:bg-teal-500 rounded-lg px-8 shadow-lg"
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
                          className="bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">

                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Visit Live Project
                      </Button>
                    </a>

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-xl border-slate-300 hover:border-teal-500 hover:text-teal-700"
                      >
                        <Github size={18} className="mr-2" />
                        View Source Code
                      </Button>
                    </a>

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



