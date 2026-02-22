import type { ServiceAddon, ServicePackage } from "@/data/types";

export const servicePackagesEn: ServicePackage[] = [
  {
    id: "starter-motion-pack",
    name: "Starter Motion Pack",
    subtitle: "Short-form social videos and editing with motion graphics.",
    priceFrom: "from $847",
    timeline: "5-7 business days",
    revisions: "2 rounds",
    sourceFiles: "AEP + final exports",
    deliverables: ["2 videos up to 15 sec", "9:16 / 1:1 adaptation", "Basic sound layout"],
    includes: ["Script structure", "Editing + motion", "Basic color/sound"],
    excludes: ["Advanced 3D", "Voice-over", "Heavy VFX"],
    highlighted: false
  },
  {
    id: "cgi-product-shot",
    name: "CGI Product Shot",
    subtitle: "3D product renders, turntables, and beauty shots.",
    priceFrom: "from $1,824",
    timeline: "10-14 business days",
    revisions: "3 rounds",
    sourceFiles: "Render passes + project files",
    deliverables: ["Hero shot 10-20 sec", "3-5 key visuals", "Short cutdowns"],
    includes: ["Lookdev", "Lighting/materials", "Compositing"],
    excludes: ["Complex simulations", "Photogrammetry", "Marketing strategy"],
    highlighted: true
  },
  {
    id: "explainer-ui-promo",
    name: "UIX / Interface Motion",
    subtitle: "UI animations, transitions, micro-interactions, HUD/overlay, and product screen prototypes.",
    priceFrom: "from $1,238",
    timeline: "7-10 business days",
    revisions: "2-3 rounds",
    sourceFiles: "AEP/Figma links + master",
    deliverables: ["Video up to 45 sec", "Subtitles and titles", "Web/social versions"],
    includes: ["Narrative structure", "UI motion", "Final render"],
    excludes: ["Full UX redesign", "Native voice-over", "Complex character rig"],
    highlighted: false
  },
  {
    id: "custom",
    name: "Custom",
    subtitle: "Tailored scope based on your task and deadline.",
    priceFrom: "Custom quote",
    timeline: "based on brief",
    revisions: "flexible",
    sourceFiles: "as agreed",
    deliverables: ["KPI-focused scope", "Team matched to pipeline", "Step-by-step production plan"],
    includes: ["Task audit", "Pre-estimate", "Roadmap"],
    excludes: ["Fixed checklist"],
    highlighted: false
  }
];

export const serviceAddonsEn: ServiceAddon[] = [
  { id: "extra-revision", name: "Extra revision round", price: "+$156", note: "per round" },
  { id: "rush", name: "Rush slot", price: "+35%", note: "compressed timeline" },
  { id: "asset-pack", name: "3D asset pack", price: "from $391", note: "asset sourcing/creation" },
  { id: "sound", name: "Sound design", price: "from $326", note: "professional sound pass" }
];
