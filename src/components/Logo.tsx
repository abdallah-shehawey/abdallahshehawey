import { useId } from "react";
import { cn } from "@/lib/utils";

/* The <AS/> mark — the same artwork as public/favicon.svg, inlined so it stays
   crisp at any size. Gradient ids come from useId so several logos on one
   page (navbar + footer) don't share or clash over the same <defs>. */
const Logo = ({ className, title = "Abdallah Shehawey" }: { className?: string; title?: string }) => {
  const id = useId().replace(/:/g, "");
  const bg = `logo-bg-${id}`;
  const accent = `logo-accent-${id}`;

  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id={accent} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${bg})`} />
      <g fill="none" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="10.7,24 5.7,32 10.7,40" stroke={`url(#${accent})`} />
        <line x1="48.5" y1="22" x2="44.5" y2="42" stroke={`url(#${accent})`} />
        <polyline points="53.9,24 58.9,32 53.9,40" stroke={`url(#${accent})`} />
        <path d="M16.1 42 L21.1 22 L26.1 42 M18.6 35 H23.6" stroke="#f8fafc" />
        <path
          d="M39 25.8 C38.3 23.4 36.8 22 34.9 22 C32.7 22 31.3 23.6 31.3 25.8 C31.3 28.4 33.3 29.4 35.5 30.3 C37.8 31.2 39.4 32.5 39.4 35.8 C39.4 39.3 37.4 42 34.9 42 C32.8 42 31.3 41 30.7 39"
          stroke="#f8fafc"
        />
      </g>
    </svg>
  );
};

export default Logo;
