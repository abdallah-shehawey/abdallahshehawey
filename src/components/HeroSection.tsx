import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono bg-primary/5">
                &lt;Embedded Software Engineer /&gt;
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground">Abdallah</span>
              <br />
              <span className="text-gradient">Shehawey</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Highly motivated Embedded Software Engineer with extensive experience in 
              developing and optimizing embedded systems. Proficient in C/C++, RTOS, 
              and AUTOSAR architecture.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/abdallah-shehawey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border-glow bg-card hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/abdallah-shehawey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border-glow bg-card hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all duration-300">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Animated Circuit/Chip Illustration */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Main chip */}
              <motion.div
                className="absolute inset-8 rounded-2xl border-2 border-primary/50 bg-card/80 backdrop-blur-sm glow-primary"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute inset-4 rounded-xl border border-primary/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-mono font-bold text-gradient">AS</span>
                    <p className="text-xs text-muted-foreground mt-2 font-mono">v2.0.3</p>
                  </div>
                </div>
              </motion.div>

              {/* Circuit lines */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: 0,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`right-${i}`}
                  className="absolute w-8 h-0.5 bg-gradient-to-l from-primary/50 to-transparent"
                  style={{
                    top: `${20 + i * 10}%`,
                    right: 0,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.2 + 0.5, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
