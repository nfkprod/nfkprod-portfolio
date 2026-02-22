import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="About"
        title="Motion designer с фокусом на CGI и системный production"
        description="Работаю на стыке дизайна, анимации и визуальной инженерии: от концепта до финальной доставки под платформы."
      />

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.55fr_0.45fr]">
        <article className="glass-card rounded-2xl p-6">
          <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">Сильные стороны</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--text-muted)]">
            <li>Композиция и ритм в motion-сценах</li>
            <li>Связка 2D/3D без визуального шума</li>
            <li>Понятный production-пайплайн и прогнозируемые сроки</li>
          </ul>

          <h3 className="mt-6 font-display text-xl font-semibold text-[var(--text-main)]">Toolkit</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">After Effects, Blender, Cinema 4D, Nuke, Premiere, Figma, DaVinci Resolve.</p>
        </article>

        <div className="glass-card relative min-h-[300px] overflow-hidden rounded-2xl">
          <Image src="/placeholder/about-photo.svg" alt="Портрет-заглушка" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
      </section>
    </main>
  );
}
