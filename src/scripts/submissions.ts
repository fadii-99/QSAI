/**
 * Contact-form submissions.
 *
 * The site is front-end only, so by default inquiries are recorded in the visitor's browser
 * (localStorage) and can be exported from /inbox/. When email or an API becomes available,
 * implement a second adapter below and swap `adapter`; nothing in the forms changes.
 */
export interface Inquiry {
  ref: string;
  at: string; // ISO
  locale: "en" | "ar";
  source: "hero" | "contact";
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  projectType: string;
  message: string;
  consent: boolean;
  page: string;
}

export interface SubmissionAdapter {
  save(i: Inquiry): Promise<void>;
  list(): Promise<Inquiry[]>;
  clear(): Promise<void>;
}

const KEY = "qsai.inquiries.v1";

export const localStorageAdapter: SubmissionAdapter = {
  async save(i) {
    const all = await this.list();
    all.unshift(i);
    localStorage.setItem(KEY, JSON.stringify(all));
  },
  async list() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]") as Inquiry[]; } catch { return []; }
  },
  async clear() { localStorage.removeItem(KEY); },
};

/**
 * Example for later (not used yet):
 *
 * export const apiAdapter: SubmissionAdapter = {
 *   async save(i) {
 *     const r = await fetch("https://your-endpoint.example/inquiries", { method: "POST",
 *       headers: { "content-type": "application/json" }, body: JSON.stringify(i) });
 *     if (!r.ok) throw new Error("save failed");
 *   },
 *   list: localStorageAdapter.list, clear: localStorageAdapter.clear,
 * };
 */
export const adapter: SubmissionAdapter = localStorageAdapter;

export function makeRef(d = new Date()) {
  const ymd = d.toISOString().slice(2, 10).replace(/-/g, "");
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `QS-${ymd}-${rnd}`;
}

export async function submitInquiry(data: Omit<Inquiry, "ref" | "at" | "page">): Promise<Inquiry> {
  const inquiry: Inquiry = { ...data, ref: makeRef(), at: new Date().toISOString(), page: location.pathname };
  await adapter.save(inquiry);
  return inquiry;
}

export const listInquiries = () => adapter.list();
export const clearInquiries = () => adapter.clear();

export function toCSV(rows: Inquiry[]) {
  const cols: (keyof Inquiry)[] = ["ref", "at", "locale", "source", "name", "company", "role", "email", "phone", "city", "interest", "projectType", "message", "consent", "page"];
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\r\n");
}

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());
export const isPhone = (s: string) => /^\+?[\d\s().-]{8,20}$/.test(s.trim());
