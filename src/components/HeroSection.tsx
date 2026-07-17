import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* All animation here is pure CSS (compositor-only transform/opacity), so the
   main thread stays free — same approach as linkora's aurora background.
   prefers-reduced-motion is honoured globally in index.css. */
const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden circuit-pattern py-16">
      {/* Aurora background blobs, phase-shifted with negative delays */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-aurora absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl will-change-transform" />
        <div
          className="animate-aurora absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl will-change-transform"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-aurora hidden md:block absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl will-change-transform"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up inline-block mb-4" style={{ animationDelay: "0.05s" }}>
              <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono bg-primary/5">
                &lt;Embedded Software Engineer /&gt;
              </span>
            </div>

            <h1
              className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="text-foreground">Abdallah </span>
              <span className="text-gradient">Shehawey</span>
            </h1>

            <p
              className="animate-fade-up text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              style={{ animationDelay: "0.25s" }}
            >
              Embedded Software Engineer specializing in C/C++, RTOS, and hardware-software
              integration — from bare-metal drivers written from scratch to a full
              V2X collision-avoidance system leading an 8-member graduation team.
            </p>

            {/* Contact Info */}
            <div
              className="animate-fade-up flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="mailto:shehawey9@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>shehawey9@gmail.com</span>
              </a>
              <a
                href="tel:+201501899476"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>+20 150 189 9476</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>El Mahalla, Egypt</span>
              </div>
            </div>

            {/* Primary actions + social links */}
            <div
              className="animate-fade-up flex flex-wrap items-center gap-4 justify-center lg:justify-start"
              style={{ animationDelay: "0.45s" }}
            >
              <Link
                to="/projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-[transform,background-color,box-shadow] duration-200 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/Abdallah_Shehawey_CV.pdf"
                download="Abdallah_Shehawey_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 hover:-translate-y-0.5 active:translate-y-0 transition-[transform,background-color] duration-200"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="https://github.com/abdallah-shehawey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 rounded-lg border-glow bg-card hover:bg-primary/10 hover:-translate-y-0.5 transition-[transform,background-color] duration-200 group"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/abdallah-shehawey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 rounded-lg border-glow bg-card hover:bg-primary/10 hover:-translate-y-0.5 transition-[transform,background-color] duration-200 group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Animated Circuit/Chip Illustration */}
          <div className="animate-scale-in flex-1 flex justify-center" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Main chip, gently floating like linkora's phone mockup */}
              <div className="animate-float absolute inset-8 rounded-2xl border-2 border-primary/50 bg-card/80 backdrop-blur-sm glow-primary will-change-transform">
                <div className="absolute inset-4 rounded-xl border border-primary/30 flex flex-col items-center justify-center overflow-hidden">
                  <img
                    src="/STM.webp"
                    alt="Abdallah Shehawey"
                    className="w-full h-full object-cover rounded-lg"
                    loading="eager"
                    width="320"
                    height="320"
                  />
                </div>
              </div>

              {/* Circuit lines - hidden on mobile for better performance */}
              <div className="hidden md:block" aria-hidden="true">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse-glow absolute w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                    style={{
                      top: `${20 + i * 10}%`,
                      left: 0,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`right-${i}`}
                    className="animate-pulse-glow absolute w-8 h-0.5 bg-gradient-to-l from-primary/50 to-transparent"
                    style={{
                      top: `${20 + i * 10}%`,
                      right: 0,
                      animationDelay: `${i * 0.3 + 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div
        className="animate-fade-in hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="animate-pulse-glow w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
