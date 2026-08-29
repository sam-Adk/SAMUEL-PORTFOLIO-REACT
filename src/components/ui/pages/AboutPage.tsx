
import { motion } from 'motion/react';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress';
import {
  MapPin,
  Award,
  Briefcase,
  Code2,
  Database,
  Cloud,
} from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function AboutPage() {
  const technicalSkills = [
    { name: 'React & TypeScript', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'UI/UX Design', level: 82 },
    { name: 'Database Design', level: 80 },
    { name: 'AWS & Cloud', level: 75 },
    { name: 'Python & Data', level: 78 },
  ];

  const tools = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'Next.js',
    'Tailwind CSS',
    'Python',
    'SQL',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Git',
    'GitHub',
    'REST APIs',
    'Figma',
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-indigo-600 font-semibold">
            ABOUT ME
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-3 mb-5">
            Developer. Creator. Problem Solver.
          </h1>

          <p className="text-lg text-slate-600">
            A developer passionate about building useful products and
            continuously learning new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <ImageWithFallback
  src="/TWONIGGAS.jpeg"
  alt="Samuel Adikah"
  className="w-full h-[480px] object-cover"
/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Hello, I'm Samuel.
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                I'm a full-stack developer who enjoys turning ideas into
                functional and visually engaging digital products.
              </p>

              <p>
                My experience spans frontend development, backend APIs,
                databases, responsive design, and cloud technologies. I enjoy
                working across the entire development process — from an
                initial idea to a deployed application.
              </p>

              <p>
                I'm constantly learning, experimenting with new technologies,
                and building projects that strengthen my skills and solve
                practical problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <MapPin className="text-indigo-600 mb-2" size={22} />
                <p className="text-sm text-slate-500">Based in</p>
                <p className="font-semibold text-slate-900">Nairobi, Kenya</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <Briefcase className="text-indigo-600 mb-2" size={22} />
                <p className="text-sm text-slate-500">Role</p>
                <p className="font-semibold text-slate-900">Full Stack Dev</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <Award className="text-indigo-600 mb-2" size={22} />
                <p className="text-sm text-slate-500">Experience</p>
                <p className="font-semibold text-slate-900">2+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SKILLS */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">EXPERTISE</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-slate-800">
                    {skill.name}
                  </span>
                  <span className="text-indigo-600 font-medium">
                    {skill.level}%
                  </span>
                </div>

                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-7">
              <Code2 className="text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Tools & Technologies
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">JOURNEY</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              My Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm">
              <div className="flex gap-5">
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 items-center justify-center shrink-0">
                  <Code2 size={24} />
                </div>

                <div>
                  <p className="text-sm text-indigo-600 font-semibold mb-1">
                    2025 — Present
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Full-Stack Developer
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    Building and deploying full-stack applications while
                    continuously expanding my expertise across frontend,
                    backend, databases, APIs, and cloud technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm">
              <div className="flex gap-5">
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 items-center justify-center shrink-0">
                  <Database size={24} />
                </div>

                <div>
                  <p className="text-sm text-purple-600 font-semibold mb-1">
                    Ongoing
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Data & Technology Projects
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    Exploring data analytics, Python, SQL, cloud technologies,
                    and practical software projects to broaden my technical
                    capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm">
              <div className="flex gap-5">
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 items-center justify-center shrink-0">
                  <Cloud size={24} />
                </div>

                <div>
                  <p className="text-sm text-pink-600 font-semibold mb-1">
                    Continuous Learning
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Growing With Technology
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    Constantly learning new tools, frameworks, and development
                    practices while building projects that turn theory into
                    real-world experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

