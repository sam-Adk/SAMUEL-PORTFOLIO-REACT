
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/sam-Adk',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:samueladikah66@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-sm font-bold shadow-lg">
                SA
              </div>

              <div>
                <p className="font-semibold">Samuel Adikah</p>
                <p className="text-xs text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              I build modern, responsive and user-focused digital experiences
              using contemporary web technologies.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      social.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Let's Work Together
            </h3>

            <p className="leading-7 text-slate-400">
              Have an idea, project, or opportunity you'd like to discuss?
              I'm always open to meaningful collaborations.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Samuel Adikah. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}
