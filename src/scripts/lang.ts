/** Remember the visitor's language choice and honour it once per session on the home page. */
const KEY = "qsai.lang";
export function rememberLang(l: "en" | "ar") { try { localStorage.setItem(KEY, l); } catch {} }
export function applySavedLang(current: "en" | "ar", path: string) {
  try {
    if (sessionStorage.getItem("qsai.lang.applied")) return;
    const saved = localStorage.getItem(KEY) as "en" | "ar" | null;
    if (!saved || saved === current) return;
    if (path !== "/" && path !== "/ar/") return;
    sessionStorage.setItem("qsai.lang.applied", "1");
    location.replace(saved === "ar" ? "/ar/" : "/");
  } catch {}
}
