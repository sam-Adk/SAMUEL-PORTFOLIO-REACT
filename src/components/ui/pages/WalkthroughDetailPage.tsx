import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
} from "lucide-react";
import { walkthroughs } from "../data/walkthroughData";

export default function WalkthroughDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = walkthroughs.find(
    (item) => item.id === id
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Walkthrough not found
          </h1>

          <button
            onClick={() => navigate("/walkthroughs")}
            className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-white"
          >
            Back to walkthroughs
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <section className="px-6 pb-12 pt-28">
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => navigate("/walkthroughs")}
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={17} />
            Back to walkthroughs
          </button>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Project {project.number}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {project.description}
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
            <div className="aspect-video">
              <iframe
                src={project.videoUrl}
                title={`${project.title} project walkthrough`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <Play size={15} />
            {project.duration} project walkthrough
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                The problem
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                What I wanted to solve
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {project.problem}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                The challenge
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                What was difficult
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {project.challenge}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                The solution
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                How I approached it
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {project.solution}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                The result
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                What I ended up with
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Built with
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Explore the project
          </h2>

          <div className="mt-7 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                <ExternalLink size={17} />
                Live Project
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
              >
                <Github size={17} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
