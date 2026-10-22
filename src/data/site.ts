/**
 * Site-wide settings. Everything a visitor can see that is company-specific lives here,
 * so it can be changed without touching any page.
 *
 * TODO before launch: replace every placeholder value.
 */
export const site = {
  name: "QSAI Copilot",
  wordmark: { a: "QSAI", b: "Copilot" },
  tagline: "BOQ · BBS · Takeoffs",
  /** Public URL of the live application (the token-gated chat app). */
  appUrl: "https://app.qsai.example", // TODO: real app URL
  /** Canonical origin of this website, used for meta tags. */
  origin: "https://www.qsai.example", // TODO: real domain
  /** Set to false once the real email, phone and WhatsApp numbers below are filled in; until then the
   *  site shows them as unlinked "to be confirmed" values instead of dead links. */
  contactPlaceholder: true,
  contact: {
    email: "hello@qsai.example", // TODO
    phone: "+966 5X XXX XXXX", // TODO
    phoneHref: "tel:+9665XXXXXXXX", // TODO
    whatsapp: "https://wa.me/9665XXXXXXXX", // TODO
    city: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    hours: { en: "Sunday – Thursday, 9:00 – 18:00 (AST)", ar: "الأحد – الخميس، 9:00 – 18:00 (توقيت السعودية)" },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/qsai-copilot", // TODO
    x: "https://x.com/qsaicopilot", // TODO
  },
  legal: {
    company: { en: "QSAI Copilot", ar: "كيو إس إيه آي كوبايلوت" },
    year: 2026,
  },
} as const;
