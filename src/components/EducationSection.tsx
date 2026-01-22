import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = {
  degree: "Electronics and Communication Engineering",
  university: "Al-Azhar University",
  location: "Cairo, Egypt",
  period: "Oct 2021 – Jul 2026",
  expected: "Expected Graduation: Jul 2026",
  core: ["Embedded Systems", "Electrical Power Engineering", "Software Development", "Control System"]
};

const certifications = [
  {
    title: "Embedded System Diploma",
    period: "Sep 2023 – Mar 2024",
    instructors: "Eng. Mohamed Zaghloul, Eng. Mahmoud Karem, Eng. Ahmed Abdel Ghafar, NTI",
    topics: [
      "Advanced C programming, Data Structures, and Algorithms",
      "Device drivers for ATmega family (DIO, ADC, UART, I2C, SPI, PWM)",
      "RTOS concepts based on AVR microcontrollers",
      "AUTOSAR layered architecture fundamentals"
    ]
  },
  {
    title: "Advanced Embedded Systems Diploma",
    period: "Jul 2024 – Present",
    instructors: "Eng. Amgad Samir – Senior Embedded Software Engineer at Valeo",
    hours: "268 Hours",
    topics: [
      "STM32 architecture, ARM Cortex-M fundamentals",
      "Drivers development (RCC, GPIO, UART, SPI, I2C, DMA, ADC, Timers)",
      "Debugging, interrupts, low-power modes, CAN/LIN communication",
      "Upcoming: Advanced RTOS, Bootloader development, AUTOSAR"
    ]
  },
  {
    title: "Embedded Systems ARM Track",
    period: "Jul 2025 – Aug 2025",
    instructors: "Information Technology Institute (ITI), Egypt",
    hours: "150 Hours",
    topics: [
      "ARM Architecture, Peripherals, Interrupts",
      "Real-Time Concepts, Acoustic Signal Generation",
      "Communications, IoT, Bootloader",
      "Graduation Project"
    ]
  },
  {
    title: "Embedded Linux",
    period: "Jul 2025 – Present",
    topics: [
      "Linux boot process, system services management (systemd)",
      "File permissions, access control, filesystem hierarchy",
      "Package management, shell scripting, system monitoring",
      "Networking configuration, firewalls, security hardening"
    ]
  },
  {
    title: "System Programming under Linux",
    period: "Jul 2025 – Present",
    instructors: "STMicroelectronics",
    topics: [
      "Building Linux utilities from scratch (cp, mv, pwd, ls, echo)",
      "Implementing custom shells (femto, pico, nano, micro)",
      "Process management and minimal Linux distribution",
      "Socket programming, Yocto build system, Multithreading"
    ]
  }
];

const EducationSection = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-sm">&lt;education&gt;</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mt-2 mb-4">
            <span className="whitespace-nowrap">Education & <span className="text-gradient">Training</span></span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-mono">Academic Background</h3>
            </div>

            <div className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-foreground mb-2">{education.degree}</h4>
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
                    <span key={area} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* HackerRank Achievement */}
            <motion.div
              className="mt-6 p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-accent" />
                <h4 className="text-lg font-semibold">Problem Solving Achievement</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Earned 5-star rating in C programming on HackerRank
              </p>
              <a
                href="https://www.hackerrank.com/abdallahShehawey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-mono hover:underline"
              >
                → View Profile
              </a>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono whitespace-nowrap">Certifications & Training</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="p-5 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    {cert.hours && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {cert.hours}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary font-mono mb-1">{cert.period}</p>
                  {cert.instructors && (
                    <p className="text-xs text-muted-foreground mb-3">{cert.instructors}</p>
                  )}
                  <ul className="space-y-1">
                    {cert.topics.slice(0, 2).map((topic, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
