import type { Transition } from "framer-motion";

/* The entrance curve linkora uses everywhere — fast start, silky settle. */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* Shared entrance transition so every section animates identically. */
export const smooth = (delay = 0): Transition => ({
  duration: 0.7,
  ease: easeOutExpo,
  delay,
});

/* Card hover lift for motion.div elements; framer owns their inline transform,
   so a CSS hover:-translate-y would be overridden. */
export const hoverLift = {
  y: -4,
  transition: { duration: 0.25, ease: easeOutExpo },
};
