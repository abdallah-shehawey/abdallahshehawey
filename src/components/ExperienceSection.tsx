import { motion } from "framer-motion";
import { Users, BookOpen, Award } from "lucide-react";

const experiences = [
  {
    title: "Vice Head of Embedded System",
    organization: "AZhar EXHIBITION (AZEX)",
    location: "Al-Azhar University, Cairo",
    period: "Oct 2024 – May 2025",
    icon: Users,
    highlights: [
      "Supervised a team of 10+ engineers, enhancing technical capabilities by 20%",
      "Delivered advanced training on RTOS concepts and microcontroller programming",
      "Designed and implemented training modules for real-time applications"
    ]
  },
  {
    title: "Core Team of Embedded System",
    organization: "Google Developer Student Club (GDSC)",
    location: "Al-Azhar University, Cairo",
    period: "Apr 2024 – Sep 2024",
    icon: Award,
    highlights: [
      "Led hands-on workshops on embedded systems development",
      "Delivered advanced training on RTOS and microcontroller programming",
      "Organized coding competitions fostering collaboration and learning"
    ]
  },
  {
    title: "Instructor & Technical Support",
    organization: "AZhar EXHIBITION (AZEX)",
    location: "Al-Azhar University, Cairo",
    period: "Mar 2024 – Sep 2024",
    icon: BookOpen,
    highlights: [
      "Delivered lectures on C programming with 95% comprehension rate",
      "Coordinated technical workshops for over 200 students",
      "Provided technical support and mentorship to junior members"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 relative circuit-pattern" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-sm">&lt;experience&gt;</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mt-2 mb-4">
            <span className="whitespace-nowrap">Volunteering <span className="text-gradient">Experience</span></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and community contributions in embedded systems education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  className="relative mb-8 md:pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold font-mono text-foreground">
                          {exp.title}
                        </h3>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
