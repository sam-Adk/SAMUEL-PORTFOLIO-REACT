
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import {
  Code,
  Palette,
  Rocket,
  Terminal,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function HomePage() {
  const navigate = useNavigate();

  const skills = [
    {
      icon: Code,
      label: 'Frontend Development',
      description:
        'Building responsive, accessible interfaces with React, TypeScript and modern frontend tools.',
    },
    {
      icon: Terminal,
      label: 'Backend Development',
      description:
        'Creating reliable APIs and server-side applications with Node.js, Express and databases.',
    },
    {
      icon: Palette,
      label: 'UI/UX Design',
      description:
        'Designing clean, intuitive interfaces that balance usability with strong visual hierarchy.',
    },
    {
      icon: Rocket,
      label: 'Product Development',
      description:
        'Turning ideas into practical digital products from concept through implementation.',
    },
    {
      icon: Zap,
      label: 'Performance',
      description:
        'Optimizing applications for speed, responsiveness and a better overall user experience.',
    },
    {
      icon: Code,
      label: 'Problem Solving',
      description:
        'Breaking complex problems into simple, maintainable and scalable technical solutions.',
    },
  ];

  return (
    <div className="bg-background">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="relative border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-teal-700">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                Available for opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.08] mb-6">
                I build digital products
                <span className="block text-teal-700">
                  that solve real problems.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-8 mb-8">
                I'm Samuel Adikah, a full-stack developer focused on building
                practical, responsive and reliable web applications with
                modern technologies.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() => navigate('/projects')}
                  className="bg-slate-900 hover:bg-teal-700 text-white rounded-lg px-6"
                >
                  View My Work
                  <ArrowRight size={18} className="ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="rounded-lg px-6 border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-700"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-slate-500">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>AWS</span>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto lg:ml-auto">

                {/* Decorative Border */}
                <div className="absolute -inset-3 rounded-2xl border border-teal-100" />

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <ImageWithFallback
                    src="/TWONIGGAS.jpeg"
                    alt="Samuel Adikah"
                    className="w-full h-[480px] object-cover"
                  />
                </div>

                {/* Open To Work Badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Open to work
                      </p>

                      <p className="text-xs text-slate-500">
                        Full-time & freelance
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          WHAT I DO
      ========================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
              What I do
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              From idea to working product.
            </h2>

            <p className="text-slate-600 leading-7">
              I combine development, design and problem-solving to create
              digital experiences that are useful, maintainable and built to
              last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="bg-white p-8 group hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-50 text-teal-700 mb-6">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {skill.label}
                  </h3>

                  <p className="text-sm text-slate-600 leading-6">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-400 mb-4">
              Let's work together
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
              Have an idea worth building?
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto leading-7 mb-8">
              Whether you have a project in mind, an opportunity, or simply
              want to connect, I'd be happy to hear from you.
            </p>

            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-teal-600 hover:bg-teal-500 text-white rounded-lg px-7"
            >
              Start a Conversation
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { walkthroughs } from "../data/walkthroughData";


<section className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
          Featured Walkthroughs
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          See how I build.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Don't just look at screenshots. Watch short walkthroughs of
          projects I've actually built and see how I approach problems,
          implementation and product development.
        </p>
      </div>

      <button
        onClick={() => navigate("/walkthroughs")}
        className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-teal-600"
      >
        View all walkthroughs
        <ArrowRight size={18} />
      </button>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {walkthroughs.map((project) => (
        <motion.article
          key={project.id}
          whileHover={{ y: -6 }}
          className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          onClick={() =>
            navigate(`/walkthroughs/${project.id}`)
          }
        >
          <div className="relative aspect-video overflow-hidden bg-slate-100">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition group-hover:scale-110">
                <Play
                  size={21}
                  fill="currentColor"
                  className="ml-1"
                />
              </div>
            </div>

            <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
              {project.duration}
            </span>
          </div>

          <div className="p-6">
            <p className="text-xs font-semibold tracking-widest text-teal-600">
              {project.number} / WALKTHROUGH
            </p>

            <h3 className="mt-3 text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
              {project.shortDescription}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
              Watch project
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

