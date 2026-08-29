
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
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-sm font-bold text-white shadow-lg shadow-indigo-200"
            >
              SA
            </motion.div>

            <div className="hidden sm:block">
              <p className="font-semibold tracking-tight text-slate-900">
                Samuel Adikah
              </p>
              <p className="text-xs text-slate-500">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200"
                >
                  <span
                    className={
                      active
                        ? 'text-indigo-600'
                        : 'text-slate-600 hover:text-indigo-600'
                    }
                  >
                    {item.label}
                  </span>

                  {active && (
                    <motion.div
                      layoutId="activeNavigation"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="ml-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-slate-100 py-4">
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(item.path);

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                          active
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 block rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

