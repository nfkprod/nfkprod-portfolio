import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/data/types";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="glass-card group h-full overflow-hidden rounded-2xl">
      <Link href={`/portfolio/${project.slug}`} className="relative flex h-full flex-col focus-visible:outline-none">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-[-20%] left-[-34%] z-20 w-[30%] rotate-[14deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.13)_52%,rgba(255,255,255,0)_100%)] opacity-0 blur-[4px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[400%] group-hover:opacity-70"
        />
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
          <Image
            src={project.heroMedia.poster ?? project.heroMedia.src}
            alt={project.heroMedia.alt}
            fill
            className="object-cover scale-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="min-h-[2.2em] overflow-hidden font-display text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-main)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{project.year}</span>
          </div>
          <p className="mt-3 min-h-[3.25rem] overflow-hidden text-sm leading-6 text-[var(--text-muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[var(--text-muted)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
