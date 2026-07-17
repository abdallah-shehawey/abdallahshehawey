import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "@/data/nav";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold font-mono text-gradient">&lt;AS/&gt;</span>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Abdallah Shehawey. All rights reserved.
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mt-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              <span>for Embedded Systems</span>
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abdallah-shehawey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/abdallah-shehawey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:shehawey9@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
