import type { LucideIcon } from "lucide-react";
import {
  Battery,
  BookOpen,
  BookText,
  Calculator,
  Car,
  CircuitBoard,
  Clock,
  Cloud,
  Code2,
  Container,
  Cpu,
  FileText,
  Gamepad2,
  Globe,
  GraduationCap,
  Home,
  Landmark,
  Layers,
  Lightbulb,
  Link,
  MessageCircle,
  MessagesSquare,
  Music,
  Package,
  Palette,
  Settings,
  Shield,
  Sprout,
  Terminal,
  Trophy,
  Vote,
  Wrench,
  Zap,
} from "lucide-react";

export type ProjectCategory = "ARM" | "AVR" | "Linux" | "IoT" | "Web" | "Other";

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
  grade: "Graded Excellent",
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

/* Ordered strongest first: every project with a GitHub repo comes before
   the ones without a public repo (the whole card opens the repo). */
export const projects: Project[] = [
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
    title: "WhatsApp Desktop for Linux",
    description:
      "Unofficial WhatsApp Web desktop client for Linux on Electron — tray integration, native notifications, voice/video calls, system fonts and Arabic text fixes; shipped as rpm, deb and Arch packages",
    icon: MessageCircle,
    tags: ["Electron", "Linux Desktop", "Packaging"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/whatsapp-desktop",
  },
  {
    title: "WhatsApp GTK4 Client",
    description:
      "A ~120 KB WhatsApp Web client written in C on GTK4 + WebKitGTK 6 — working image paste, tray unread badge, per-message notifications and desktop-font rendering",
    icon: MessagesSquare,
    tags: ["C", "GTK4", "WebKitGTK"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/whatsapp",
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
    title: "ATmega32 Driver Suite",
    description:
      "Complete MCAL/HAL driver library for the ATmega32 family — DIO, ADC, UART, I2C, SPI, PWM, EEPROM and more, written from scratch",
    icon: CircuitBoard,
    tags: ["AVR", "MCAL / HAL", "Embedded C"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/ATMega32-Drivers",
  },
  {
    title: "NiroTronix Motor Driver Library",
    description:
      "Arduino library for the NiroTronix MD series brushed DC motor drivers — PWM/DIR speed control, smooth ramps and 25 kHz PWM, published to the Arduino Library Registry",
    icon: Zap,
    tags: ["Arduino", "PWM", "Motor Control"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/NiroTronixMotorDriver",
  },
  {
    title: "shinux — Linux Blog & Q&A Platform",
    description:
      "A Linux technical blog, structured tutorial tracks and a community Q&A engine — Markdown articles, table of contents, RSS feeds; live on Vercel",
    icon: Globe,
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    categories: ["Web", "Linux"],
    github: "https://github.com/abdallah-shehawey/shinux-website",
  },
  {
    title: "shinux Package Repository",
    description:
      "A signed package repository for dnf, apt and native Arch packages, hosted free on GitHub Pages — add it once with one command, then install and upgrade like any distro package",
    icon: Package,
    tags: ["Linux", "Packaging", "GitHub Pages"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/shinux-repo",
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
    title: "ArtCraft Open-Source Contributions",
    description:
      "Upstream pull requests to the Craft App Suite of Rust desktop apps — window-size restore on Linux, native Adwaita window buttons on GNOME Wayland and persistent interface scaling, built on a shared egui fork",
    icon: Palette,
    tags: ["Rust", "egui", "Open Source"],
    categories: ["Linux", "Other"],
    github: "https://github.com/abdallah-shehawey/ArtCraft",
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
    title: "Gaming on Linux",
    description:
      "Play any Windows game on Linux from your Steam library with all your controllers — setup scripts for Fedora, Ubuntu/Mint/Debian and Arch plus an Arabic video guide",
    icon: Gamepad2,
    tags: ["Linux", "Steam / Proton", "Shell"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/Gaming-on-Linux",
  },
  {
    title: "Embedded Linux Notes",
    description:
      "Personal notes and resources from a self-study journey into Embedded Linux — a living document of the learning process",
    icon: BookOpen,
    tags: ["Embedded Linux", "Notes", "Self-study"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/Embedded-Linux-Notes",
  },
  {
    title: "DevOps Track (DEPI)",
    description:
      "DevOps training materials and hands-on labs from the Digital Egypt Pioneers Initiative — CI/CD, Linux, Git, Docker and cloud fundamentals",
    icon: Container,
    tags: ["DevOps", "Docker", "CI/CD"],
    categories: ["Linux", "Other"],
    github: "https://github.com/abdallah-shehawey/DevOps",
  },
  {
    title: "dotfiles-linux",
    description:
      "Personal Ubuntu and Fedora dotfiles, apps and system customization — Zsh, Neovim, GNOME and themes for a consistent dev environment on a new machine",
    icon: Settings,
    tags: ["Linux", "Zsh", "Neovim"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/dotfiles-linux",
  },
  {
    title: "Linkora",
    description:
      "A link-in-bio platform (Linktree alternative) with a marketing landing page and live theme showcase",
    icon: Link,
    tags: ["Next.js", "TypeScript", "Firebase"],
    categories: ["Web"],
    github: "https://github.com/abdallah-shehawey/linkora",
  },
  {
    title: "EECE Class of 2026 Website",
    description:
      "Interactive graduation website for the Al-Azhar Electronics & Communication class of 2026 — live multi-event countdown, student yearbook grid and project team cards",
    icon: GraduationCap,
    tags: ["JavaScript", "Web", "UI"],
    categories: ["Web"],
    github: "https://github.com/abdallah-shehawey/EECE-Azhar",
  },
  {
    title: "Daftar Accounts",
    description:
      "Desktop ledger app for customer accounts with a full Arabic RTL UI — transactions, totals, PDF statements and CSV export",
    icon: BookText,
    tags: ["Python", "PySide6 / Qt", "Desktop"],
    categories: ["Other"],
    github: "https://github.com/abdallah-shehawey/QT-Application",
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
    title: "Linux Simple Shell",
    description:
      "A simple command shell for Linux written in C",
    icon: Terminal,
    tags: ["Linux", "C", "Shell"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/Linux-Simple-Shell",
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
    title: "Smart Room",
    description:
      "Room automation project on an AVR microcontroller",
    icon: Lightbulb,
    tags: ["AVR", "Embedded C", "Automation"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/Smart-Room",
  },
  {
    title: "Smart Garden",
    description:
      "Garden automation project on an AVR microcontroller, completed in four hours",
    icon: Sprout,
    tags: ["AVR", "Embedded C", "Sensors"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/Smart-Garden",
  },
  {
    title: "Bank Database",
    description:
      "Bank database system running on an AVR microcontroller",
    icon: Landmark,
    tags: ["AVR", "Embedded C", "EEPROM"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/Bank_DataBase",
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
    title: "RTC Watch",
    description:
      "Engineered a real-time clock system with precision timing using AVR",
    icon: Clock,
    tags: ["AVR", "I2C", "LCD"],
    categories: ["AVR"],
    github: "https://github.com/abdallah-shehawey/Real-Time-Clock",
  },
  {
    title: "Linux Utilities Docs",
    description:
      "Documentation of core Linux shell utilities — syntax and examples for pwd and friends",
    icon: FileText,
    tags: ["Linux", "Shell", "Docs"],
    categories: ["Linux"],
    github: "https://github.com/abdallah-shehawey/SPL-Udemy",
  },
  {
    title: "C Projects",
    description:
      "A collection of projects written in the C language",
    icon: Code2,
    tags: ["C", "Data Structures", "Console"],
    categories: ["Other"],
    github: "https://github.com/abdallah-shehawey/C-Project",
  },
  {
    title: "ICPC Assiut Sheet",
    description:
      "Problem-solving solutions for the ICPC Assiut University training sheet",
    icon: Trophy,
    tags: ["C++", "Problem Solving", "ICPC"],
    categories: ["Other"],
    github: "https://github.com/abdallah-shehawey/PS_Assuit_Sheet",
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
  { label: "Web", value: "Web" },
  { label: "Other", value: "Other" },
];
