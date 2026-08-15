import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Github, GraduationCap, Radio, Cpu, Camera, MonitorSmartphone } from "lucide-react";
import { smooth } from "@/lib/motion";
import { featuredProject } from "@/data/projects";

/* The V2X system chain, rendered as monospace "hardware nodes" — a pure-CSS
   nod to the real architecture (STM32 → ESP32 → Raspberry Pi → dashboard). */
const systemChain = [
  { icon: Cpu, name: "STM32F446RE", detail: "FreeRTOS safety core · 5 ADAS modules · 50 ms cycle" },
  { icon: Radio, name: "2× ESP32-S3", detail: "ESP-NOW V2V radio bridge between vehicles" },
  { icon: Camera, name: "Raspberry Pi", detail: "IPC hub · MQTT V2N · ONNX pedestrian AI" },
  { icon: MonitorSmartphone, name: "Driver Interface", detail: "Live telemetry dashboard + phone remote control" },
];

interface FeaturedProjectProps {
  variant?: "full" | "teaser";
}

const FeaturedProject = ({ variant = "full" }: FeaturedProjectProps) => {
  const isTeaser = variant === "teaser";

  return (
    <motion.article
      className="relative rounded-2xl border-glow bg-card/60 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={smooth()}
    >
      {/* Soft aurora inside the card */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative p-6 md:p-10">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono">
            <GraduationCap className="w-4 h-4" />
            Graduation Project
          </span>
          <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-mono">
            {featuredProject.period}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono">
            <Award className="w-4 h-4" />
            {featuredProject.grade}
          </span>
        </div>

        <div className={`grid gap-8 ${isTeaser ? "" : "lg:grid-cols-[1.2fr_1fr]"}`}>
          {/* Overview */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-mono mb-2">
              <span className="text-gradient">{featuredProject.title}</span>
            </h3>
            <p className="text-primary font-mono text-sm mb-1">{featuredProject.role}</p>
            <p className="text-muted-foreground text-sm mb-5">{featuredProject.institution}</p>

            <p className="text-muted-foreground mb-6">{featuredProject.description}</p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 mb-6">
              {featuredProject.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 rounded-lg bg-secondary/70 border border-border text-center"
                >
                  <div className="text-lg font-bold font-mono text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {!isTeaser && (
              <ul className="space-y-2 mb-6">
                {featuredProject.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mb-8">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              {isTeaser && (
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 hover:-translate-y-0.5 transition-[transform,background-color] duration-200 group"
                >
                  Full Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>

          {/* Architecture chain (full variant only) */}
          {!isTeaser && (
            <div className="hidden lg:flex flex-col justify-center">
              <p className="text-xs font-mono text-muted-foreground mb-4">// system architecture</p>
              <div className="space-y-0">
                {systemChain.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.name}>
                      <motion.div
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={smooth(0.1 + i * 0.1)}
                      >
                        <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-mono font-semibold text-sm text-foreground">{node.name}</div>
                          <div className="text-xs text-muted-foreground">{node.detail}</div>
                        </div>
                      </motion.div>
                      {i < systemChain.length - 1 && (
                        <div className="flex justify-center py-1" aria-hidden="true">
                          <div className="w-0.5 h-4 bg-gradient-to-b from-primary/50 to-primary/10" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
