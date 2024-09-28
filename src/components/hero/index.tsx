"use client";

import { motion } from "framer-motion";

import type { ReactNode } from "react";
import { GradualSpacing } from "../ui/gradual-spacing";
import BookAppointmentButton from "../book-appointment-button";

export function HeroSection() {
  return (
    <section className="p-8 py-36 text-primary">
      <div className="mx-auto max-w-7xl">
        <HeroTitle text="Turn your ideas into reality" />
        <HeroDescription>
          We partner with visionaries to transform ideas into successful
          businesses, offering expert guidance from concept to launch.
        </HeroDescription>
        <div className="mt-10 flex justify-center">
          <BookAppointmentButton />
        </div>
      </div>
    </section>
  );
}

export function HeroTitle({ text }: { text: string }) {
  return (
    <GradualSpacing
      className="mb-2 text-balance text-center text-7xl font-bold tracking-tight"
      text={text}
    />
  );
}

export function HeroDescription({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="relative mx-auto max-w-2xl pt-8 text-center text-xl"
    >
      {children}
    </motion.p>
  );
}
