import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPageEn() {
  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="About"
        title="Motion designer focused on CGI and production systems"
        description="I work at the intersection of design, animation, and visual engineering: from concept to final multi-platform delivery."
      />

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.55fr_0.45fr]">
        <article className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">Strengths</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--text-muted)]">
            <li>Composition and rhythm in motion scenes</li>
            <li>Clean 2D/3D integration without visual noise</li>
            <li>Clear production pipeline with predictable timelines</li>
          </ul>

          <h3 className="mt-6 font-display text-xl font-semibold text-[var(--text-main)]">Toolkit</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">After Effects, Blender, Cinema 4D, Nuke, Premiere, Figma, DaVinci Resolve.</p>
        </article>

        <div className="glass-card relative min-h-[300px] overflow-hidden rounded-2xl">
          <Image src="/placeholder/about-photo.svg" alt="Portrait placeholder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
      </section>
    </main>
  );
}
