import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Download,
  GraduationCap,
  Languages,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { easeOutExpo, smooth, hoverLift } from "@/lib/motion";
import { education, languages, certifications, experiences } from "@/data/resume";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: BookOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
] as const;

type TabId = (typeof tabs)[number]["id"];

const panelMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: easeOutExpo },
} as const;

const EducationPanel = () => (
  <motion.div className="grid lg:grid-cols-2 gap-6" {...panelMotion}>
    {/* Degree */}
    <div className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-xl bg-primary/10">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold font-mono">Academic Background</h3>
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">{education.degree}</h4>
      <p className="text-primary font-mono mb-1">{education.university}</p>
      <p className="text-muted-foreground text-sm mb-1">{education.location}</p>
      <p className="text-muted-foreground text-sm mb-4">{education.period}</p>
      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm mb-4">
        {education.expected}
      </span>
      <div className="border-t border-border pt-4">
        <p className="text-sm text-muted-foreground mb-2">Core Areas:</p>
        <div className="flex flex-wrap gap-2">
          {education.core.map((area) => (
            <span
              key={area}
              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="space-y-6">
      {/* HackerRank */}
      <div className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <Award className="w-6 h-6 text-accent" />
          <h4 className="text-lg font-semibold font-mono">Problem Solving</h4>
        </div>
        <p className="text-muted-foreground text-sm mb-3">
          Earned 5-star rating in C programming on HackerRank — strong algorithms,
          data structures, and code-optimization skills.
        </p>
        <a
          href="https://www.hackerrank.com/abdallahShehawey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm font-mono hover:underline"
        >
          → View Profile
        </a>
      </div>

      {/* Languages */}
      <div className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <Languages className="w-6 h-6 text-primary" />
          <h4 className="text-lg font-semibold font-mono">Languages</h4>
        </div>
        <div className="space-y-3">
          {languages.map((language) => (
            <div key={language.name} className="flex items-center justify-between">
              <span className="text-foreground">{language.name}</span>
              <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {language.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const CertificationsPanel = () => (
  <motion.div className="grid md:grid-cols-2 gap-5" {...panelMotion}>
    {certifications.map((cert) => (
      <motion.div
        key={cert.title}
        className="p-5 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300"
        whileHover={hoverLift}
      >
        <div className="flex items-start justify-between mb-2 gap-3">
          <h4 className="font-semibold text-foreground">{cert.title}</h4>
          {cert.hours && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap flex-shrink-0">
              {cert.hours}
            </span>
          )}
        </div>
        <p className="text-sm text-primary font-mono mb-1">{cert.period}</p>
        {cert.instructors && (
          <p className="text-xs text-muted-foreground mb-3">{cert.instructors}</p>
        )}
        <ul className="space-y-1">
          {cert.topics.map((topic, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              {topic}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>
);

const ExperiencePanel = () => (
  <motion.div className="max-w-4xl mx-auto" {...panelMotion}>
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

      {experiences.map((exp) => {
        const Icon = exp.icon;
        return (
          <div key={exp.title} className="relative mb-8 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:-translate-y-1 transition-[transform,background-color] duration-300">
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold font-mono text-foreground">{exp.title}</h3>
                  <p className="text-primary">{exp.organization}</p>
                  <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState<TabId>("education");

  return (
    <PageTransition>
      <section className="py-20 circuit-pattern">
        <div className="container mx-auto px-6">
          <PageHeader
            tag="resume"
            title={
              <>
                My <span className="text-gradient">Journey</span>
              </>
            }
            subtitle="Education, professional training, and community leadership in embedded systems"
          />

          {/* Download CV */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={smooth(0.1)}
          >
            <a
              href="/Abdallah_Shehawey_CV.pdf"
              download="Abdallah_Shehawey_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200"
            >
              <Download className="w-5 h-5" />
              Download Full CV
            </a>
          </motion.div>

          {/* Sub-tabs */}
          <motion.div
            className="flex justify-center gap-2 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smooth(0.15)}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="resume-tab"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/40"
                      transition={{ duration: 0.35, ease: easeOutExpo }}
                    />
                  )}
                  <Icon
                    className={`relative z-10 w-4 h-4 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Panels */}
          <AnimatePresence mode="wait">
            {activeTab === "education" && <EducationPanel key="education" />}
            {activeTab === "certifications" && <CertificationsPanel key="certifications" />}
            {activeTab === "experience" && <ExperiencePanel key="experience" />}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
