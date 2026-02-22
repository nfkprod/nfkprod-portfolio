import type { ProjectItem } from "@/data/types";
import { projects as baseProjects } from "@/data/projects";

type ProjectMetricEn = {
  label: string;
  value: string;
};

type ProjectTranslation = {
  title?: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: ProjectMetricEn[];
  heroAlt?: string;
  galleryAlts?: string[];
};

const translations: Record<string, ProjectTranslation> = {
  "aurora-launch-system": {
    title: "Internet Development Institute (IRI)",
    summary: "A series of dynamic digital videos created to attract new applicants to the IRI competition.",
    challenge:
      "The task was to build a unified visual style for a full video series: communicate key competition rules and benefits through a clear, aesthetic visual language so every asset looked coherent, recognizable, and easy to read.",
    solution:
      "I designed a single visual system for the IRI series: graphics, typography, and animation principles that clearly communicate key points and eligibility terms. The main video set the tone, rhythm, and rules, then the same system was scaled across the entire content set.",
    result:
      "The final series feels consistent and recognizable: core messages are easy to grasp, pacing keeps attention, and the visual identity remains strong from video to video.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "1 month" },
      { label: "Iterations", value: "5 rounds" }
    ],
    heroAlt: "IRI case main video",
    galleryAlts: ["IRI video 1", "IRI video 2", "IRI video 3"]
  },
  "pulse-ui-promo": {
    summary: "App promo video with clear narrative structure, UI motion, and clean typography.",
    challenge: "Create a clear UI promo without visual noise and keep focus on product features.",
    solution:
      "I built a modular scene structure and aligned animation rhythm, typography, and color accents. This made the product story sequential, readable, and lightweight.",
    result:
      "The final video is clean and rhythmic: key features are understood in one watch while the style supports premium app positioning.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "1 round" }
    ],
    heroAlt: "ICEBERG UI PROMO hero frame"
  },
  "vanta-cgi-opener": {
    title: "Comedy Club New Year Episode",
    summary: "Animated background for a Comedy Club New Year episode.",
    challenge:
      "Create a premium New Year animated background that looks expensive, does not conflict with titles/graphics, loops seamlessly for around 30 seconds, and can be adapted for projection/LED mapping on a tree made of screens.",
    solution: "Delivered a premium New Year animated background and prepared projection-ready versions for the LED tree setup.",
    result:
      "The final background is premium, clean, and seamless: soft light rhythm, controlled decorative accents, and no visual overload. Projection versions were adapted with crop/layout constraints so composition remains stable across screen joins.",
    metrics: [
      { label: "Formats", value: "2.39:1, 27:13" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "3 rounds" }
    ],
    heroAlt: "Comedy Club New Year episode main video"
  },
  "helio-product-loop": {
    summary:
      "A motion promo in a ctOS-inspired style for an internal audience, presenting the brand relaunch as a digital ecosystem.",
    challenge:
      "Create a HEARTZ 2.0 motion video that presents the project as a digital ecosystem and service, not only a clothing brand, in a Frutiger Aero aesthetic. Deliver both landscape (YouTube/Telegram) and vertical (Reels) versions with one visual language.",
    solution:
      "I prepared storyboard and animatic, then set and maintained visual direction as art director: references, moodboard, palette, materials, and composition. I built 3D scenes in a Watch Dogs-inspired style and designed all UI elements manually.",
    result:
      "The output is a complete concept video with a unified 3D and UI/UX language. Interface elements feel native to the world, reinforce rhythm and accents, and make the direction ready for presentation and next production stages.",
    metrics: [
      { label: "Formats", value: "9:16, 16:9" },
      { label: "Timeline", value: "1 month" },
      { label: "Iterations", value: "7 rounds" }
    ],
    heroAlt: "HEARTZ 2.0 main video",
    galleryAlts: ["Technical brief", "Technical brief, second page"]
  },
  "orbital-social-kit": {
    title: "Lacres Product Promo",
    summary:
      "Promo video for a Lacres mini-collection built around a menu concept: each item is presented as a separate position with stylized compositing.",
    challenge:
      "Produce a fashion promo with an unusual sales metaphor: present clothing items as ice-cream flavors, with a seller-driven pitch structure inspired by scene-based references.",
    solution:
      "I built the video as a sequence of short seller pitches where each item has its own entrance, mood, and value statement. Fashion visuals were connected to an ice-cream identity through color, shape, pacing, and menu-style typography.",
    result:
      "The final promo has a clear metaphor and strong memorability: each look is sold quickly and visually, and the seller character anchors the communication. The piece scales well to social formats.",
    metrics: [
      { label: "Formats", value: "Post / Reels" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "2 rounds" }
    ],
    heroAlt: "Lacres product promo frame",
    galleryAlts: [
      "Character processing and compositing",
      "Character processing and compositing",
      "Character processing and compositing",
      "Character processing and compositing",
      "Character processing and compositing",
      "Character processing and compositing",
      "Character processing and compositing",
      "Character processing and compositing"
    ]
  },
  "axiom-brand-film": {
    summary: "Cinematic spec ad. Full CG pipeline from scratch (modeling, texturing, shading, animation) with no premade assets.",
    challenge: "Create a fanmade Bose spec ad with a cinematic premium product-ad feel.",
    solution:
      "I built a cinematic setup with clean product shots, dynamic pacing, and premium styling to highlight design and materials. The entire CG pipeline was done from scratch: modeling, UV/textures, shading, and animation.",
    result: "A finished fanmade spec ad with a fully self-produced CG workflow and cinematic product presentation.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "4 rounds" }
    ]
  },
  "neon-pay-launch": {
    summary: "Launch visual for a fintech product: clean graphics, product-first accents, and dynamic edit rhythm.",
    challenge: "Build a short launch video with premium feel and clear product demonstration.",
    solution: "I built pacing from short product shots, added focused graphics, and kept one coherent light style.",
    result: "The video adapts well to digital channels and keeps attention on the core product benefits.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "10 days" },
      { label: "Iterations", value: "3 rounds" }
    ]
  },
  "atlas-watch-reveal": {
    summary: "Watch reveal video focused on materials, lighting, and micro-details in a CGI presentation.",
    challenge: "Show product texture and assembly details without visual overload.",
    solution: "I built a minimal scene with emphasis on body materials, glass behavior, and controlled reflections.",
    result: "A clean reveal suitable as a hero asset for promo and social distribution.",
    metrics: [
      { label: "Formats", value: "16:9, 9:16" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Iterations", value: "4 rounds" }
    ]
  },
  "flux-ui-onboarding": {
    summary: "UI motion package for onboarding with focus on clear navigation, rhythm, and readability.",
    challenge: "Simplify onboarding perception and reduce time-to-understand for new users.",
    solution: "I created a modular animation system with unified transitions, timing, and typographic rules.",
    result: "Onboarding became sequential and visually coherent across all touchpoints.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "2 rounds" }
    ]
  },
  "terra-social-burst": {
    summary: "A short-form social creative series for frequent launches: fast editing, clear offers, one visual system.",
    challenge: "Produce a set of short creatives for multiple platforms with frequent offer updates.",
    solution: "I built a template-based production pipeline with a fast adaptation system for each format.",
    result: "The creatives ship consistently with stable quality and predictable timing.",
    metrics: [
      { label: "Formats", value: "9:16, 1:1, 16:9" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "2 rounds" }
    ]
  },
  "nova-device-loop": {
    summary: "Seamless product loop for digital screens with clean light setup and smooth motion.",
    challenge: "Build a seamless loop for showcase screens without visible seam or pacing drop.",
    solution: "I designed a symmetrical motion cycle and balanced lighting for a natural endless loop.",
    result: "The final video works as a continuous hero visual for both offline and digital placements.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "9 days" },
      { label: "Iterations", value: "3 rounds" }
    ]
  },
  "prism-energy-ident": {
    title: "BUSHIDO ZHO, Aarne - Slim Shady",
    summary: "VFX and compositing for a music video: integrating graphic objects and effects while preserving one visual style.",
    challenge: "Create and composite graphic objects/effects (lightning, eyes, hook) into shots and overall style.",
    solution:
      "I designed a unified set of VFX elements, tuned animation behavior to live-action movement, integrated everything with tracking, masks, and depth layers, then matched color/light and finalized compositing to the edit timing.",
    result:
      "The final clip features integrated VFX where lightning, eyes, and hook feel native to each scene and strengthen key visual beats.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "6 days" },
      { label: "Iterations", value: "2 rounds" }
    ],
    heroAlt: "BUSHIDO ZHO, Aarne - Slim Shady",
    galleryAlts: ["Material 01", "Material 02", "Material 03", "Material 04"]
  },
  "orbit-bank-teaser": {
    title: "xxxmanera - No Sleep",
    summary: "Music video VFX/compositing with graphic accents and effect integration in live-action footage.",
    challenge: "Complete VFX and compositing for a music video while keeping a unified stylistic system.",
    solution:
      "I designed required effects, matched animation to action, integrated layers through tracking, roto/masks, and depth separation.",
    result: "Final scenes have cleanly integrated VFX aligned with movement and light, adding energy and clarity.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "3 rounds" }
    ]
  },
  "lumen-headphones-loop": {
    title: "GAVRILINA, nkeeei - BAD",
    summary: "Music-video intro: screen story with an old phone and Moscow map, styled in MTV 2007 aesthetics.",
    challenge:
      "Build an intro as a screen narrative on an old Apple-style phone: player screen -> swipe -> unlock -> Moscow map with two points -> zoom into selected point and transition into scene, all in a 2007 MTV visual language.",
    solution:
      "I built the intro as a chain of interface events and transitions, designed all key phone screens and map elements, then synchronized gesture timing and camera moves to the track rhythm.",
    result:
      "The finished opening moves clearly from player screen to selected map point and scene transition, with a cohesive late-2000s MTV-inspired visual style.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "8 days" },
      { label: "Iterations", value: "3 rounds" }
    ]
  },
  "aether-drink-teaser": {
    title: "Historical Cup 1812",
    summary: "Intro opener for a show with unified typography, transitions, and compositing.",
    challenge:
      "Create a short opener for the show Historical Cup 1812 that immediately sets tone, introduces the title, and works as a recognizable opening beat.",
    solution: "I assembled a compact intro with custom title composition, typography, and transition rhythm.",
    result:
      "The opener became a clear and recognizable show start: clean typography, coherent style, and immediate tone-setting from first seconds.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "6 days" },
      { label: "Iterations", value: "2 rounds" }
    ],
    heroAlt: "Historical Cup 1812 main video",
    galleryAlts: ["Historical Cup 1812 video 2", "Historical Cup 1812 video 3"]
  },
  "gridos-platform-film": {
    title: "Three Cats: MTS, OZON",
    summary: "Product ads built around jingle rhythm: modular graphics, clear benefits, and unified pacing.",
    challenge:
      "Create dynamic jingle-based ads for MTS tariffs and Ozon Travel, where key product benefits are communicated fast and clearly within short timing.",
    solution:
      "I structured both videos into short semantic beats: hook, key benefits, reinforcement, and CTA. The visual language used bold type, clean iconography, and fast but readable transitions.",
    result:
      "Jingle rhythm and readability were preserved. Both ads perform well in placements and adapt to multiple digital formats without losing clarity.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "9 days" },
      { label: "Iterations", value: "6 rounds" }
    ],
    heroAlt: "Three Cats: MTS, OZON",
    galleryAlts: ["Three Cats: MTS, OZON video 2"]
  },
  "nightline-event-opener": {
    title: "CONNECTION STUDIO 2025 Season Teaser",
    summary: "Teaser for production launch in a multi-author collaboration.",
    challenge:
      "Build a teaser with other creators where my part involved multiple CGI/3D scenes that had to fit one shared art direction and mood.",
    solution:
      "At pre-production, we fixed visual rules (palette, contrast, light behavior, detail scale) and built scenes as shot-pack stages: blocking -> modeling -> shading/materials -> light -> animation/camera -> render passes.",
    result:
      "Final teaser scenes sit in one coherent rhythm and style: strong atmosphere, clear motif, and scalable delivery for platform distribution.",
    metrics: [
      { label: "Formats", value: "16:9" },
      { label: "Timeline", value: "1 week" },
      { label: "Iterations", value: "3 rounds" }
    ]
  }
};

export const projectsEn: ProjectItem[] = baseProjects.map((project) => {
  const translation = translations[project.slug];
  if (!translation) {
    return project;
  }

  return {
    ...project,
    title: translation.title ?? project.title,
    summary: translation.summary,
    challenge: translation.challenge,
    solution: translation.solution,
    result: translation.result,
    metrics: translation.metrics,
    heroMedia: {
      ...project.heroMedia,
      alt: translation.heroAlt ?? project.heroMedia.alt
    },
    gallery: project.gallery.map((media, index) => ({
      ...media,
      alt: translation.galleryAlts?.[index] ?? `Project media ${index + 1}`
    }))
  };
});

export function getProjectBySlugEn(slug: string) {
  return projectsEn.find((project) => project.slug === slug);
}

export function getRelatedProjectsEn(slugs: string[]) {
  return projectsEn.filter((project) => slugs.includes(project.slug));
}

export function getFeaturedProjectsEn() {
  const featured = [...projectsEn.slice(0, 6), ...projectsEn.slice(-6)];
  const uniqueBySlug = new Map(featured.map((project) => [project.slug, project]));
  return [...uniqueBySlug.values()];
}
