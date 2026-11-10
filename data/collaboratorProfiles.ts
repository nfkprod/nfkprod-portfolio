// Music profiles standardized to Apple Music on 2026-11-10. Verification sources retained.
export type CollaboratorProfile = { url: string; evidence: string; kind: string };
const profiles: Record<string, CollaboratorProfile> = {
  "a+": { url: "https://aplusmuz.ru/", evidence: "https://aplusmuz.ru/", kind: "official-label-website" },
  "racer worldwide": { url: "https://www.racerworldwide.net/", evidence: "https://www.racerworldwide.net/", kind: "official-brand-website" },
  "juicy couture": { url: "https://juicycouture.com/", evidence: "https://juicycouture.com/", kind: "official-brand-website" },
  "aarne": {
    "url": "https://music.apple.com/us/artist/aarne/1533716530",
    "evidence": "https://music.apple.com/us/song/1694334196",
    "kind": "apple-music-artist"
  },
  "adore moscow": {
    "url": "https://adore.moscow/",
    "evidence": "https://t.me/adoremoscow/",
    "kind": "official-brand-website"
  },
  "artem shilovets": {
    "url": "https://music.apple.com/us/artist/artem-shilovets/1447052076",
    "evidence": "https://music.apple.com/us/song/1870829576",
    "kind": "apple-music-artist"
  },
  "big baby tape": {
    "url": "https://music.apple.com/us/artist/big-baby-tape/1356097231",
    "evidence": "https://music.apple.com/us/artist/big-baby-tape/1356097231",
    "kind": "apple-music-artist"
  },
  "bushido zho": {
    "url": "https://music.apple.com/us/artist/bushido-zho/1490831713",
    "evidence": "https://music.apple.com/us/song/1694334196",
    "kind": "apple-music-artist"
  },
  "buster": {
    "url": "https://www.twitch.tv/buster",
    "evidence": "https://www.streamablecharts.com/channels/twitch/buster",
    "kind": "twitch-channel"
  },
  "claude money": {
    "url": "https://music.apple.com/us/artist/claude-money/1069317668",
    "evidence": "https://music.apple.com/us/artist/claude-money/1069317668",
    "kind": "apple-music-artist"
  },
  "clonnex": {
    "url": "https://music.apple.com/us/artist/clonnex/1452875720",
    "evidence": "https://music.apple.com/us/album/type-single/1893337841",
    "kind": "apple-music-artist"
  },
  "dose": {
    "url": "https://music.apple.com/us/artist/dose/1454808243",
    "evidence": "https://music.apple.com/us/artist/dose/1454808243",
    "kind": "apple-music-artist"
  },
  "flamebaker": {
    "url": "https://t.me/flamebaker",
    "evidence": "https://t.me/flamebaker",
    "kind": "brand-telegram-channel"
  },
  "gorilla glu": {
    "url": "https://music.apple.com/ru/artist/gorilla-glue/1717603795",
    "evidence": "https://music.apple.com/ru/album/teremok-single/6787913107",
    "kind": "apple-music-artist"
  },
  "heartz": {
    "url": "https://heartz.immo/",
    "evidence": "https://russianstreetwear.club/heartz",
    "kind": "official-brand-website"
  },
  "heronwater": {
    "url": "https://music.apple.com/us/artist/heronwater/1659366660",
    "evidence": "https://music.apple.com/us/artist/heronwater/1659366660",
    "kind": "apple-music-artist"
  },
  "hofmannita": {
    "url": "https://music.apple.com/us/artist/hofmannita/1476459230",
    "evidence": "https://music.apple.com/us/artist/hofmannita/1476459230?l=pt-BR",
    "kind": "apple-music-artist"
  },
  "johnny dang": {
    "url": "https://johnnydangandco.com/",
    "evidence": "https://link.me/johnnydang",
    "kind": "official-brand-website"
  },
  "jony": {
    "url": "https://music.apple.com/us/artist/jony/1444702518",
    "evidence": "https://music.apple.com/us/playlist/jony-essentials/pl.0241352bdb984f839e61eb1403ea3735",
    "kind": "apple-music-artist"
  },
  "kali uchis": {
    "url": "https://music.apple.com/us/artist/kali-uchis/894731301",
    "evidence": "https://music.apple.com/us/artist/kali-uchis/894731301",
    "kind": "apple-music-artist"
  },
  "kout": {
    "url": "https://music.apple.com/us/artist/kout/1477101111",
    "evidence": "https://music.apple.com/us/artist/kout/1477101111",
    "kind": "apple-music-artist"
  },
  "lil kavkaz": {
    "url": "https://music.apple.com/us/artist/lil-kavkaz/1598317052",
    "evidence": "https://music.apple.com/us/album/christopher-tony-single/6772724634",
    "kind": "apple-music-artist"
  },
  "lil krystalll": {
    "url": "https://music.apple.com/us/artist/lil-krystalll/1345892399",
    "evidence": "https://music.apple.com/us/artist/lil-krystalll/1345892399",
    "kind": "apple-music-artist"
  },
  "lil morty": {
    "url": "https://music.apple.com/us/artist/lil-morty/1450149680",
    "evidence": "https://music.apple.com/us/album/lil-morty/1450377118",
    "kind": "apple-music-artist"
  },
  "lil naku": {
    "url": "https://music.apple.com/ru/artist/lil-nakur/1717603544",
    "evidence": "https://music.apple.com/ru/album/teremok-single/6787913107",
    "kind": "apple-music-artist"
  },
  "lovv66": {
    "url": "https://music.apple.com/us/artist/lovv66/1453218855",
    "evidence": "https://music.apple.com/us/artist/lovv66/1453218855",
    "kind": "apple-music-artist"
  },
  "luverance": {
    "url": "https://music.apple.com/us/artist/luverance/1504929593",
    "evidence": "https://music.apple.com/us/artist/luverance/1504929593",
    "kind": "apple-music-artist"
  },
  "may wave$": {
    "url": "https://music.apple.com/us/artist/may-wave%24/1252888679",
    "evidence": "https://music.apple.com/us/artist/may-wave%24/1252888679?itscg=30200&itsct=music_box_link&ls=1",
    "kind": "apple-music-artist"
  },
  "mayot": {
    "url": "https://music.apple.com/us/artist/mayot/1458525039",
    "evidence": "https://music.apple.com/us/artist/mayot/1458525039",
    "kind": "apple-music-artist"
  },
  "nasty babe": {
    "url": "https://music.apple.com/us/artist/nasty-babe/1451043072",
    "evidence": "https://music.apple.com/us/artist/nasty-babe/1451043072",
    "kind": "apple-music-artist"
  },
  "niletto": {
    "url": "https://music.apple.com/us/artist/niletto/1206741918",
    "evidence": "https://music.apple.com/us/album/%D0%BB%D1%8E%D0%B1%D0%B8%D0%BC%D0%BA%D0%B0-single/1880729581",
    "kind": "apple-music-artist"
  },
  "nkeeei": {
    "url": "https://music.apple.com/us/artist/nkeeei/1528083145",
    "evidence": "https://music.apple.com/us/song/1870829576",
    "kind": "apple-music-artist"
  },
  "offmi": {
    "url": "https://music.apple.com/us/artist/offmi/1321919133",
    "evidence": "https://music.apple.com/us/album/to-u/1678789252",
    "kind": "apple-music-artist"
  },
  "og buda": {
    "url": "https://music.apple.com/us/artist/og-buda/1382321701",
    "evidence": "https://music.apple.com/us/artist/og-buda/1382321701",
    "kind": "apple-music-artist"
  },
  "ozon": {
    "url": "https://corp.ozon.ru/",
    "evidence": "https://corp.ozon.ru/",
    "kind": "official-corporate-website"
  },
  "plohoyparen": {
    "url": "https://music.apple.com/us/artist/plohoyparen/1390569747",
    "evidence": "https://music.apple.com/us/artist/plohoyparen/1390569747",
    "kind": "apple-music-artist"
  },
  "ryze ai": {
    "url": "https://www.get-ryze.ai/",
    "evidence": "https://www.linkedin.com/company/get-ryze-ai",
    "kind": "official-website"
  },
  "sasha saharnaya": {
    "url": "https://eight-agency.com/sasha_saharnaya",
    "evidence": "https://eight-agency.com/sasha_saharnaya",
    "kind": "official-agency-profile"
  },
  "soda luv": {
    "url": "https://music.apple.com/gb/artist/soda-luv/1433836652",
    "evidence": "https://music.apple.com/gb/artist/soda-luv/1433836652",
    "kind": "apple-music-artist"
  },
  "streetbeat": {
    "url": "https://street-beat.ru/",
    "evidence": "https://street-beat.ru/",
    "kind": "official-retail-website"
  },
  "tnt": {
    "url": "https://tnt-online.ru/",
    "evidence": "https://tnt-online.ru/",
    "kind": "official-website"
  },
  "treepside": {
    "url": "https://music.apple.com/us/artist/treepside/1564083577",
    "evidence": "https://music.apple.com/us/artist/treepside/1564083577",
    "kind": "apple-music-artist"
  },
  "uniqe": {
    "url": "https://music.apple.com/us/artist/uniqe/1543718356",
    "evidence": "https://music.apple.com/us/song/1870829576",
    "kind": "apple-music-artist"
  },
  "usmanovfck": {
    "url": "https://fuckclothing.ru/",
    "evidence": "https://t.me/usmanovfck1",
    "kind": "official-brand-website"
  },
  "vacio": {
    "url": "https://music.apple.com/ru/artist/vac%C3%ADo/1488185823",
    "evidence": "https://music.apple.com/ru/song/1683825697",
    "kind": "apple-music-artist"
  },
  "velial squad": {
    "url": "https://music.apple.com/ru/artist/velial-squad/1185975352",
    "evidence": "https://music.apple.com/ru/artist/velial-squad/1185975352",
    "kind": "apple-music-artist"
  },
  "vk": {
    "url": "https://vk.company.ru/ru/",
    "evidence": "https://vk.company.ru/ru/company/about/",
    "kind": "official-corporate-website"
  },
  "waka flocka flame": {
    "url": "https://music.apple.com/us/artist/waka-flocka-flame/342826213",
    "evidence": "https://music.apple.com/us/artist/waka-flocka-flame/342826213",
    "kind": "apple-music-artist"
  },
  "white punk": {
    "url": "https://music.apple.com/us/artist/white-punk/1123087266",
    "evidence": "https://music.apple.com/us/artist/white-punk/1123087266",
    "kind": "apple-music-artist"
  },
  "wipo": {
    "url": "https://music.apple.com/us/artist/wipo/1528248614",
    "evidence": "https://music.apple.com/us/artist/wipo/1528248614",
    "kind": "apple-music-artist"
  },
  "xxxmanera": {
    "url": "https://music.apple.com/us/artist/xxxmanera/1512829009",
    "evidence": "https://music.apple.com/us/artist/xxxmanera/1512829009",
    "kind": "apple-music-artist"
  },
  "ваня дмитриенко": {
    "url": "https://music.apple.com/us/artist/%D0%B2%D0%B0%D0%BD%D1%8F-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE/1533434174",
    "evidence": "https://music.apple.com/us/artist/%D0%B2%D0%B0%D0%BD%D1%8F-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE/1533434174",
    "kind": "apple-music-artist"
  },
  "григорий лепс": {
    "url": "https://music.apple.com/us/artist/%D0%B3%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B9-%D0%BB%D0%B5%D0%BF%D1%81/282234226",
    "evidence": "https://music.apple.com/us/artist/%D0%B3%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B9-%D0%BB%D0%B5%D0%BF%D1%81/282234226",
    "kind": "apple-music-artist"
  },
  "динара гараева": {
    "url": "https://30-under-30.forbes.ru/2025/536412-dinara-garaeva",
    "evidence": "https://30-under-30.forbes.ru/2025/536412-dinara-garaeva",
    "kind": "artist-biography"
  },
  "егор крид": {
    "url": "https://music.apple.com/us/artist/egor-kreed/818678567",
    "evidence": "https://music.apple.com/us/artist/egor-kreed/818678567",
    "kind": "apple-music-artist"
  },
  "ири": {
    "url": "https://xn--h1aax.xn--p1ai/",
    "evidence": "https://xn--h1aax.xn--p1ai/about/",
    "kind": "official-website"
  },
  "кишлак": {
    "url": "https://music.apple.com/us/artist/%D0%BA%D0%B8%D1%88%D0%BB%D0%B0%D0%BA/1518967860",
    "evidence": "https://music.apple.com/us/artist/%D0%BA%D0%B8%D1%88%D0%BB%D0%B0%D0%BA/1518967860",
    "kind": "apple-music-artist"
  },
  "королевская семья дубая": {
    "url": "https://protocol.dubai.ae/en/uae-dubai/about-dubai/",
    "evidence": "https://protocol.dubai.ae/en/uae-dubai/about-dubai/",
    "kind": "official-family-history"
  },
  "лали": {
    "url": "https://music.apple.com/us/artist/%D0%BB%D0%B0%D0%BB%D0%B8/1515085936",
    "evidence": "https://music.apple.com/us/artist/%D0%BB%D0%B0%D0%BB%D0%B8/1515085936",
    "kind": "apple-music-artist"
  },
  "молодой платон": {
    "url": "https://music.apple.com/kz/artist/molodoj-platon/1465587712",
    "evidence": "https://music.apple.com/kz/artist/molodoj-platon/1465587712",
    "kind": "apple-music-artist"
  },
  "мтс": {
    "url": "https://mts.ru/",
    "evidence": "https://mts.ru/",
    "kind": "official-website"
  },
  "платина": {
    "url": "https://music.apple.com/us/artist/%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B0/1309211809",
    "evidence": "https://music.apple.com/us/artist/%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B0/1309211809",
    "kind": "apple-music-artist"
  },
  "пошлая молли": {
    "url": "https://music.apple.com/us/artist/%D0%BF%D0%BE%D1%88%D0%BB%D0%B0%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BB%D0%B8/1212756868",
    "evidence": "https://music.apple.com/us/artist/%D0%BF%D0%BE%D1%88%D0%BB%D0%B0%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BB%D0%B8/1212756868",
    "kind": "apple-music-artist"
  },
  "три дня дождя": {
    "url": "https://music.apple.com/us/artist/%D1%82%D1%80%D0%B8-%D0%B4%D0%BD%D1%8F-%D0%B4%D0%BE%D0%B6%D0%B4%D1%8F/1479626901",
    "evidence": "https://music.apple.com/us/album/melancholia/1712676700",
    "kind": "apple-music-artist"
  }
};

export function getCollaboratorProfile(name: string) {
  return profiles[name.replace(/\s*\(WHYNOEN\)/i, "").trim().toLocaleLowerCase()];
}
