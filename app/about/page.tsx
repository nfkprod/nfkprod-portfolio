import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="О себе"
        title="Senior Post-Production Specialist | Motion Designer | AI-Native Creator"
        description="Создаю визуальные проекты «под ключ»: от идеи до финального результата."
      />

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
        <article className="glass-card rounded-2xl p-6">
          <div className="space-y-4 text-sm leading-7 text-[var(--text-muted)]">
            <p>
              Senior-специалист с опытом 5+ лет в post-production и motion-дизайне. Реализовывал масштабные визуальные
              проекты для Ozon, МТС, ТНТ и ИРИ. Мои работы транслировались на Times Square (NYC), медиафасадах Москвы
              и Санкт-Петербурга, а также на крупнейших фестивалях, включая VK Fest.
            </p>
            <p>
              Моя ключевая экспертиза: создание визуального продукта «под ключ» от идеи до финального результата.
              Интегрирую AI-native инструменты и методы Vibe Coding в классический production-пайплайн, ускоряя процесс
              без потери качества.
            </p>
            <p>
              В 2023 году выступил соавтором выставочной работы для экспозиции в Майами совместно с Динарой Гараевой,
              участницей списка Forbes «30 до 30». Также имею опыт реализации эксклюзивных проектов для Royal Family
              of Dubai и создания масштабных архитектурных проекций в Абу-Даби.
            </p>
          </div>

          <h2 className="mt-8 font-display text-2xl font-bold text-[var(--text-main)]">Experience & Collaborations</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-muted)]">
            <li>
              <span className="text-[var(--text-main)]">Creative Collaborations:</span> соавторство с Сашей Сахарной в
              проектах для Seville (Artik & Asti) и группы «Три дня дождя».
            </li>
            <li>
              <span className="text-[var(--text-main)]">International & Art:</span> выставочный проект в Майами (2023),
              AI motion-контент для Dubai Royal Family, projection mapping в Абу-Даби, трансляции на Times Square (New
              York).
            </li>
            <li>
              <span className="text-[var(--text-main)]">High-Profile Clients:</span> Kali Uchis, Johnny Dang, Егор
              Крид, Big Baby Tape, JONY, Ваня Дмитриенко, Григорий Лепс, Niletto, Bushido Zho, OG Buda, Soda Luv,
              Buster и др.
            </li>
          </ul>
        </article>

        <div className="grid gap-4">
          <div className="glass-card relative min-h-[260px] overflow-hidden rounded-2xl">
            <Image src="/icons/photo_2026-03-03_19-01-32.jpg" alt="О себе" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <article className="glass-card rounded-2xl p-6">
            <h2 className="font-display text-2xl font-bold text-[var(--text-main)]">Ключевые компетенции</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-muted)]">
              <li>
                <span className="text-[var(--text-main)]">Post-Production & Compositing:</span> After Effects (основной
                стек), сложный кеинг, ротоскопинг, цветокоррекция, интеграция графики.
              </li>
              <li>
                <span className="text-[var(--text-main)]">AI-Native Workflow:</span> кастомные workflow в ComfyUI и
                Stable Diffusion; видео-генерация в Kling, Sora, Veo, Higgsfield.ai.
              </li>
              <li>
                <span className="text-[var(--text-main)]">2D & 3D Motion:</span> After Effects, Cinema 4D (Redshift),
                Blender, Daz3D.
              </li>
              <li>
                <span className="text-[var(--text-main)]">Vibe Coding & Web Dev:</span> быстрая разработка и деплой
                веб-решений через Claude/Codex; личное портфолио, спроектированное и развернутое с нуля.
              </li>
              <li>
                <span className="text-[var(--text-main)]">Production Experience:</span> опыт работы на съемочной
                площадке; собственная камера, парк оптики и света для физически корректного композитинга.
              </li>
              <li>
                <span className="text-[var(--text-main)]">VFX Sims:</span> симуляции огня, дыма и жидкостей в EmberGen
                и LiquiGen.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
