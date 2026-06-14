"use client";
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counted = new WeakSet<Element>();
    const countUp = (el: Element) => {
      if (counted.has(el)) return;
      counted.add(el);
      const target = Number((el as HTMLElement).dataset.count || "0");
      const dur = 1100;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (prefersReduced) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => (el.textContent = el.dataset.count || ""));
    } else {
      const io = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              en.target.querySelectorAll?.("[data-count]").forEach(countUp);
              if ((en.target as HTMLElement).matches("[data-count]")) countUp(en.target);
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
      document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));
    }

    const header = document.getElementById("siteHeader");
    const onScroll = () => header?.classList.toggle("shadow-[0_0_30px_rgba(255,45,149,.18)]", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
