import type { ProjectItem } from "@/data/types";

export const projects: ProjectItem[] = [
  {
    slug: "iceman-teaser-drake-concept-work",
    title: "ICEMAN TEASER for DRAKE (CONCEPT WORK)",
    summary: "AI-концепт тизера в холодной стилистике к грядущему альбому Drake ICEMAN.",
    year: "2026",
    tags: ["AI"],
    roles: ["AI", "Edit"],
    tools: ["Figma Weave", "Freepik", "Higgsfield", "After Effects"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1187683309?share=copy&fl=sv&fe=ci",
      poster: "/iceman/iceman-teaser-cover.jpg",
      alt: "ICEMAN TEASER for DRAKE (CONCEPT WORK)"
    },
    previewVideo: {
      type: "video",
      src: "/previews/iceman-teaser-drake-concept-work.mp4",
      poster: "/iceman/iceman-teaser-cover.jpg",
      alt: "ICEMAN TEASER preview"
    },
    gallery: [],
    challenge:
      "Собрать короткий AI fan teaser для ICEMAN: передать холодную, лабораторную и премиальную атмосферу, сохранить ощущение музыкального промо и сделать ролик достаточно выразительным для первой презентации идеи.",
    solution:
      "Выстроил визуальный язык вокруг льда, чистого лабораторного света и крупного центрального образа. AI-визуал использован как основа для кинематографичных сцен, после чего материал собран в цельный тизер с ритмом, монтажными акцентами и финальной обработкой.",
    result:
      "Получился готовый fan teaser с ясным настроением ICEMAN: холодная палитра, крупный узнаваемый герой-образ и рекламный темп, который работает как самостоятельный концепт-ролик.",
    metrics: [
      { label: "Формат", value: "16:9" },
      { label: "Категория", value: "AI video" },
      { label: "Тип", value: "CONCEPT WORK / AI" }
    ],
    credits: [{ label: "AI Artist", value: "1suzuyqwe, evancoric, nfkprod" }],
    related: ["helio-product-loop", "nightline-event-opener", "prism-energy-ident"]
  },
  {
    slug: "aurora-launch-system",
    title: "Институт Развития Интернета",
    summary: "Серия динамичных digital-роликов для привлечения новых участников конкурса ИРИ.",
    year: "2024",
    tags: ["Motion", "Product", "Social"],
    roles: ["Creative Direction", "Motion Design", "Edit"],
    tools: ["After Effects", "Premiere Pro", "Cinema 4D"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164397506?share=copy&fl=sv&fe=ci",
      poster: "/placeholder/iri-zastavka.png",
      alt: "Главный ролик кейса Институт Развития Интернета"
    },
    previewVideo: {
      type: "video",
      src: "/previews/aurora-launch-system.mp4",
      poster: "/placeholder/iri-zastavka.png",
      alt: "IRI preview"
    },
    gallery: [
      {
        type: "video",
        src: "https://vimeo.com/1164397506?fl=tl&fe=ec",
        poster: "/placeholder/iri-zastavka.png",
        alt: "ИРИ - ролик 1"
      },
      {
        type: "video",
        src: "https://vimeo.com/1164420551?share=copy&fl=sv&fe=ci",
        poster: "/placeholder/project-02.svg",
        alt: "ИРИ - ролик 2"
      },
      {
        type: "video",
        src: "https://vimeo.com/1164422798?share=copy&fl=sv&fe=ci",
        poster: "/placeholder/project-03.svg",
        alt: "ИРИ - ролик 3"
      }
    ],
    challenge:
      "Нужно было разработать единый визуальный стиль для серии роликов: отразить ключевые аспекты конкурса и его условия и подать все через понятный, эстетичный визуальный язык, чтобы материалы выглядели цельно, узнаваемо и легко считывались.",
    solution:
      "Разработал единый визуальный стиль и визуальный язык для серии роликов о конкурсе ИРИ: собрал систему графики, типографики и анимационных приемов, чтобы понятно и красиво раскрыть ключевые аспекты и условия конкурса. В главном ролике задал тон, ритм и правила визуала, а затем перенес эту систему на остальные материалы серии.",
    result:
      "Получилась цельная серия роликов с единым визуальным языком: смыслы конкурса читаются быстро и без перегруза, темп удерживает внимание, а авторский стиль остается узнаваемым от ролика к ролику.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "1 месяц" },
      { label: "Итерации", value: "5 раундов" }
    ],
    related: ["pulse-ui-promo", "vanta-cgi-opener"]
  },
  {
    slug: "pulse-ui-promo",
    title: "ICEBERG UI PROMO",
    summary: "Промо-ролик приложения: сценарная структура, UI-анимация и чистая типографика.",
    year: "2023",
    tags: ["3D", "Motion", "Product", "UIX"],
    roles: ["Direct", "Motion", "Compositing", "Sound", "3D"],
    tools: ["After Effects", "Figma", "Illustrator", "Blender"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164427522?share=copy&fl=sv&fe=ci",
      poster: "/placeholder/iceberg-avatar.png",
      alt: "Hero-кадр ICEBERG UI PROMO"
    },
    previewVideo: {
      type: "video",
      src: "/previews/pulse-ui-promo.mp4",
      poster: "/placeholder/iceberg-avatar.png",
      alt: "ICEBERG UI PROMO preview"
    },
    gallery: [],
    challenge:
      "Собрать понятный UI-promo ролик без лишнего визуального шума и удержать фокус на функциях продукта.",
    solution:
      "Построил модульную структуру сцен, согласовал единый ритм анимации, типографику и цветовые акценты. Благодаря этому история продукта читается последовательно и без перегрузки.",
    result:
      "Ролик получился чистым и ритмичным: ключевые функции считываются за один просмотр, а визуальный стиль поддерживает премиальное позиционирование приложения.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "1 неделя" },
      { label: "Итерации", value: "1 раунд" }
    ],
    related: ["aurora-launch-system", "orbital-social-kit"]
  },
  {
    slug: "vanta-cgi-opener",
    title: "Comedy club Новогодний выпуск",
    summary: "Background для новогоднего выпуска программы Comedy Club",
    year: "2025",
    tags: ["Motion", "3D"],
    roles: ["Motion Design", "3D Animation", "Compositing", "Designer"],
    tools: ["Blender", "After Effects"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164740768?share=copy&fl=sv&fe=ci",
      poster: "/placeholder/comedy-cover.png",
      frame: "cinema",
      alt: "Comedy club Новогодний выпуск - основной ролик"
    },
    previewVideo: {
      type: "video",
      src: "/previews/vanta-cgi-opener.mp4",
      poster: "/placeholder/comedy-cover.png",
      alt: "Comedy Club preview"
    },
    gallery: [],
    challenge: "Создать премиальный новогодний анимированный фон для выпуска Comedy Club, который: выглядит «дорого», не спорит с остальным визуалом: титрами, графикой, зациклен seamless loop ~30 сек, легко адаптируется под проекцию/LED-мэппинг на ёлку из экранов.",
    solution: "Создан новогодний анимированный бэкграунд для выпуска Comedy Club и подготовлены версии под проекцию на ёлку из экранов.",
    result: "Создан новогодний анимированный фон для выпуска Comedy Club и подготовлена его версия под проекцию на ёлку из экранов. Фон выполнен в премиальном праздничном стиле с глубиной и чистой композицией, без перегруза деталями. Анимация зациклена на 30 секунд бесшовно: гирлянды задают основной ритм мягким мерцанием без резких вспышек, а декоративные элементы упорядочены и не мешают восприятию. Проекционная версия адаптирована под конструкцию ёлки: учтены кроп, разметка и стыки, чтобы элементы не ломались и композиция сохранялась на экранах.",
    metrics: [
      { label: "Форматы", value: "2.39:1, 27:13" },
      { label: "Срок", value: "1 неделя" },
      { label: "Итерации", value: "3 раунда" }
    ],
    related: ["aurora-launch-system", "helio-product-loop"]
  },
  {
    slug: "helio-product-loop",
    title: "HEARTZ 2.0",
    summary: "Моушн-ролик в стиле рекламы ctOS. Направлен на внутренню аудиторию - презентуя перерождение.",
    year: "2025",
    tags: ["Product", "3D", "Social", "Motion"],
    roles: ["Direct", "3D Generalist", "Motion Designer", "AI"],
    tools: ["Cinema 4D", "Redshift", "After Effects", "Chat GPT", "Kling"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164785304?fl=ip&fe=ec",
      poster: "/placeholder/heartz-2-0-cover.png",
      frame: "portrait",
      alt: "HEARTZ 2.0 - основной ролик"
    },
    previewVideo: {
      type: "video",
      src: "/previews/helio-product-loop.mp4",
      poster: "/placeholder/heartz-2-0-cover.png",
      alt: "HEARTZ 2.0 preview"
    },
    gallery: [
      { type: "image", src: "/placeholder/mat-heartz-00000.png", alt: "Техническое задание" },
      { type: "image", src: "/placeholder/mat-heartz-2-00000.png", alt: "Техническое задание" }
    ],
    challenge: "Сделать моушн-ролик для HEARTZ 2.0, который подаёт проект не как бренд одежды, а как цифровую экосистему и сервис (интерфейсы, модули) в эстетике Frutiger Aero. Выпустить в двух версиях: ландшафтной для YouTube/Telegram и вертикальной для Reels, сохранив единый визуальный язык и адаптировав композицию под форматы.",
    solution: "Подготовил раскадровку и аниматик для будущего проекта. В роли арт-директора сформировал и закрепил визуальную концепцию (референсы, moodboard, палитра, материалы, композиция), выстроил единый визуальный язык и контролировал качество на всех этапах. Собрал 3D-сцены в стилистике Watch Dogs (игровое кино), разработал стилистику UI/UX и вручную отрисовал все элементы интерфейса.",
    result: "На выходе получился готовый концепт-ролик в эстетике Watch Dogs цельная история с собранными 3D-сценами и единым UI/UX-языком. Интерфейсные элементы (все отрисованы вручную) работают как часть мира: подчёркивают ритм, акценты и “технологичное” настроение,. Ролик уже можно используется как презентационный материал (понятны темп, сцены, визуальные правила и направление графики).",
    metrics: [
      { label: "Форматы", value: "9:16, 16:9" },
      { label: "Срок", value: "1 месяц" },
      { label: "Иттерации", value: "7 раундов" }
    ],
    related: ["vanta-cgi-opener", "orbital-social-kit"]
  },
  {
    slug: "orbital-social-kit",
    title: "lakres product promo",
    summary: "Промо-ролик мини-коллекции Lacres с концептом «меню»: каждая вещь представлена как отдельная позиция. Фото обработаны и интегрированы в глянцевую стилизацию бренда.",
    year: "2024",
    tags: ["Social", "Motion", "Product"],
    roles: ["Animation", "Edit", "Motion", "Compositing"],
    tools: ["After Effects", "Premiere Pro", "Audition", "Blender"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164867368?share=copy&fl=sv&fe=ci",
      poster: "/lakres/luka-icecream-2.jpg",
      frame: "portrait",
      alt: "Кадр Orbital Social Kit"
    },
    previewVideo: {
      type: "video",
      src: "/previews/orbital-social-kit.mp4",
      poster: "/lakres/luka-icecream-2.jpg",
      alt: "Lacres product promo preview"
    },
    gallery: [
      { type: "image", src: "/lakres/lakres-01.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-02.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-03.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-04.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-05.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-06.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-07.jpg", alt: "Обработка и композитинг персонажей" },
      { type: "image", src: "/lakres/lakres-08.jpg", alt: "Обработка и композитинг персонажей" }
    ],
    challenge:
      "Сделать рекламный ролик для мини-коллекции с нестандартной торговой метафорой: презентовать одежду как «вкусы» мороженого. Драматургия строится на формате «продажи с перечислением свойств» в референсе сцены из Shrek, где продавец по очереди раскрывает ценность каждого предложения. В кадре — рисованный темнокожий продавец мороженого, который подает элементы коллекции как позиции в витрине.",
    solution:
      "Построил ролик как серию коротких «питчей» от продавца: у каждого айтема свой вход, визуальный «вкус» и набор преимуществ в тональности уличного ice-cream stand. Связал fashion-образы с мороженой айдентикой через цвет, форму, ритм монтажа и графические подписи в стиле меню/ценника. Собрал цельный motion-язык, чтобы ролик читался как рекламная продажа, а не абстрактный клип.",
    result:
      "Получился узнаваемый промо-ролик с четкой метафорой: коллекция воспринимается как линейка «вкусов», каждый образ продается быстро и образно, а персонаж-продавец удерживает внимание и задает тон всей коммуникации. Видео выглядит цельно, легко адаптируется под social-форматы и работает как яркий рекламный хук для мини-дропа.",
    metrics: [
      { label: "Форматы", value: "Post / Reels" },
      { label: "Срок", value: "1 неделя" },
      { label: "Итерации", value: "2 раунда" }
    ],
    related: ["pulse-ui-promo", "helio-product-loop"]
  },
  {
    slug: "seville-artik-asti-fashion-cgi",
    title: "Sasha Saharnaya x NFK | Seville (Artik & Asti)",
    summary:
      "Серия из 7 концептуальных имиджевых кадров для Seville (Artik & Asti): сложная интеграция CGI-цветов в fashion-съемку с кинематографичной эстетикой.",
    year: "2024",
    tags: ["CGI", "3D", "VFX", "Social"],
    roles: ["CGI Artist", "Compositing", "Lookdev", "Post-Production"],
    tools: ["After Effects", "Blender", "Cinema 4D", "Photoshop"],
    heroMedia: {
      type: "image",
      src: "/seville/seville-cover.jpg",
      poster: "/seville/seville-card.jpg",
      frame: "square",
      alt: "ARTIK & ASTI - Быть Счастливой - обложка релиза"
    },
    gallery: [
      { type: "image", src: "/seville/seville-shot-01.jpg", frame: "portrait", alt: "Seville concept frame 01" },
      { type: "image", src: "/seville/seville-shot-02.jpg", frame: "portrait", alt: "Seville concept frame 02" },
      { type: "image", src: "/seville/seville-shot-03.jpg", frame: "portrait", alt: "Seville concept frame 03" },
      { type: "image", src: "/seville/seville-shot-04.jpg", frame: "portrait", alt: "Seville concept frame 04" },
      { type: "image", src: "/seville/seville-shot-05.jpg", frame: "portrait", alt: "Seville concept frame 05" },
      { type: "image", src: "/seville/seville-shot-06.jpg", frame: "portrait", alt: "Seville concept frame 06" },
      { type: "image", src: "/seville/seville-shot-07.jpg", frame: "portrait", alt: "Seville concept frame 07" }
    ],
    challenge:
      "Создать серию из 7 концептуальных имиджевых кадров для Seville (Artik & Asti) в коллаборации с топовым визуализатором Сашей Сахарной. Важно было интегрировать сложные CGI-элементы (цветы) в живые снимки, сохранив эстетику высокой моды и кинематографичность уровня Dune. Основной вызов - добиться фотореалистичного взаимодействия органических объектов с кожей и одеждой артиста.",
    solution:
      "Разработал детализированные 3D-модели цветов с точной проработкой текстур и подповерхностного рассеивания (SSS) для естественного вида в кадре. Выполнил high-end compositing: прецизионный кеинг, ротоскопинг и цветокоррекцию для точного попадания в световую схему съемки. На этапе мудборда зафиксировал теплую «песочную» палитру и кинематографичные акценты в духе работ Дени Вильнева.",
    result:
      "Собран сет из 7 уникальных фотографий, каждая из которых работает как законченное произведение цифрового искусства. Уровень визуальной проработки позволил менеджменту артиста выбрать один из кадров в качестве официальной обложки музыкального релиза. Кейс успешно объединил традиционную fashion-фотографию и продвинутый постпродакшен «под ключ».",
    metrics: [
      { label: "Кадры", value: "7 финальных фото" },
      { label: "Формат", value: "High-End Image Set" },
      { label: "Результат", value: "Обложка официального релиза" }
    ],
    related: ["orbital-social-kit", "axiom-brand-film"]
  },
  {
    slug: "axiom-brand-film",
    title: "BOSE - Fanmade Spec Ad",
    summary: "Кинематографичный spec-ролик. Полный CG-пайплайн с нуля (моделинг, текстуры, шейдинг, анимация) без готовых ассетов.",
    year: "2025",
    tags: ["Motion", "3D", "Product"],
    roles: ["3D", "Motion", "Modeling & Texturing"],
    tools: ["Blender", "Substance Painter", "After Effects"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164873339?share=copy&fl=sv&fe=ci",
      poster: "/bose/BOSE_1987417.png",
      alt: "BOSE - Fanmade Spec Ad"
    },
    previewVideo: {
      type: "video",
      src: "/previews/axiom-brand-film.mp4",
      poster: "/bose/BOSE_1987417.png",
      alt: "BOSE spec ad preview"
    },
    gallery: [],
    challenge: "Сделать fanmade spec ad для Bose — кинематографичный ролик в духе продуктовой рекламы наушников.",
    solution:
      "Выстроил постановку в кинематографичном ключе: чистые product-шоты, динамичный ритм и аккуратная «премиальная» стилизация, чтобы подчеркнуть дизайн и материалы. Собрал полный CG-пайплайн с нуля: моделинг, UV/текстуры, шейдинг и анимация — без использования готовых ассетов. Монтаж и темп сделаны в логике реальной рекламы: короткие акценты, точные паузы и фокус на деталях, чтобы сохранить ощущение премиальности.",
    result: "Готовый spec-рекламный ролик (fanmade) с полностью самостоятельным CG-продакшеном и кинематографичной подачей продукта.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "1 неделя" },
      { label: "Итерации", value: "4 раунда" }
    ],
    related: ["vanta-cgi-opener", "pulse-ui-promo"]
  },
  {
    slug: "prism-energy-ident",
    title: "BUSHIDO ZHO, Aarne - Slim Shady",
    summary: "VFX и композитинг для музыкального клипа: интеграция графических элементов и эффектов в кадр с сохранением единого стиля.",
    year: "2025",
    tags: ["CGI", "VFX"],
    roles: ["Compositing", "CGI"],
    tools: ["After Effects", "Blender"],
    heroMedia: {
      type: "video",
      src: "https://www.youtube.com/watch?v=vldpxVI-EdY&list=RDvldpxVI-EdY&start_radio=1",
      poster: "/bushido/bushido-slim-shady.jpg",
      alt: "BUSHIDO ZHO, Aarne - Slim Shady"
    },
    previewVideo: {
      type: "video",
      src: "/previews/prism-energy-ident.mp4",
      poster: "/bushido/bushido-slim-shady.jpg",
      alt: "BUSHIDO ZHO, Aarne - Slim Shady preview"
    },
    gallery: [
      {
        type: "video",
        src: "https://vimeo.com/1164944210?share=copy&fl=sv&fe=ci",
        poster: "/bushido/bushido-slim-shady.jpg",
        alt: "BUSHIDO ZHO, Aarne - Slim Shady - material 01"
      },
      {
        type: "video",
        src: "https://vimeo.com/1164944184?share=copy&fl=sv&fe=ci",
        poster: "/bushido/bushido-slim-shady.jpg",
        alt: "BUSHIDO ZHO, Aarne - Slim Shady - material 02"
      },
      {
        type: "video",
        src: "https://vimeo.com/1164944197?share=copy&fl=sv&fe=ci",
        poster: "/bushido/bushido-slim-shady.jpg",
        alt: "BUSHIDO ZHO, Aarne - Slim Shady - material 03"
      },
      {
        type: "video",
        src: "https://vimeo.com/1164944177?share=copy&fl=sv&fe=ci",
        poster: "/bushido/bushido-slim-shady.jpg",
        alt: "BUSHIDO ZHO, Aarne - Slim Shady - material 04"
      }
    ],
    challenge:
      "Создать и закомпозить графические объекты и эффекты для ролика: молнии, глаза и крюк, интегрировав их в кадр и общий стиль.",
    solution:
      "Собрал набор объектов (глаза, крюк) и VFX-эффектов (молнии) в едином стиле, настроил анимацию и поведение под движение в кадре. Интегрировал элементы через трекинг/привязки, маски и слои глубины, подобрал свет/контраст и цвет под исходное видео, добавил свечение, размытие и зерно для естественного «вклеивания». Финально вычистил композ и выровнял по таймингу под монтаж.",
    result:
      "Готовый клип с интегрированными объектами и VFX: молнии, глаза и крюк выглядят частью сцены, совпадают по движению, свету и цвету, а эффектные акценты усиливают динамику и читаемость ключевых моментов.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "6 дней" },
      { label: "Итерации", value: "2 раунда" }
    ],
    related: ["aurora-launch-system", "orbit-bank-teaser"]
  },
  {
    slug: "orbit-bank-teaser",
    title: "xxxmanera - Не Спят",
    summary: "Музыкальный клип: VFX и композитинг, графические акценты и интеграция эффектов в кадр.",
    year: "2023",
    tags: ["CGI", "VFX"],
    roles: ["UI Motion", "Edit", "Design"],
    tools: ["After Effects"],
    heroMedia: {
      type: "video",
      src: "https://www.youtube.com/watch?v=TWnvjgXrmgY&list=RDTWnvjgXrmgY&start_radio=1",
      poster: "/xxxmanera/xxxmanera-ne-spyat.jpg",
      alt: "xxxmanera - Не Спят"
    },
    previewVideo: {
      type: "video",
      src: "/previews/orbit-bank-teaser.mp4",
      poster: "/xxxmanera/xxxmanera-ne-spyat.jpg",
      alt: "xxxmanera - Не Спят preview"
    },
    gallery: [],
    challenge:
      "Выполнить VFX и композитинг для музыкального клипа: создать и интегрировать графические элементы/эффекты в кадр, создав единую стилистику.",
    solution:
      "Разработал нужные элементы и эффекты, настроил их анимацию и поведение под действие в кадре. Интегрировал всё через трекинг и привязки, маски/ротоскоп и работу со слоями глубины.",
    result:
      "Готовые сцены с VFX/композом: эффекты аккуратно интегрированы в кадр, совпадают по движению и свету, усиливая динамичность клипа.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "1 неделя" },
      { label: "Итерации", value: "3 раунда" }
    ],
    related: ["pulse-ui-promo", "orbit-bank-teaser"]
  },
  {
    slug: "lumen-headphones-loop",
    title: "GAVRILINA, nkeeei - ПЛОХАЯ",
    summary: "Интро для клипа: экранная история со старым телефоном и картой Москвы, стилизация под MTV 2007.",
    year: "2025",
    tags: ["3D", "Motion"],
    roles: ["3D Generalist", "Animation", "Designer"],
    tools: ["Cinema 4D", "Redshift", "After Effects"],
    heroMedia: {
      type: "video",
      src: "https://www.youtube.com/watch?v=FR3xP1Ms4uI&list=RDFR3xP1Ms4uI&start_radio=1",
      poster: "/plohaya/plohaya-cover.jpg",
      alt: "GAVRILINA, nkeeei - ПЛОХАЯ"
    },
    previewVideo: {
      type: "video",
      src: "/previews/lumen-headphones-loop.mp4",
      poster: "/plohaya/plohaya-cover.jpg",
      alt: "GAVRILINA, nkeeei - ПЛОХАЯ preview"
    },
    gallery: [],
    challenge:
      "Сделать музыкальный клип в формате экранной истории со старым Apple-стайл телефоном: в начале на экране играет трек (обложка и таймбар), затем свайп, разблокировка, карта Москвы с двумя иконками-пойнтами, внутри которых герои едут за рулем. После выбора сделать залет в одну из иконок и переход внутрь сцены. Весь визуальный язык стилизовать под MTV примерно 2007 года.",
    solution:
      "Собрал структуру клипа как цепочку интерфейсных событий и экранных переходов: плеер, свайп, разблокировка, карта, выбор точки, зум-ин в выбранную иконку. Разработал дизайн экранов (обложка, таймбар, жест свайпа, экран блокировки), подготовил стилизованную карту Москвы и две иконки-портала с героями внутри. Анимацию выстроил под темп трека: плавные жесты, читаемые акценты, динамичный залет камеры и переход в сцену без потери ориентирования. Финально привел все к MTV-вайбу 2007.",
    result:
      "Готовое интро-открывашка для музыкального клипа: от плеера на старом телефоне через свайп и разблокировку до карты Москвы с двумя точками и последующим залетом в выбранную сцену. Визуальный стиль выдержан в MTV-эстетике конца 2000-х, а переходы и акценты синхронизированы с ритмом трека.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "8 дней" },
      { label: "Итерации", value: "3 раунда" }
    ],
    related: ["axiom-brand-film", "helio-product-loop"]
  },
  {
    slug: "aether-drink-teaser",
    title: "Исторический кубок 1812",
    summary: "Интро-заставка для шоу: типографика, переходы и композитинг в едином дизайн-коде.",
    year: "2023",
    tags: ["Motion"],
    roles: ["Direction", "Motion", "Compositing"],
    tools: ["After Effects"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1164984915?share=copy&fl=sv&fe=ci",
      poster: "/istorichesky-kubok-1812/cover.png",
      alt: "Исторический кубок 1812 - основной ролик"
    },
    previewVideo: {
      type: "video",
      src: "/previews/aether-drink-teaser.mp4",
      poster: "/istorichesky-kubok-1812/cover.png",
      alt: "Исторический кубок 1812 preview"
    },
    gallery: [
      {
        type: "video",
        src: "https://vimeo.com/1164984938?share=copy&fl=sv&fe=ci",
        poster: "/istorichesky-kubok-1812/cover.png",
        alt: "Исторический кубок 1812 - ролик 2"
      },
      {
        type: "video",
        src: "https://vimeo.com/1164984948?share=copy&fl=sv&fe=ci",
        poster: "/istorichesky-kubok-1812/cover.png",
        alt: "Исторический кубок 1812 - ролик 3"
      }
    ],
    challenge:
      "Сделать интро-открывашку для шоу «Исторический кубок 1812»: короткую заставку, которая задаёт тон, сразу обозначает название и работает как узнаваемое начало перед основным контентом.",
    solution:
      "Собрал интро как компактную заставку для шоу: разработал титульную композицию и типографику, выстроил появление элементов и переходы под нужный темп.",
    result:
      "Готовая интро-заставка для шоу «Исторический кубок 1812»: узнаваемый старт перед основным контентом, чистая типографика и цельная стилистика, которая задаёт настроение с первых секунд.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "6 дней" },
      { label: "Итерации", value: "2 раунда" }
    ],
    related: ["gridos-platform-film", "prism-energy-ident"]
  },
  {
    slug: "gridos-platform-film",
    title: "ТРИ КОТА: МТС,OZON",
    summary: "Продуктовые рекламные ролики под джингл: модульная графика, чёткая подача преимуществ и единый темп.",
    year: "2024",
    tags: ["Motion", "Product"],
    roles: ["Edit", "Design", "3D", "Motion", "Compositing"],
    tools: ["After Effects", "Blender", "Photoshop"],
    heroMedia: {
      type: "video",
      src: "https://vimeo.com/1165001104?share=copy&fl=sv&fe=ci",
      poster: "/placeholder/tri-kota-cover.png",
      alt: "ТРИ КОТА: МТС,OZON"
    },
    previewVideo: {
      type: "video",
      src: "/previews/gridos-platform-film.mp4",
      poster: "/placeholder/tri-kota-cover.png",
      alt: "Three Cats preview"
    },
    gallery: [
      {
        type: "video",
        src: "https://vimeo.com/1165001193?share=copy&fl=sv&fe=ci",
        poster: "/placeholder/tri-kota-cover.png",
        alt: "ТРИ КОТА: МТС,OZON - ролик 2"
      }
    ],
    challenge: `МТС / тарифы
Создать динамичный рекламный ролик под музыкальный джингл, который за короткий хронометраж понятно раскрывает ключевые преимущества тарифов МТС и ведёт к целевому действию.

Ozon Travel
Создать динамичный рекламный ролик под музыкальный джингл для нового на тот момент сервиса Ozon Travel: быстро объяснить, что это за продукт и в чём его удобство.`,
    solution: `МТС / тарифы
Разбил видеоряд на короткие сцены в ритме джингла: хук, ключевые преимущества, закрепление, призыв. Скомпоновал подачу через крупные заголовки, цифры и простые иконки (связь/интернет/сервисы) + быстрые, чистые переходы, чтобы условия читались за секунду.

Ozon Travel
Собрал ролик как цепочку коротких смысловых сцен в ритме джингла: сильный хук, 3-4 ключевых преимущества, закрепление, призыв. Подачу построил на крупной типографике, точных акцентах на формулировках и быстром темповом монтаже, чтобы преимущества считывались "на лету", без перегруза деталями.`,
    result:
      "Темп джингла сохранён, ключевые преимущества каждого продукта считываются с первого просмотра. Оба ролика уверенно работают в рекламных размещениях и адаптируются под разные digital-форматы без потери читаемости и ясности.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "9 дней" },
      { label: "Итерации", value: "6 раундов" }
    ],
    related: ["pulse-ui-promo", "orbit-bank-teaser"]
  },
  {
    slug: "nightline-event-opener",
    title: "CONNECTION STUDIO 2025 season teaser",
    summary: "Тизер для запуска продакшена в коллабе нескольких авторов.",
    year: "2025",
    tags: ["Motion", "3D", "VFX"],
    roles: ["Motion Design", "3D", "Compositing"],
    tools: ["Cinema 4D", "After Effects", "Blender"],
    heroMedia: {
      type: "image",
      src: "/connection-studio-2025.jpg",
      alt: "CONNECTION STUDIO 2025 season teaser"
    },
    previewVideo: {
      type: "video",
      src: "/previews/nightline-event-opener.mp4",
      poster: "/connection-studio-2025.jpg",
      alt: "CONNECTION STUDIO 2025 preview"
    },
    gallery: [
      {
        type: "video",
        src: "https://vimeo.com/1165729570?share=copy&fl=sv&fe=ci",
        poster: "/connection-studio-2025.jpg",
        alt: "CONNECTION STUDIO 2025 season teaser"
      }
    ],
    challenge:
      "Собрать тизер для CONNECTION STUDIO в коллаборации с другими креаторами: с моей стороны смоделировать и собрать несколько CGI/3D мизансцен, которые потом лягут в общий монтаж, и при этом попасть в общий арт-дирекшен и настроение.",
    solution:
      "На предпродакшене зафиксировали визуальные правила (палитра, контраст, характер света, масштаб деталей) и собрали сцены как шот-пакеты: блокинг -> моделинг -> шейдинг/материалы -> свет -> анимация/камера -> рендер пассами, чтобы композ и грейд могли гибко собрать финал.",
    result:
      "В финальном тизере сцены встали в общий ритм и стиль коллаба: картинка воспринимается как единое произведение, при этом остаётся нужная напряжённая атмосфера и читаемый мотив. Ролик готов для публикации и масштабирования под площадки без развала визуального кода.",
    metrics: [
      { label: "Форматы", value: "16:9" },
      { label: "Срок", value: "1 неделя" },
      { label: "Итерации", value: "3 раунда" }
    ],
    related: ["vanta-cgi-opener", "orbit-bank-teaser"]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slugs: string[]) {
  return projects.filter((project) => slugs.includes(project.slug));
}

export function getFeaturedProjects() {
  const featured = [...projects.slice(0, 6), ...projects.slice(-6)];
  const uniqueBySlug = new Map(featured.map((project) => [project.slug, project]));
  return [...uniqueBySlug.values()];
}

