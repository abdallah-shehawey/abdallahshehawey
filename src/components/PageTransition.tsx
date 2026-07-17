import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/lib/motion";

/* Shared enter/exit wrapper so every tab switch animates identically.
   pt-16 clears the fixed navbar; min-h keeps the footer at the bottom. */
const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.main
    id="main"
    className="min-h-dvh pt-16"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35, ease: easeOutExpo }}
  >
    {children}
  </motion.main>
);

export default PageTransition;
