// Embedded Firmware Development Course
import {
    session1, session2, session3, session4, session5,
    session6, session7, session8, session9, session10,
    session11, session12, session13, session14, session15,
    session16, session17, session18, session19, session20,
    session21, session22, session23, session24, session25
} from './sessions.js';

export const embeddedFirmware = {
    id: "embedded-firmware",
    title: "Embedded Firmware Development",
    description: "Master bare-metal programming, toolchains, linker scripts, and custom firmware development from scratch",
    color: "#E74C3C",
    icon: "⚙️",
    level: "Advanced",
    duration: "25 hours",
    students: "1,250",
    sessions: [
        session1,   // Introduction to Embedded Firmware Development
        session2,   // Understanding MCU Architecture & Memory Map
        session3,   // ARM Cortex-M Architecture Deep Dive
        session4,   // Development Toolchain Setup
        session5,   // Understanding ELF Files and Binary Formats
        session6,   // GCC Compiler Deep Dive
        session7,   // Makefiles for Embedded Systems
        session8,   // Linker Scripts Fundamentals
        session9,   // Memory Sections (.text, .data, .bss, .rodata)
        session10,  // Advanced Linker Script Techniques
        session11,  // Vector Table and Interrupt Vectors
        session12,  // Startup Code (Reset Handler)
        session13,  // Stack and Heap Management
        session14,  // C Runtime Initialization
        session15,  // Boot Process from Reset to main()
        session16,  // Memory-Mapped I/O and Registers
        session17,  // Pointer Magic for Peripheral Access
        session18,  // GPIO Programming from Scratch
        session19,  // Clock Configuration and RCC
        session20,  // UART Communication Bare-Metal
        session21,  // Flashing and Debugging with OpenOCD
        session22,  // GDB Debugging Techniques
        session23,  // Interrupt Handling Deep Dive
        session24,  // DMA Programming
        session25   // Building a Complete Firmware Project
    ]
};
