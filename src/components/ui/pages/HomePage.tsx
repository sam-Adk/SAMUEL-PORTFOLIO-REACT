import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Code, Palette, Rocket, Sparkles, Terminal, Zap } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

// ✅ FIXED IMAGE IMPORT (Correct Vite method)
import profileImage from '../../../assets/images/profile3.png.jpeg';

export function HomePage() {
  const navigate = useNavigate();

  const skills = [
    { icon: Code, label: 'Frontend Development', color: 'text-indigo-600' },
    { icon: Terminal, label: 'Backend Development', color: 'text-purple-600' },
    { icon: Palette, label: 'UI/UX Design', color: 'text-pink-600' },
    { icon: Rocket, label: 'Product Strategy', color: 'text-blue-600' },
    { icon: Zap, label: 'Performance Optimization', color: 'text-yellow-600' },
    { icon: Sparkles, label: 'Creative Solutions', color: 'text-green-600' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200"
              >
                <span className="text-indigo-600">👋 Hello, I'm Samuel Adikah</span>
              </motion.div>
              
              <h1 className="mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Creative Developer & Digital Craftsperson
              </h1>
              
              <p className="mb-8 text-slate-600 max-w-xl">
                I transform ideas into beautiful, functional digital experiences. 
                Specializing in modern web development, intuitive design, and 
                scalable solutions that make an impact.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/projects')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="rounded-full border-2 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10" />

                {/* ✅ FIXED IMAGE USAGE */}
                <ImageWithFallback
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Status */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-slate-700">Available for work</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">What I Do</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Combining technical expertise with creative thinking to deliver 
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`${skill.color} mb-4`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="mb-2">{skill.label}</h3>
                  <p className="text-slate-600">
                    Delivering excellence through modern tools and best practices.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">Let's Build Something Amazing</h2>
            <p className="mb-8 text-indigo-100 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and bring 
              creative ideas to life. Let's connect and discuss how we can 
              work together.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white text-indigo-600 hover:bg-slate-100 rounded-full"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
