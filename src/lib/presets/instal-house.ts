import type { SitePreset } from "./types";

const siteCity = "Święciechowa i okolice";
const cityLocative = "w Święciechowie";
const siteName = "Instal-House";

export const instalHousePreset: SitePreset = {
  id: "instal-house",
  label: "Instal-House Dominik Budziński",
  siteName,
  companyLegalName: "Instal-House Dominik Budziński",
  siteCity,
  cityLocative,
  siteDefaultUrl: "https://www.facebook.com/instalhouse1",
  email: "instal.house1@gmail.com",
  phoneDisplay: "724 140 237",
  phoneE164: "+48724140237",
  address: "św. Maksymiliana Marii Kolbego 18, 64-115 Święciechowa",
  addressStreet: "św. Maksymiliana Marii Kolbego 18",
  addressCity: "Święciechowa",
  addressPostal: "64-115",
  serviceArea: "Święciechowa i okolice, dojazd do klienta",
  mapsQuery: "Instal-House Dominik Budziński Święciechowa",
  mapsUrl: "https://maps.app.goo.gl/jZiEmMDZWPAUB9U18",
  googleReviewsUrl: "https://maps.app.goo.gl/jZiEmMDZWPAUB9U18",
  googleWriteReviewUrl: "https://g.page/r/CYH44ZkxwFWoEBM/review",
  nip: "697-225-51-33",
  regon: "388285186",
  hours: "Pn - Pt: 8:00 - 17:00",
  logoUrl: "/logo.svg",
  logoIncludesName: true,
  faviconUrl: "/favicon.svg",
  heroImage: "/gallery/buderus-pompa-ciepla.webp",
  siteTitle: `Instalacje HVAC Święciechowa | ${siteName}`,
  siteKeywords:
    "instalacje hydrauliczne, pompy ciepła, instalacje CO, instalacje gazowe, klimatyzacja, smart home, Święciechowa, hydraulik",
  siteDescription: `Kompleksowe instalacje wod-kan, CO, gaz, pompy ciepła i smart home ${cityLocative} i okolicach. Zadzwoń: 724 140 237.`,
  ogImage: "/gallery/buderus-pompa-ciepla.webp",
  googleRating: 0,
  googleReviewCount: 0,
  partners: [],
  gallery: [
    {
      image: "/gallery/buderus-pompa-ciepla.webp",
      alt: "Montaż pompy ciepła, realizacja Instal-House w Święciechowej",
      caption: "Montaż pompy ciepła",
    },
    {
      image: "/gallery/buderus-gb172.webp",
      alt: "Instalacja kotła gazowego, serwis CO w okolicy Święciechowej",
      caption: "Instalacja kotła CO",
    },
    {
      image: "/gallery/buderus-kaskada.webp",
      alt: "System grzewczy kaskadowy, montaż instalacji CO",
      caption: "System grzewczy CO",
    },
    {
      image: "/gallery/buderus-gb192.webp",
      alt: "Kocioł gazowy Buderus, montaż i uruchomienie",
      caption: "Kocioł gazowy",
    },
    {
      image: "/gallery/dom-ursynow.webp",
      alt: "Instalacja hydrauliczna w domu jednorodzinnym",
      caption: "Instalacje w domu",
    },
    {
      image: "/gallery/lokal-wola.webp",
      alt: "Instalacja sanitarna w lokalu użytkowym",
      caption: "Instalacje sanitarne",
    },
  ],
  reviews: [],
  heroHeadline: "Montaż i serwis instalacji HVAC",
  heroBullets: [
    "Instalacje wod-kan, CO, gaz, pompy ciepła i smart home.",
    "Siedziba w Święciechowej, dojazd na terenie okolicy.",
  ],
  footerTagline: "Instalacje hydrauliczne, CO i pompy ciepła",
  servicesSectionSubtitle:
    "Kompleksowe instalacje sanitarne, grzewcze i HVAC. Od projektu po serwis.",
  gallerySectionSubtitle: "Realizacje montażowe w Święciechowej i okolicach.",
  services: [
    {
      icon: "check-circle",
      title: "Instalacje hydrauliczne",
      desc: "Montaż i modernizacja instalacji wodno-kanalizacyjnych w domach i lokalach.",
    },
    {
      icon: "flame",
      title: "Instalacje CO i gaz",
      desc: "Kotły, piece, instalacje gazowe i centralnego ogrzewania z uruchomieniem.",
    },
    {
      icon: "zap",
      title: "Montaż pomp ciepła",
      desc: "Dobór urządzenia, montaż, pierwsze uruchomienie i serwis pogwarancyjny.",
    },
    {
      icon: "wrench",
      title: "Klimatyzacja i wentylacja",
      desc: "Montaż, serwis i naprawa klimatyzacji oraz instalacji wentylacyjnych.",
    },
    {
      icon: "check-circle",
      title: "Automatyka Smart Home",
      desc: "Inteligentne sterowanie ogrzewaniem, oświetleniem i instalacjami w budynku.",
    },
    {
      icon: "alert-triangle",
      title: "Serwis i naprawy",
      desc: "Diagnostyka usterek i szybka reakcja przy awariach instalacji.",
    },
  ],
  faqs: [
    {
      q: "Jakie instalacje wykonujecie?",
      a: "Montujemy i serwisujemy instalacje wod-kan, CO, gaz, pompy ciepła, klimatyzację oraz automatyka smart home.",
    },
    {
      q: "Czy montujecie pompy ciepła?",
      a: "Tak. Dobieramy urządzenie, montujemy, uruchamiamy i serwisujemy pompy ciepła na terenie Święciechowej i okolic.",
    },
    {
      q: "Czy zajmujecie się instalacjami gazowymi i CO?",
      a: "Tak. Wykonujemy instalacje centralnego ogrzewania i gazowe z uruchomieniem i serwisem.",
    },
    {
      q: "Ile kosztuje montaż instalacji?",
      a: "Koszt zależy od zakresu prac i urządzeń. Dokładną wycenę przedstawimy po oględzinach lub rozmowie telefonicznej.",
    },
    {
      q: "Czy dojeżdżacie do klienta?",
      a: `Tak. Obsługujemy ${siteCity.toLowerCase()}. Przyjeżdżamy na miejsce, siedziba firmy znajduje się przy ul. Kolbego 18.`,
    },
  ],
  serviceOptionGroups: [
    {
      label: "Hydraulika",
      options: [
        "Instalacja wodno-kanalizacyjna",
        "Modernizacja instalacji sanitarnej",
        "Naprawa instalacji hydraulicznej",
      ],
    },
    {
      label: "CO i gaz",
      options: [
        "Montaż kotła gazowego",
        "Instalacja centralnego ogrzewania",
        "Przegląd i serwis instalacji gazowej",
      ],
    },
    {
      label: "Pompy ciepła",
      options: [
        "Montaż pompy ciepła",
        "Pierwsze uruchomienie pompy ciepła",
        "Serwis pompy ciepła",
      ],
    },
    {
      label: "Inne",
      options: [
        "Klimatyzacja lub wentylacja",
        "Automatyka Smart Home",
        "Naprawa awaryjna",
      ],
    },
  ],
};
