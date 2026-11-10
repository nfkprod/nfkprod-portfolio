export type WorkedWithItem = {
  name: string;
  logoSrc?: string;
  logoKind?: "wordmark" | "symbol";
};

export const brands: WorkedWithItem[] = [
  { name: "МТС", logoKind: "symbol", logoSrc: "/brands/mts.svg" },
  { name: "VK", logoKind: "symbol", logoSrc: "/brands/vk.svg" },
  { name: "OZON", logoSrc: "/brands/ozon.svg" },
  { name: "STREETBEAT", logoSrc: "/brands/streetbeat.svg" },
  { name: "Racer Worldwide", logoSrc: "/brands/racer-worldwide.svg" },
  { name: "A+", logoKind: "symbol", logoSrc: "/brands/aplus.png" },
  { name: "TNT", logoKind: "symbol", logoSrc: "/brands/tnt-flat.png" },
  { name: "ИРИ", logoSrc: "/brands/iri.svg" },
  { name: "RYZE AI", logoSrc: "/brands/ryze-ai.webp" },
  { name: "Juicy Couture", logoSrc: "/brands/juicy-couture.png" },
];

// Editorial order: international names, then major music collaborations.
export const topArtists: WorkedWithItem[] = [
  { name: "Waka Flocka Flame" },
  { name: "Kali Uchis" },
  { name: "Егор Крид" },
  { name: "BUSHIDO ZHO" },
  { name: "Aarne" },
  { name: "Big Baby Tape" },
  { name: "JONY" },
  { name: "Sasha Saharnaya" },
  { name: "Динара Гараева (WHYNOEN)" },
  { name: "Ваня Дмитриенко" },
  { name: "Григорий Лепс" },
  { name: "LIL NAKU" },
  { name: "GORILLA GLU" },
];

// Backward-compatible alias
export const artists = topArtists;

const removed = ["3TERNITY", "Kid Sole", "woee33", "whyalive", "OG MINAY", "SOLWAY"];

export const fullList: string[] = [
  // Brands / Media (top)
  "МТС",
  "OZON",
  "TNT",
  "A+",
  "VK",
  "ИРИ",
  "Королевская семья Дубая",

  // Artists and creative collaborators
  "Ваня Дмитриенко",
  "NILETTO",
  "Григорий Лепс",
  "ЕГОР КРИД",
  "JONY",
  "Big Baby Tape",
  "Sasha Saharnaya",
  "Динара Гараева (WHYNOEN)",

  // Extra / international
  "Kali Uchis",

  // Additional collaborators
  "Aarne",
  "BUSHIDO ZHO",
  "Три дня дождя",
  "Пошлая Молли",
  "OG BUDA",
  "SODA LUV",
  "LOVV66",
  "Nasty Babe",
  "nkeeei",
  "uniqe",
  "Artem Shilovets",
  "MAYOT",
  "HERONWATER",
  "Платина",
  "Молодой Платон",
  "Кишлак",
  "xxxmanera",
  "Dose",
  "Wipo",
  "HOFMANNITA",
  "White Punk",
  "LIL KRYSTALLL",
  "PLOHOYPAREN",
  "Лали",
  "LUVERANCE",
  "May Wave$",
  "VELIAL SQUAD",
  "LIL KAVKAZ",
  "OFFMi",

  // No listener data provided (ниже — пока без цифр)
  "LIL MORTY",
  "VACIO",
  "BUSTER",
  "treepside",
  "CLONNEX",
  "KOUT",
  "Claude Money",
  "USMANOVFCK",
  "FLAMEBAKER",
  "Adore Moscow",
  "JOHNNY DANG",
  "Heartz",
  "LIL NAKU",
  "Waka Flocka Flame",
  "GORILLA GLU",
  "STREETBEAT",
  "RYZE AI",
  "Racer Worldwide",
  "Juicy Couture"
].filter((x) => !removed.includes(x));
