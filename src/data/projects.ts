import type { LucideIcon } from "lucide-react";
import {
  Battery,
  Calculator,
  Car,
  CircuitBoard,
  Clock,
  Cloud,
  Cpu,
  Home,
  Layers,
  Music,
  Shield,
  Terminal,
  Vote,
  Wrench,
  Zap,
} from "lucide-react";

export type ProjectCategory = "ARM" | "AVR" | "Linux" | "IoT" | "Other";

export interface ProjectVariant {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  categories: ProjectCategory[];
  /** GitHub repo — projects with a link are listed first and open on click. */
  github?: string;
  /** Sibling repos of the same project family, shown as small link chips. */
  variants?: ProjectVariant[];
}

export const featuredProject = {
  title: "V2X Collision Avoidance System",
  role: "Graduation Project — Team Lead",
  institution: "Electronics & Communication Engineering, Al-Azhar University",
  period: "2025 – 2026",
  github: "https://github.com/abdallah-shehawey/V2X-Collision-Avoidance",
  description:
    "A Vehicle-to-Everything (V2X) collision-avoidance system built on a scaled car prototype: it talks to other vehicles (V2V), road infrastructure (V2I/V2N), and pedestrians (V2P) to detect and prevent collisions in real time.",
  highlights: [
    "STM32F446RE hard-real-time safety core on FreeRTOS — five cooperative ADAS modules (FCW, EEBL, BSW, DNPW, IMA) graded Safe/Warning/Critical every 50 ms",
    "All MCAL/HAL drivers written from scratch in Embedded C — no vendor HAL",
    "V2V radio link over ESP-NOW through dual ESP32-S3 bridges (no Wi-Fi network needed)",
    "Raspberry Pi orchestration layer: custom pub/sub IPC hub, MQTT traffic-light bridge, ONNX/YOLO pedestrian detection, live telemetry dashboard and phone remote control",
    "Unified safety guard blocks unsafe maneuvers using every input at once — V2V neighbors, red lights, and detected pedestrians",
  ],
  stats: [
    { value: "5", label: "ADAS modules" },
    { value: "50 ms", label: "Real-time cycle" },
    { value: "4", label: "V2X domains" },
  ],
  tags: [
    "STM32",
    "FreeRTOS",
    "Embedded C",
    "ESP-NOW",
    "MQTT",
    "Raspberry Pi",
    "Python",
    "ONNX / YOLO",
  ],
};

/* Projects with a GitHub repo come first (the whole card opens the repo);
   the ones without a public repo close the list. */
export const projects: Project[] = [
  {
    title: "ATmega32 Driver Suite",
    description:
      "Complete MCAL/HAL driver library for the ATmega32 family — DIO, ADC, UART, I2C, SPI, PWM, EEPROM and more, written from scratch",
    icon: CircuitBoard,
    tags: ["AVR", "MCAL / HAL", "Embedded C"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/ATMega32-Drivers",
  },
  {
    title: "STM32 COTS Driver Libraries",
    description:
      "Bare-metal driver libraries for three STM32 boards (F103, F401, F446) — RCC, GPIO, NVIC, UART, SPI, DMA — built without vendor HAL",
    icon: Cpu,
    tags: ["ARM Cortex-M", "STM32", "Bare-metal"],
    categories: ["ARM"],
    github: "https://github.com/abdallah-shehawey/COTS-STM32F446xx",
    variants: [
      { label: "F103", url: "https://github.com/abdallah-shehawey/COTS-STM32F103xx" },
      { label: "F401", url: "https://github.com/abdallah-shehawey/COTS-STM32F401xx" },
      { label: "F446", url: "https://github.com/abdallah-shehawey/COTS-STM32F446xx" },
    ],
  },
  {
    title: "RTOS from Scratch on AVR",
    description:
      "A lightweight real-time operating system stack for AVR microcontrollers — scheduler and task management built from first principles",
    icon: Layers,
    tags: ["RTOS", "Scheduler", "AVR"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/RTOS-AVR",
  },
  {
    title: "MP3 Player",
    description:
      "Built an MP3 player on ARM Cortex-M4 with smooth audio playback from SD card storage",
    icon: Music,
    tags: ["ARM Cortex-M4", "Audio", "SD Card"],
    categories: ["ARM"],
    github: "https://github.com/abdallah-shehawey/MP3_Player",
  },
  {
    title: "Linux System Programming",
    description:
      "Linux utilities rebuilt from scratch (cp, mv, ls, echo), four custom shells, process & memory management — STMicroelectronics training",
    icon: Terminal,
    tags: ["Linux", "Syscalls", "C"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/System-programming-in-Linux",
  },
  {
    title: "Smart Home",
    description:
      "Developed a fully integrated home automation system with IoT capabilities",
    icon: Home,
    tags: ["IoT", "Embedded C", "AVR"],
    categories: ["AVR", "IoT"],
    github: "https://github.com/abdallah-shehawey/Smart-Home",
  },
  {
    title: "RTC Watch",
    description:
      "Engineered a real-time clock system with precision timing using AVR",
    icon: Clock,
    tags: ["AVR", "I2C", "LCD"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/Real-Time-Clock",
  },
  {
    title: "Advanced Safe System",
    description:
      "Secure access-controlled safe with dynamic passwords persisted in EEPROM and login-attempt lockout",
    icon: Shield,
    tags: ["Security", "EEPROM", "Keypad"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/SECURITY-Files",
  },
  {
    title: "Instructions Decoder",
    description:
      "An assembler written in C that decodes and executes custom instructions efficiently",
    icon: Calculator,
    tags: ["C", "Assembler", "Parsing"],
    categories: ["Other"],
    github: "https://github.com/abdallah-shehawey/Assempler",
  },
  {
    title: "Electronic Voting Machine",
    description: "Built a secure voting platform with real-time data processing",
    icon: Vote,
    tags: ["Security", "UART", "LCD"],
    categories: ["AVR"],
  },
  {
    title: "Traffic Light Controller",
    description:
      "Created a real-time traffic management system, reducing delays by 15%",
    icon: Car,
    tags: ["RTOS", "Timers", "State Machine"],
    categories: ["AVR"],
  },
  {
    title: "CAN Bus Analyzer",
    description:
      "Implemented a tool to monitor and debug CAN bus communication",
    icon: Cpu,
    tags: ["CAN", "Diagnostics", "STM32"],
    categories: ["ARM"],
  },
  {
    title: "Firmware Optimization",
    description:
      "Reduced memory usage by 25% and improved execution speed by 30%",
    icon: Zap,
    tags: ["Optimization", "Memory", "Performance"],
    categories: ["Other"],
  },
  {
    title: "IoT Weather Station",
    description:
      "Built an IoT-based weather station using ESP32 and cloud services",
    icon: Cloud,
    tags: ["ESP32", "IoT", "Cloud"],
    categories: ["IoT"],
  },
  {
    title: "Battery Management System",
    description:
      "Designed an efficient power monitoring system for lithium-ion batteries",
    icon: Battery,
    tags: ["Power", "ADC", "Monitoring"],
    categories: ["Other"],
  },
  {
    title: "Debugging Tool",
    description:
      "Designed a tool that reduced testing time by 30%, improving development efficiency",
    icon: Wrench,
    tags: ["Debugging", "Testing", "Tools"],
    categories: ["Other"],
  },
];

export const projectCategories: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "ARM / STM32", value: "ARM" },
  { label: "AVR", value: "AVR" },
  { label: "Linux", value: "Linux" },
  { label: "IoT", value: "IoT" },
  { label: "Other", value: "Other" },
];
