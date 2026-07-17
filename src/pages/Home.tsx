import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Cpu, Wrench } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import { smooth } from "@/lib/motion";

const stats = [
  { value: "650+", label: "Training Hours" },
  { value: "20+", label: "Embedded Projects" },
  { value: "5★", label: "HackerRank C" },
  { value: "200+", label: "Students Trained" },
];

const currently = [
  {
    icon: Terminal,
    title: "System Programming under Linux",
    detail: "6-month track at STMicroelectronics — syscalls, custom shells, minimal distro on QEMU",
  },
  {
    icon: Cpu,
    title: "Advanced Embedded Systems Diploma",
    detail: "STM32 & ARM Cortex-M with a senior Valeo engineer — RTOS, bootloaders & AUTOSAR next",
  },
  {
    icon: Wrench,
    title: "Embedded Linux",
    detail: "Build systems, toolchains, Yocto, and kernel fundamentals",
  },
];

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />

      {/* Stats strip */}
      <section className="py-14 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={smooth(index * 0.08)}
              >
                <div className="text-3xl md:text-4xl font-bold font-mono text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={smooth()}
            >
              <span className="text-primary font-mono text-sm">&lt;about&gt;</span>
              <h2 className="text-3xl md:text-4xl font-bold font-mono mt-2 mb-6">
                Who <span className="text-gradient">I Am</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an Electronics & Communication Engineering student at Al-Azhar
                  University (class of 2026) who fell in love with what happens below
                  the operating system. I write firmware in C/C++, build device drivers
                  from the datasheet up, and care about deterministic, real-time code.
                </p>
                <p>
                  My focus is automotive-grade embedded software: RTOS-based
                  architectures, communication protocols (CAN, LIN, UART, SPI, I2C),
                  and the AUTOSAR layered architecture. I led an 8-member team building
                  a V2X collision-avoidance vehicle as my graduation project.
                </p>
                <p>
                  When I'm not shipping firmware, I teach — I've trained 200+ students
                  in C and embedded systems through AZEX and Google Developer Student
                  Club at my university.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={smooth(0.1)}
            >
              <p className="text-xs font-mono text-muted-foreground mb-4">// what I'm up to now</p>
              <div className="space-y-4">
                {currently.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4 p-5 rounded-xl border-glow bg-card/50 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={smooth(0.15 + index * 0.08)}
                    >
                      <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-mono text-sm text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured graduation project teaser */}
      <section className="py-24 circuit-pattern">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smooth()}
          >
            <span className="text-primary font-mono text-sm">&lt;featured&gt;</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mt-2 mb-4">
              Spotlight <span className="text-gradient">Project</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FeaturedProject variant="teaser" />
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={smooth(0.1)}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-mono group"
            >
              Browse All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center p-10 rounded-2xl border-glow bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smooth()}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
              Let's Build Something <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Open to embedded software opportunities, collaborations, and interesting
              conversations about firmware, RTOS, and automotive systems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 group"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
