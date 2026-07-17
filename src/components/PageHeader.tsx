import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { smooth } from "@/lib/motion";

interface PageHeaderProps {
  tag: string;
  title: ReactNode;
  subtitle?: string;
}

/* Consistent page intro: <tag> label, big mono title, optional subtitle. */
const PageHeader = ({ tag, title, subtitle }: PageHeaderProps) => (
  <motion.div
    className="text-center mb-14"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={smooth()}
  >
    <span className="text-primary font-mono text-sm">&lt;{tag}&gt;</span>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mt-2 mb-4">
      {title}
    </h1>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export default PageHeader;
