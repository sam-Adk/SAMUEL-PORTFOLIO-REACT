import { motion } from 'motion/react';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function AboutPage() {
  const technicalSkills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Express', level: 88 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Database Design', level: 85 },
    { name: 'Cloud Architecture', level: 82 },
  ];

  const tools = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS',
    'Figma', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker',
    'Git', 'GraphQL', 'REST APIs', 'Jest', 'Cypress'
  ];

  const experience = [
    {
      year: '2025 - Present',
      title: 'Freelance Full Stack Developer',
      company: 'TechCorp Inc.',
      description: 'Leading development of enterprise-scale web applications and mentoring junior developers.'
    },
    {
      year: '2024 - 2025',
      title: 'Junior Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects using modern web technologies.'
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
          <h1 className="mb-4">About Me</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A passionate developer dedicated to creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzE2NTk5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6">Hello! I'm Samuel Adikah</h2>
            
            <div className="space-y-4 mb-6 text-slate-600">
              <p>
                I'm a creative developer with over 2 years of experience building 
                beautiful, functional, and user-centered digital experiences. My 
                journey in tech started with a simple curiosity about how websites 
                work, and it's evolved into a deep passion for crafting elegant 
                solutions to complex problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing and mentorship. I believe in continuous learning 
                and staying at the forefront of web technologies.
              </p>
              <p>
                My approach combines technical expertise with creative thinking, 
                ensuring that every project I work on is not just functional, but 
                also delightful to use.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-indigo-600" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-indigo-600" />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-indigo-600" />
                <span>2+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-8 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700">{skill.name}</span>
                  <span className="text-slate-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h3 className="mb-4 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-white hover:bg-indigo-100 hover:text-indigo-700 transition-colors cursor-default px-4 py-2"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center">Experience</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600" />
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                    <div className="inline-block lg:block">
                      <div className="flex items-center gap-2 mb-2 text-slate-500 lg:justify-end">
                        <Calendar size={16} />
                        <span>{exp.year}</span>
                      </div>
                      <h3 className="mb-1">{exp.title}</h3>
                      <p className="text-indigo-600 mb-3">{exp.company}</p>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
