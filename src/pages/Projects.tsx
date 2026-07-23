import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import { easeOutExpo, smooth } from "@/lib/motion";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  /* Data is already ordered: repos first, no-repo projects last. */
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

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

          {/* Category filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smooth(0.1)}
          >
            {projectCategories.map((category) => {
              const isActive = filter === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className="relative px-4 py-1.5 rounded-full text-sm font-mono transition-colors"
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
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {category.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Grid — repos first, then the rest */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

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
