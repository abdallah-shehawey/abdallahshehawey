import type { LucideIcon } from "lucide-react";
import { Award, BookOpen, Users } from "lucide-react";

export const education = {
  degree: "Electronics and Communication Engineering",
  university: "Al-Azhar University",
  location: "Cairo, Egypt",
  period: "Oct 2021 – Jul 2026",
  expected: "Graduated: Jul 2026",
  core: [
    "Embedded Systems",
    "Electrical Power Engineering",
    "Software Development",
    "Control System",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Very Good" },
];

export interface Certification {
  title: string;
  period: string;
  hours?: string;
  instructors?: string;
  topics: string[];
}

export const certifications: Certification[] = [
  {
    title: "System Programming under Linux",
    period: "Jul 2025 – Feb 2026",
    instructors: "STMicroelectronics",
    hours: "6 Months",
    topics: [
      "Building Linux utilities from scratch (cp, mv, pwd, ls, echo, custom CLI tools)",
      "Implementing multiple custom shells (femto, pico, nano, micro shells)",
      "Filesystem management and Linux file system operations",
      "Memory and User Management",
      "Process management and building a minimal Linux distribution tested on QEMU",
      "Introduction to Yocto build system and embedded Linux routing",
      "C / C++ OOP, RTOS / FreeRTOS concepts, testing concepts",
    ],
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
      "Graduation Project",
    ],
  },
  {
    title: "Embedded Linux",
    period: "Jul 2025 – Present",
    topics: [
      "Linux boot process, system services management (systemd), and user/group administration",
      "File permissions, access control, and filesystem hierarchy",
      "Package management, shell scripting, disks & partitions, and system monitoring tools",
      "Networking configuration, firewalls, and basic security hardening",
    ],
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
      "Upcoming: Advanced RTOS, Bootloader development, AUTOSAR",
    ],
  },
  {
    title: "Embedded System Diploma",
    period: "Sep 2023 – Mar 2024",
    instructors: "Eng. Mohamed Zaghloul, Eng. Mahmoud Karem, Eng. Ahmed Abdel Ghafar, NTI",
    hours: "230 Hours",
    topics: [
      "Advanced C programming, Data Structures, and Algorithms",
      "Device drivers for ATmega family (DIO, ADC, UART, I2C, SPI, PWM)",
      "RTOS concepts based on AVR microcontrollers",
      "AUTOSAR layered architecture fundamentals",
    ],
  },
];

export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  icon: LucideIcon;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Vice Head of Embedded System",
    organization: "AZhar EXHIBITION (AZEX)",
    location: "Al-Azhar University, Cairo",
    period: "Oct 2024 – May 2025",
    icon: Users,
    highlights: [
      "Supervised a team of 10+ engineers, enhancing technical capabilities by 20%",
      "Delivered advanced training on RTOS concepts and microcontroller programming",
      "Designed and implemented training modules for real-time applications",
    ],
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
      "Organized coding competitions fostering collaboration and learning",
    ],
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
      "Provided technical support and mentorship to junior members",
    ],
  },
];
