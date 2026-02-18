export const projects = [
  {
    slug: "brand-launch-opener",
    title: "Brand Launch Opener",
    description:
      "Динамичный ролик запуска бренда с акцентом на типографику, плавные переходы и ритмичный монтаж.",
    tasks: [
      "Разработать визуальную концепцию и стиль анимации",
      "Собрать раскадровку и ритм под музыку",
      "Подготовить финальный мастер для соцсетей и рекламы"
    ],
    role: "Motion Designer / Video Editor",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    createdAt: "2025-05-14",
    tags: ["Реклама", "Брендинг", "2D"],
    category: "ads",
    previewVideo: "https://vimeo.com/76979871"
  },
  {
    slug: "music-visual-loop",
    title: "Music Visual Loop",
    description:
      "Серия цикличных сцен для музыкального релиза с реактивной анимацией и атмосферной графикой.",
    tasks: [
      "Создать moodboard и концепт визуала",
      "Собрать луп-сцены под BPM трека",
      "Оптимизировать экспорт под YouTube и Reels"
    ],
    role: "Motion Designer",
    tools: ["After Effects", "Blender", "Photoshop"],
    createdAt: "2025-09-02",
    tags: ["Музыка", "VJ", "Loop"],
    category: "music",
    previewVideo: "https://vimeo.com/22439234"
  },
  {
    slug: "social-promo-pack",
    title: "Social Promo Pack",
    description:
      "Пакет коротких промо-роликов для соцсетей с универсальной системой шаблонов и быстрым обновлением контента.",
    tasks: [
      "Проработать единый визуальный язык для серии роликов",
      "Собрать адаптивные версии 9:16 и 1:1",
      "Подготовить шаблоны для быстрой замены контента"
    ],
    role: "Lead Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Figma"],
    createdAt: "2026-01-18",
    tags: ["Соцсети", "Reels", "Промо"],
    category: "social",
    previewVideo: "https://vimeo.com/146022717"
  },
  {
    slug: "product-motion-teaser",
    title: "Product Motion Teaser",
    description:
      "Короткий тизер продукта с акцентом на преимущества, динамичные переходы и чистую предметную анимацию.",
    tasks: [
      "Собрать структуру тизера под ключевые сообщения",
      "Синхронизировать анимацию с музыкальным ритмом",
      "Подготовить версии для рекламы и сторис"
    ],
    role: "Motion Designer / Editor",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    createdAt: "2026-02-04",
    tags: ["Продукт", "Тизер", "Реклама"],
    category: "ads",
    previewVideo: "https://vimeo.com/1084537"
  }
];

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
