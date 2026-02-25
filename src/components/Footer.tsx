import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-3 py-2 rounded-lg inline-block mb-4">
              <span>SA</span>
            </div>
            <p className="text-slate-600">
              Creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-slate-900">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-600">
          <p>© {currentYear} Samuel Adikah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}