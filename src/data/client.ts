/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-18T22:21:09.534Z
 * Kundennummer: 217
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Reifen & Service Nord",
  branche: "Kfz-Werkstatt",
  ort: "Bremen",
  slogan: "professionell & zuverlässig",
  adresse: "",
  maps_url: null,
  telefon: "+49 421 5550303",
  email: "info@werkstatt-3-demo.de",
  website: "https://werkstatt-3.demo-reseller.kuwezu.de",
  logo: null,
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#1e40af",
    secondary: "#64748b",
    accent: "#f59e0b",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/217/stock-rno300.jpg",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Kfz-Werkstatt — professionell & zuverlässig",
    ueberschriftHighlight: "professionell & zuverlässig",
    untertext: "Ihr Partner für alle Belange rund um Kfz-Werkstatt in Bremen und Umgebung.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/217/stock-1hze1d8.jpg",
    ueberschrift: "Reifen & Service Nord — Ihr Partner in Bremen",
    text1: "Als erfahrener Kfz-Werkstatt-Betrieb in Bremen bieten wir unseren Kunden seit Jahren zuverlässigen Service und kompetente Beratung. Mit Fachkompetenz und modernen Methoden lösen wir Ihre Anliegen effizient und zuverlässig.",
    text2: "Wir setzen auf höchste Qualität, transparente Preise und persönlichen Service — damit Sie rundum zufrieden sind.",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [

  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  // Kundenpflegbar (Stammdaten) bzw. künftig autoservice.jobs-Feed — keine
  // erfundenen Platzhalter-Stellen mehr. jobs: [] → Template blendet
  // "Offene Stellen" aus; enabled: false → ganze Section entfällt.
  karriere: {
    enabled: true as boolean,
    jobs: [

    ] as { title: string; type: string; experience: string }[],
    benefits: null as { title: string; text: string }[] | null,
    // null = In-Page-Anker #kontakt; http(s)-URL öffnet im neuen Tab
    buttonUrl: null as string | null,
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: false as boolean,
  // Wiederkehrende TÜV-/HU-Termine — leer/null: kein Infoblock auf der Seite
  tuev_slots: null as { day: string; from: string; to: string }[] | null,
  tuev_hinweis: null as string | null,
  oeffnungszeiten: {
    mo_fr: "" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Nach Vereinbarung"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,

  // ── Impressum / Rechtsangaben (Migration 095) ───────────────────────────────
  impressum: {} as {
    inhaber?: string; rechtsform?: string; ust_id?: string; handelsregister?: string;
    registergericht?: string; aufsichtsbehoerde?: string; verantwortlicher?: string;
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
