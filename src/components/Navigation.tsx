
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* =========================================
              LOGO / PROFILE
          ========================================= */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-600 shadow-sm bg-slate-100 flex-shrink-0"
            >
              <img
                src="/TWONIGGAS.jpeg"
                alt="Samuel Adikah"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name + Role */}
            <div className="hidden sm:block leading-tight">
              <p className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                Samuel Adikah
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Full-Stack Developer
              </p>
            </div>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 transition-colors"
              >
                <span
                  className={
                    isActive(item.path)
                      ? 'text-teal-700 font-medium'
                      : 'text-slate-700 hover:text-teal-700'
                  }
                >
                  {item.label}
                </span>

                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-teal-600"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-teal-700 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-teal-50 text-teal-700 font-medium'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-teal-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}



