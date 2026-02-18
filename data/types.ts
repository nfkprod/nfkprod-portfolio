export const projectTags = ["Motion", "CGI", "3D", "VFX", "Product", "Social", "UIX"] as const;

export type ProjectTag = (typeof projectTags)[number];

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  frame?: "landscape" | "portrait" | "square" | "cinema";
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags: ProjectTag[];
  roles: string[];
  tools: string[];
  heroMedia: ProjectMedia;
  gallery: ProjectMedia[];
  challenge: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  related: string[];
};

export type ServicePackage = {
  id: string;
  name: string;
  subtitle: string;
  priceFrom: string;
  timeline: string;
  revisions: string;
  sourceFiles: string;
  deliverables: string[];
  includes: string[];
  excludes: string[];
  highlighted?: boolean;
};

export type ServiceAddon = {
  id: string;
  name: string;
  price: string;
  note: string;
};
