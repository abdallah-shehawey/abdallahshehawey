import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";
import { navItems } from "@/data/nav";

/* Tab-style navigation: the active pill slides between tabs via a shared
   framer-motion layoutId, so switching pages feels like moving one element. */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold font-mono text-gradient">
            &lt;AS/&gt;
          </Link>

          {/* Desktop tabs — internal pages only; external links (blog) live in
              the hero + footer, not the nav. */}
          <div className="hidden md:flex items-center gap-1">
            {navItems
              .filter((item) => !item.external)
              .map((item) => {
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    aria-current={isActive ? "page" : undefined}
                    className="relative px-4 py-1.5 text-sm font-mono transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-tab"
                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30"
                        transition={{ duration: 0.4, ease: easeOutExpo }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            <div className="container mx-auto px-6 py-4 space-y-1">
              {navItems
                .filter((item) => !item.external)
                .map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2.5 px-3 rounded-lg font-mono transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
