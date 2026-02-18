import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects Legacy Redirect",
  description: "Legacy projects list"
};

export default function ProjectsLegacyPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--text-main)]">Legacy Projects</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">This route is kept for backward compatibility. Use the new portfolio route.</p>
      <div className="mt-4">
        <Link href="/portfolio" className="rounded-xl border border-white/20 px-4 py-2 text-sm text-[var(--text-main)]">
          Open new portfolio
        </Link>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-[var(--text-main)]">{project.title}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{project.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}