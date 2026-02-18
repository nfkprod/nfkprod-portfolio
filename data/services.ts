import type { ServiceAddon, ServicePackage } from "@/data/types";

export const servicePackages: ServicePackage[] = [
  {
    id: "starter-motion-pack",
    name: "Starter Motion Pack",
    subtitle: "Короткие соц-ролики и монтаж с motion-графикой",
    priceFrom: "от 65 000 ₽",
    timeline: "5-7 рабочих дней",
    revisions: "2 раунда",
    sourceFiles: "AEP + финальные экспорты",
    deliverables: ["2 ролика до 15 сек", "Адаптация 9:16/1:1", "Базовый саунд-лейаут"],
    includes: ["Сценарный план", "Монтаж + моушен", "Цвет/звук базово"],
    excludes: ["Сложный 3D", "Озвучка диктора", "Глубокий VFX"],
    highlighted: false
  },
  {
    id: "cgi-product-shot",
    name: "CGI Product Shot",
    subtitle: "3D product render, turntable и beauty-шоты",
    priceFrom: "от 140 000 ₽",
    timeline: "10-14 рабочих дней",
    revisions: "3 раунда",
    sourceFiles: "Render pass + проектные файлы",
    deliverables: ["Hero-shot 10-20 сек", "3-5 статичных key visual", "Короткие cutdowns"],
    includes: ["Lookdev", "Освещение/материалы", "Compositing"],
    excludes: ["Сложная симуляция", "Фото-скан", "Маркетинговая стратегия"],
    highlighted: true
  },
  {
    id: "explainer-ui-promo",
    name: "UIX / Interface Motion",
    subtitle: "UIX-анимации, интерфейсные переходы, micro-interactions, HUD/overlay, экраны продукта, прототип-анимации.",
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
    name: "Custom",
    subtitle: "Соберем пакет под задачу и дедлайн",
    priceFrom: "Индивидуально",
    timeline: "по брифу",
    revisions: "гибко",
    sourceFiles: "по договоренности",
    deliverables: ["Скоуп под KPI", "Команда под пайплайн", "Пошаговый production-план"],
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
