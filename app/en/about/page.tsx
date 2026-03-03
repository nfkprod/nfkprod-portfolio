import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPageEn() {
  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="About"
        title="Senior Post-Production Specialist | Motion Designer | AI-Native Creator"
        description="I build end-to-end visual productions, from concept to final result."
      />

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
        <article className="glass-card rounded-2xl p-6">
          <div className="space-y-4 text-sm leading-7 text-[var(--text-muted)]">
            <p>
              Senior specialist with 5+ years of experience in post-production and motion design. I have delivered
              large-scale visual projects for Ozon, MTS, TNT, and IRI. My work has been featured on Times Square
              (NYC), major media facades in Moscow and Saint Petersburg, and large public festivals including VK Fest.
            </p>
            <p>
              My core expertise is creating end-to-end visual products, from concept to final delivery. I integrate
              AI-native tools and Vibe Coding methods into traditional production pipelines to increase speed without
              compromising quality.
            </p>
            <p>
              In 2023, I co-authored an exhibition piece for Miami with Dinara Garaeva, a Forbes &ldquo;30 Under 30&rdquo;
              honoree. I also delivered exclusive projects for the Dubai Royal Family and large-scale architectural
              projection work in Abu Dhabi.
            </p>
          </div>

          <h2 className="mt-8 font-display text-2xl font-bold text-[var(--text-main)]">Experience & Collaborations</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-muted)]">
            <li>
              <span className="text-[var(--text-main)]">Creative Collaborations:</span> co-created projects with Sasha
              Saharnaya for Seville (Artik & Asti) and the band &ldquo;Three Days Rain.&rdquo;
            </li>
            <li>
              <span className="text-[var(--text-main)]">International & Art:</span> Miami exhibition project (2023), AI
              motion content for the Dubai Royal Family, projection mapping in Abu Dhabi, and broadcasts on Times
              Square (New York).
            </li>
            <li>
              <span className="text-[var(--text-main)]">High-Profile Clients:</span> Kali Uchis, Johnny Dang, Egor
              Kreed, Big Baby Tape, JONY, Vanya Dmitrienko, Grigory Leps, Niletto, Bushido Zho, OG Buda, Soda Luv,
              Buster, and others.
            </li>
          </ul>
        </article>

        <div className="grid gap-4">
          <div className="glass-card relative min-h-[260px] overflow-hidden rounded-2xl">
            <Image src="/icons/photo_2026-03-03_19-01-32.jpg" alt="About" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <article className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">Core Expertise</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-muted)]">
              <li>
                <span className="text-[var(--text-main)]">Post-Production & Compositing:</span> After Effects (core
                stack), advanced keying, rotoscoping, color grading, graphics integration.
              </li>
              <li>
                <span className="text-[var(--text-main)]">AI-Native Workflow:</span> custom workflows in ComfyUI and
                Stable Diffusion; video generation with Kling, Sora, Veo, Higgsfield.ai.
              </li>
              <li>
                <span className="text-[var(--text-main)]">2D & 3D Motion:</span> After Effects, Cinema 4D (Redshift),
                Blender, Daz3D.
              </li>
              <li>
                <span className="text-[var(--text-main)]">Vibe Coding & Web Dev:</span> rapid web tool development and
                deployment via Claude/Codex; designed and launched a personal portfolio from scratch.
              </li>
              <li>
                <span className="text-[var(--text-main)]">Production Experience:</span> on-set background with own
                camera, lenses, and lighting kit for physically accurate compositing.
              </li>
              <li>
                <span className="text-[var(--text-main)]">VFX Sims:</span> fire, smoke, and fluid simulations in
                EmberGen and LiquiGen.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
