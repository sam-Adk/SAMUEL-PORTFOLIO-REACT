import { motion } from 'motion/react';
import { ArrowRight, Clock3, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { walkthroughs } from '../data/walkthroughData';

export default function WalkthroughsPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Project Walkthroughs
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              See what I
              <span className="block text-slate-400">
                actually built.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Short walkthroughs of selected projects where I explain what I
              built, the problems I solved, the technical challenges I faced,
              and what I learned along the way.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>{walkthroughs.length} featured projects</span>
            <span>•</span>
            <span>~2 minutes each</span>
            <span>•</span>
            <span>Built from idea to implementation</span>
          </div>

        </div>
      </section>

      {/* WALKTHROUGHS */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-16">

          {walkthroughs.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* THUMBNAIL */}
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/walkthroughs/${project.id}`)
                  }
                  className="relative aspect-video cursor-pointer overflow-hidden bg-slate-100 text-left lg:aspect-auto"
                  aria-label={`Watch ${project.title} walkthrough`}
                >
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} walkthrough`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <Play
                        size={24}
                        fill="currentColor"
                        className="ml-1"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-sm font-medium text-white backdrop-blur">
                    <Clock3 size={14} />
                    {project.duration}
                  </div>
                </button>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">

                  <div className="mb-5 text-sm font-semibold tracking-widest text-teal-600">
                    {project.number}
                  </div>

                  <h2 className="text-3xl font-bold md:text-4xl">
                    {project.title}
                  </h2>

                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {project.shortDescription}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/walkthroughs/${project.id}`)
                    }
                    className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-teal-600"
                  >
                    Watch walkthrough

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </section>

      {/* RECRUITER CTA */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Want to know more?
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            I'm open to opportunities where I can contribute, learn quickly,
            and build products that solve real problems.
          </p>

          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="mt-8 rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-700"
          >
            Get in touch
          </button>

        </div>
      </section>

    </main>
  );
}
