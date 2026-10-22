/**
 * One clock for the whole site.
 *  - `Timeline` wraps the Web Animations API so a sequence can be played, paused, scrubbed
 *    and driven by scroll from one place (hero bar, workflow stations, comparison).
 *  - `mountReveals` is the single entrance style, triggered once per element.
 */
export const reducedMotion = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

export interface Step {
  el: Element;
  keyframes: Keyframe[] | PropertyIndexedKeyframes;
  at: number; // ms
  dur: number; // ms
  easing?: string;
}

export class Timeline {
  private anims: Animation[] = [];
  private steps: Step[] = [];
  duration = 0;
  private finishCbs: Array<() => void> = [];

  add(el: Element | null, keyframes: Step["keyframes"], at: number, dur: number, easing = "cubic-bezier(0.16,1,0.3,1)") {
    if (!el) return this;
    this.steps.push({ el, keyframes, at, dur, easing });
    this.duration = Math.max(this.duration, at + dur);
    return this;
  }

  /** Create paused animations with fill:both so any time can be shown. */
  build() {
    this.anims.forEach((a) => a.cancel());
    this.anims = this.steps.map((s) => {
      const a = s.el.animate(s.keyframes, { duration: s.dur, delay: s.at, easing: s.easing, fill: "both" });
      a.pause();
      return a;
    });
    const last = this.anims.reduce((m, a) => (((a.effect as KeyframeEffect)?.getComputedTiming().endTime as number) > ((m?.effect as KeyframeEffect)?.getComputedTiming().endTime as number) ? a : m), this.anims[0]);
    last?.addEventListener("finish", () => this.finishCbs.forEach((cb) => cb()));
    return this;
  }

  play() { this.anims.forEach((a) => a.play()); }
  pause() { this.anims.forEach((a) => a.pause()); }
  seek(ms: number) { const t = Math.max(0, Math.min(this.duration, ms)); this.anims.forEach((a) => { a.currentTime = t; }); }
  seekProgress(p: number) { this.seek(p * this.duration); }
  restart() { this.seek(0); this.play(); }
  get currentTime() { return (this.anims[0]?.currentTime as number) ?? 0; }
  get playing() { return this.anims.some((a) => a.playState === "running"); }
  onFinish(cb: () => void) { this.finishCbs.push(cb); }
}

/** Single entrance style for every [data-reveal]. */
export function mountReveals(root: ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!("IntersectionObserver" in window) || reducedMotion()) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach((e) => io.observe(e));
}

/** Calls `cb(progress 0..1)` as `el` travels through the viewport. */
export function onScrollProgress(el: Element, cb: (p: number) => void) {
  let ticking = false;
  const compute = () => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = (vh - r.top) / (vh + r.height);
    cb(Math.max(0, Math.min(1, p)));
    ticking = false;
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(compute); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  compute();
  return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
}

/** Run `cb(visible)` when `el` enters/leaves the viewport. */
export function onVisible(el: Element, cb: (v: boolean) => void, threshold = 0.35) {
  const io = new IntersectionObserver((es) => es.forEach((e) => cb(e.isIntersecting)), { threshold });
  io.observe(el);
  return () => io.disconnect();
}
