import type { ServiceAddon, ServicePackage } from "@/data/types";

export const servicePackages: ServicePackage[] = [
  {
    id: "starter-motion-pack",
    name: "Motion design",
    subtitle: "Короткие ролики для рекламы и соцсетей: монтаж, анимация, титры и звук.",
    priceFrom: "от 65 000 ₽",
    timeline: "5-7 рабочих дней",
    revisions: "2 раунда",
    sourceFiles: "AEP + финальные экспорты",
    deliverables: ["2 ролика до 15 сек", "Адаптация 9:16/1:1", "Базовая работа со звуком"],
    includes: ["Сценарный план", "Монтаж и анимация", "Базовая обработка цвета и звука"],
    excludes: ["Сложный 3D", "Озвучка диктора", "Глубокий VFX"],
    highlighted: false
  },
  {
    id: "cgi-product-shot",
    name: "CGI / 3D",
    subtitle: "Показываю продукт в 3D: материалы, свет, детали и движение камеры.",
    priceFrom: "от 140 000 ₽",
    timeline: "10-14 рабочих дней",
    revisions: "3 раунда",
    sourceFiles: "Render pass + проектные файлы",
    deliverables: ["3D-ролик 10–20 сек", "3–5 статичных изображений", "Короткие версии ролика"],
    includes: ["Lookdev", "Освещение/материалы", "Compositing"],
    excludes: ["Сложная симуляция", "Фото-скан", "Маркетинговая стратегия"],
    highlighted: true
  },
  {
    id: "explainer-ui-promo",
    name: "Анимация интерфейсов",
    subtitle: "Помогаю показать, как работает цифровой продукт: анимирую экраны, переходы и действия в интерфейсе.",
    priceFrom: "от 95 000 ₽",
    timeline: "7-10 рабочих дней",
    revisions: "2-3 раунда",
    sourceFiles: "AEP/Figma links + master",
    deliverables: ["Ролик до 45 сек", "Субтитры и титры", "Версии под web/social"],
    includes: ["Сценарная структура", "UI-motion", "Финальный рендер"],
    excludes: ["Полный UX-редизайн", "Озвучка носителем", "Сложный character rig"],
    highlighted: false
  },
  {
    id: "custom",
    name: "AI и авторские проекты",
    subtitle: "Генеративные изображения и видео, эксперименты с формой и проекты, которым нужен отдельный подход.",
    priceFrom: "Индивидуально",
    timeline: "по брифу",
    revisions: "гибко",
    sourceFiles: "по договоренности",
    deliverables: ["Объём работы под вашу задачу", "Команда, если она нужна", "План производства"],
    includes: ["Аудит задачи", "Предсмета", "Roadmap"],
    excludes: ["Фиксированный список"],
    highlighted: false
  }
];

export const serviceAddons: ServiceAddon[] = [
  { id: "extra-revision", name: "Доп. раунд правок", price: "+12 000 ₽", note: "за раунд" },
  { id: "rush", name: "Срочный слот", price: "+35%", note: "сжатые сроки" },
  { id: "asset-pack", name: "3D asset pack", price: "от 30 000 ₽", note: "подбор/создание ассетов" },
  { id: "sound", name: "Sound design", price: "от 25 000 ₽", note: "профессиональный саунд-пасс" }
];
