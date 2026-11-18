import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import { easeOutExpo, smooth } from "@/lib/motion";
import { projects, projectGroups, type ProjectGroup } from "@/data/projects";

type Filter = ProjectGroup | "All";

/* Filter tabs mirror the page sections, each with its project count. */
const filterTabs: { value: Filter; label: string; count: number }[] = [
  { value: "All", label: "All", count: projects.length },
  ...projectGroups.map(({ value, short }) => ({
    value,
    label: short,
    count: projects.filter((project) => project.group === value).length,
  })),
];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");

  /* Data is already ordered inside each group; sections follow projectGroups. */
  const sections = projectGroups
    .filter(({ value }) => filter === "All" || filter === value)
    .map(({ value, label }) => ({
      group: value,
      label,
      items: projects.filter((project) => project.group === value),
    }));

  return (
    <PageTransition>
      <section className="py-20 circuit-pattern">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
          <PageHeader
            tag="projects"
            title={
              <>
                My <span className="text-gradient">Projects</span>
              </>
            }
            subtitle="From bare-metal drivers to a full V2X system — most of it open source. Cards with a GitHub badge open the repository."
          />

          {/* Graduation project spotlight */}
          <div className="mb-16">
            <FeaturedProject />
          </div>

          {/* Section filter — a segmented control whose active pill slides
              between tabs (shared layoutId). */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smooth(0.1)}
          >
            <div
              role="tablist"
              aria-label="Filter projects"
              className="inline-flex flex-wrap justify-center gap-1 p-1 rounded-2xl sm:rounded-full border border-border bg-card/60"
            >
              {filterTabs.map((tab) => {
                const isActive = filter === tab.value;
                return (
                  <button
                    key={tab.value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setFilter(tab.value)}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/40"
                        transition={{ duration: 0.35, ease: easeOutExpo }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`relative z-10 min-w-[1.5rem] px-1.5 py-0.5 text-[11px] leading-none rounded-full tabular-nums transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* One section per group (Embedded → Linux → Web & Apps), each behind
              a divider; a filter tab shows just its section. Grids carry no
              layout animation of their own: animating their height scaled
              every card with them. */}
          <div className="space-y-12">
            <AnimatePresence initial={false} mode="popLayout">
              {sections.map(({ group, label, items }) => (
                <motion.section
                  key={group}
                  layout="position"
                  aria-label={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-mono text-sm md:text-base text-primary whitespace-nowrap">
                      <span className="text-muted-foreground">// </span>
                      {label}
                    </h2>
                    <span className="px-2 py-0.5 text-xs font-mono rounded-full border border-primary/30 text-primary">
                      {items.length}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                  </div>

                  <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {items.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </motion.section>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={smooth()}
          >
            <a
              href="https://github.com/abdallah-shehawey?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-mono"
            >
              <Github className="w-5 h-5" />
              View All Repositories on GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
