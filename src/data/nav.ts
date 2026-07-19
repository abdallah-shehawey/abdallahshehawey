export type NavItem = {
  label: string;
  to: string;
  /** External destinations (e.g. the blog) route out in a new tab instead of
      through react-router. */
  external?: boolean;
};

/** My Linux blog — cross-linked from the navbar, footer and home page. */
export const BLOG_URL = "https://shehaweyblog.vercel.app/";

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: BLOG_URL, external: true },
];
