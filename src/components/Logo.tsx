import { useId } from "react";
import { cn } from "@/lib/utils";

/* The "AS" mark — the letters routed as PCB traces (45° bends) ending in two
   vias. Same artwork as public/favicon.svg (source: branding/mark.svg), inlined
   so it stays crisp at any size. The tile's hairline border is left out: the
   navbar and footer already draw a ring around it.
   Gradient ids come from useId so several logos on one page (navbar + footer)
   don't share or clash over the same <defs>. */
const Logo = ({ className, title = "Abdallah Shehawey" }: { className?: string; title?: string }) => {
  const id = useId().replace(/:/g, "");
  const bg = `logo-bg-${id}`;
  const trace = `logo-trace-${id}`;

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
          <stop offset="0" stopColor="#121a23" />
          <stop offset="1" stopColor="#0a0d11" />
        </linearGradient>
        <linearGradient id={trace} gradientUnits="userSpaceOnUse" x1="8" y1="56" x2="56" y2="8">
          <stop offset="0" stopColor="#2eb873" />
          <stop offset="1" stopColor="#26d9d9" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${bg})`} />
      <g fill="none" stroke={`url(#${trace})`} strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 46.5V23.5l6-6h5l6 6v23M11 34h17" />
        <path d="M53 17.5H40l-4 4V28l4 4h9l4 4v6.5l-4 4H35" />
      </g>
      <g fill="#0c0e12" stroke={`url(#${trace})`} strokeWidth="2.6">
        <circle cx="11" cy="46.5" r="3.7" />
        <circle cx="53" cy="17.5" r="3.7" />
      </g>
    </svg>
  );
};

export default Logo;
