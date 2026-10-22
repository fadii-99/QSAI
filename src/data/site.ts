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
  contactPlaceholder: false,
  /** Contact details from the product presentation (Muhammad Saifullah, CEO, Verslox). */
  contact: {
    email: "muhammadsaifullah.prof@gmail.com",
    phone: "+92 310 1588772",
    phoneHref: "tel:+923101588772",
    whatsapp: "https://wa.me/923101588772",
    city: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    hours: { en: "Sunday – Thursday, 9:00 – 18:00 (AST)", ar: "الأحد – الخميس، 9:00 – 18:00 (توقيت السعودية)" },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/qsai-copilot", // TODO
    x: "https://x.com/qsaicopilot", // TODO
  },
  /** The product presentation (pitch deck) offered for online viewing and download. */
  presentation: {
    pdf: "/downloads/QS-AI-Copilot-Verslox.pdf",
    cover: "/downloads/QS-AI-Copilot-Verslox-cover.webp",
    fileName: "QS AI Copilot - Verslox.pdf",
    size: "3.2 MB",
    pages: 11,
  },
  legal: {
    company: { en: "Verslox", ar: "فيرسلوكس" },
    year: 2026,
  },
} as const;
