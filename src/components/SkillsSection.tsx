import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Wifi, Settings, Layers } from "lucide-react";

const skills = {
  "Programming Languages": {
    icon: Code,
    items: ["C", "C++", "Embedded C", "Python", "Assembly", "Verilog"]
  },
  "Embedded Systems": {
    icon: Cpu,
    items: ["RTOS", "Microcontroller Interfacing", "Device Drivers", "ARM Cortex-M", "AVR", "PIC", "ESP32", "Raspberry Pi"]
  },
  "Communication Protocols": {
    icon: Wifi,
    items: ["UART", "SPI", "I2C", "CAN Protocol", "LIN Protocol", "Ethernet"]
  },
  "Development Tools": {
    icon: Terminal,
    items: ["STM32 CubeIDE", "VS Code", "Eclipse", "Keil µVision", "Proteus", "Git & GitHub"]
  },
  "Embedded Linux": {
    icon: Layers,
    items: ["Linux Administration", "SPL", "System Programming", "Shell Scripting", "Yocto"]
  },
  "Additional": {
    icon: Settings,
    items: ["MATLAB", "JTAG Debugging", "Logic Analyzers", "Oscilloscopes", "AUTOSAR"]
  }
};

const softSkills = ["Problem Solving", "Team Collaboration", "Leadership", "Adaptability", "Structured Thinking"];

const SkillsSection = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-sm">&lt;skills&gt;</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mt-2 mb-4">
            <span className="whitespace-nowrap">Technical <span className="text-gradient">Expertise</span></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive knowledge in embedded systems development, from low-level programming to system architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
            <motion.div
              key={category}
              className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold font-mono text-foreground">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold font-mono mb-4 text-muted-foreground">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-5 py-2 rounded-full border border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
