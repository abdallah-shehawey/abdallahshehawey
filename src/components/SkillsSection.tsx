import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Wifi, Layers, CircuitBoard, Microchip, Bug } from "lucide-react";
import { smooth, hoverLift } from "@/lib/motion";

const skills = {
  "Programming Languages": {
    icon: Code,
    items: ["C", "Embedded C", "C++", "Python", "Assembly", "Verilog"]
  },
  "Microcontrollers & Platforms": {
    icon: Microchip,
    items: ["STM32 (ARM Cortex-M)", "AVR", "PIC", "ESP32", "Raspberry Pi"]
  },
  "Embedded Development": {
    icon: Cpu,
    items: ["Peripheral Drivers", "Interrupts", "Timers", "PWM", "ADC", "DMA", "RTOS / FreeRTOS", "AUTOSAR Fundamentals"]
  },
  "Communication Interfaces": {
    icon: Wifi,
    items: ["UART", "SPI", "I2C", "CAN", "LIN", "Ethernet"]
  },
  "PCB Design": {
    icon: CircuitBoard,
    items: ["KiCad Schematics", "PCB Layout", "Component Selection", "Routing", "ERC / DRC", "Gerber, Drill & BOM"]
  },
  "Development Tools": {
    icon: Terminal,
    items: ["STM32CubeIDE", "MPLAB X / XC8", "Atmel Studio", "Keil µVision", "Proteus", "VS Code", "MATLAB", "Git & GitHub"]
  },
  "Debugging & Testing": {
    icon: Bug,
    items: ["HW / FW Integration", "JTAG", "Logic Analyzers", "Oscilloscopes", "Unit Testing"]
  },
  "Linux & Software": {
    icon: Layers,
    items: ["Linux Administration", "Shell Scripting", "System Programming", "QEMU", "Yocto", "Buildroot", "Data Structures & Algorithms"]
  }
};

const softSkills = ["Problem Solving", "Team Collaboration", "Leadership", "Adaptability", "Structured Thinking"];

const SkillsSection = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smooth()}
        >
          <span className="text-primary font-mono text-sm">&lt;skills&gt;</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mt-2 mb-4">
            <span className="whitespace-nowrap">Technical <span className="text-gradient">Expertise</span></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From schematic capture and board layout to firmware, hardware integration, debugging and testing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
            <motion.div
              key={category}
              className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={smooth(index * 0.08)}
              whileHover={hoverLift}
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
          transition={smooth()}
        >
          <h3 className="text-xl font-semibold font-mono mb-4 text-muted-foreground">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-5 py-2 rounded-full border border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 transition-colors"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={smooth(index * 0.05)}
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
