export type WorkedWithItem = {
  name: string;
  logoSrc?: string;
};

export const brands: WorkedWithItem[] = [
  { name: "МТС" },
  { name: "OZON" },
  { name: "TNT" },
  { name: "A+" },
  { name: "VK" },
  { name: "ИРИ" }
];

export const topArtists: WorkedWithItem[] = [
  { name: "Kali Uchis" },
  { name: "Егор Крид" },
  { name: "JONY" },
  { name: "Big Baby Tape" },
  { name: "Ваня Дмитриенко" },
  { name: "Григорий Лепс" }
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

  // Top-6 artists (НЕ ТРОГАЮ порядок)
  "Ваня Дмитриенко",
  "NILETTO",
  "Григорий Лепс",
  "ЕГОР КРИД",
  "JONY",
  "Big Baby Tape",

  // Extra / international
  "Kali Uchis",

  // Sorted by monthly listeners (по твоим скринам)
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
  "Heartz"
].filter((x) => !removed.includes(x));
