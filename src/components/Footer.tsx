import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold font-mono text-gradient">&lt;AS/&gt;</span>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Abdallah Shehawey. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for Embedded Systems</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abdallah-shehawey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/abdallah-shehawey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:shehawey9@gmail.com"
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
