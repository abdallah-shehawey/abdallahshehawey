import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { easeOutExpo, hoverLift } from "@/lib/motion";
import type { Project } from "@/data/projects";

/* Cards with a repo are one big link (click anywhere opens GitHub).
   Cards with sibling repos (variants) keep the root as a div so the
   per-variant links stay valid HTML — no nested anchors. */
const cardMotion = {
  layout: true,
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.35, ease: easeOutExpo },
  whileHover: hoverLift,
} as const;

const cardClass =
  "group relative flex flex-col p-5 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300";

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;

  const body = (
    <>
      <div className="flex items-start gap-3 mb-3 pr-8">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold font-mono text-foreground text-sm leading-tight">
          {project.title}
        </h3>
      </div>

      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.variants && (
        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-border">
          <Github className="w-3.5 h-3.5 text-primary" />
          {project.variants.map((variant) => (
            <a
              key={variant.label}
              href={variant.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 text-xs font-mono rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              {variant.label}
            </a>
          ))}
        </div>
      )}

      {/* Repo indicator */}
      {project.github && !project.variants && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-primary">
          <Github className="w-4 h-4" />
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-[opacity,transform] duration-200" />
        </div>
      )}
    </>
  );

  if (project.github && !project.variants) {
    return (
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — open GitHub repository`}
        className={`${cardClass} cursor-pointer`}
        {...cardMotion}
      >
        {body}
      </motion.a>
    );
  }

  return (
    <motion.div className={cardClass} {...cardMotion}>
      {body}
    </motion.div>
  );
};

export default ProjectCard;
