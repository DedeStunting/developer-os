import { site } from "@developer-os/config";
import { colors } from "@developer-os/ui/styles";
import type { Project } from "@developer-os/types";

const featuredProject: Project = {
  slug: "bundo",
  title: "Bundo",
  summary: "Full-stack production application.",
  technologies: ["TypeScript", "React", "Node.js"],
  featured: true,
};

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-24"
    >
      <p className="text-sm font-medium tracking-tight text-zinc-500">{site.name}</p>
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900">{site.title}</h1>
      <p className="text-lg leading-relaxed text-zinc-600">{site.description}</p>
      <div className="rounded-xl border border-zinc-200 p-6" style={{ borderColor: colors.border }}>
        <p className="text-sm font-medium text-zinc-500">Featured project</p>
        <h2 className="mt-2 text-2xl font-semibold text-zinc-900">{featuredProject.title}</h2>
        <p className="mt-2 text-zinc-600">{featuredProject.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {featuredProject.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
