import { useEffect } from "react";

/**
 * useReveal — adds the `.visible` class to all elements matching
 * `selector` inside `scopeRef` when they enter the viewport.
 *
 * Usage:
 *   const ref = useRef(null);
 *   useReveal(ref, ".reveal, .timeline-item, .facility-card, .whychoose-card");
 */
export default function useReveal(scopeRef, selector = ".reveal, .reveal-left, .reveal-right") {
  useEffect(() => {
    const scope = scopeRef?.current ?? document;
    const els = scope.querySelectorAll(selector);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scopeRef, selector]);
}