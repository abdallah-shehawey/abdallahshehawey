import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Home, Clock, Music, Vote, Shield, Car, Wrench, Calculator, Zap, Cloud, Battery } from "lucide-react";

const projects = [
  {
    title: "Smart Home Project",
    description: "Developed a fully integrated home automation system with IoT capabilities",
    icon: Home,
    tags: ["IoT", "Embedded C", "WiFi"]
  },
  {
    title: "RTC Watch",
    description: "Engineered a real-time clock system with precision timing using AVR",
    icon: Clock,
    tags: ["AVR", "I2C", "LCD"]
  },
  {
    title: "MP3 Player",
    description: "Built an MP3 player using ARM Cortex-M4 with smooth audio playback",
    icon: Music,
    tags: ["ARM Cortex-M4", "Audio", "SD Card"]
  },
  {
    title: "Electronic Voting Machine",
    description: "Built a secure voting platform with real-time data processing",
    icon: Vote,
    tags: ["Security", "UART", "LCD"]
  },
  {
    title: "Advanced Safe System",
    description: "Developed a secure access-controlled safe with embedded security algorithms",
    icon: Shield,
    tags: ["Security", "EEPROM", "Keypad"]
  },
  {
    title: "Traffic Light Controller",
    description: "Created a real-time traffic management system, reducing delays by 15%",
    icon: Car,
    tags: ["RTOS", "Timers", "State Machine"]
  },
  {
    title: "CAN Bus Analyzer",
    description: "Implemented a tool to monitor and debug CAN bus communication",
    icon: Cpu,
    tags: ["CAN", "Diagnostics", "STM32"]
  },
  {
    title: "Firmware Optimization",
    description: "Reduced memory usage by 25% and improved execution speed by 30%",
    icon: Zap,
    tags: ["Optimization", "Memory", "Performance"]
  },
  {
    title: "IoT Weather Station",
    description: "Built an IoT-based weather station using ESP32 and cloud services",
    icon: Cloud,
    tags: ["ESP32", "IoT", "Cloud"]
  },
  {
    title: "Battery Management System",
    description: "Designed an efficient power monitoring system for lithium-ion batteries",
    icon: Battery,
    tags: ["Power", "ADC", "Monitoring"]
  },
  {
    title: "Debugging Tool",
    description: "Designed a tool that reduced testing time by 30%",
    icon: Wrench,
    tags: ["Debugging", "Testing", "Tools"]
  },
  {
    title: "Instructions Decoder",
    description: "Developed a system to decode and execute custom instructions efficiently",
    icon: Calculator,
    tags: ["Assembly", "Architecture", "Decoder"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative circuit-pattern" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-sm">&lt;projects&gt;</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-2 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of embedded systems projects showcasing practical applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="group relative p-5 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold font-mono text-foreground text-sm leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4 text-primary" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/abdallah-shehawey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-mono"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
