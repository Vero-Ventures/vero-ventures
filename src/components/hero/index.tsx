"use client";

import { motion } from "framer-motion";

import type { ReactNode } from "react";
import { GradualSpacing } from "../ui/gradual-spacing";
import BookAppointmentButton from "../book-appointment-button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-tr from-primary to-muted-foreground p-8 py-36 text-primary-foreground dark:bg-gradient-to-tr dark:from-background dark:text-foreground">
      <div className="mx-auto max-w-screen-xl">
        <HeroTitle text="Innovative Software Solutions for Your Business" />
        <HeroDescription>
          We transform your ideas into powerful, scalable software. Let&apos;s
          build the future together.
        </HeroDescription>
        <div className="mt-20 flex justify-center">
          <BookAppointmentButton variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export function HeroTitle({ text }: { text: string }) {
  return (
    <GradualSpacing
      className="mb-2 text-balance text-center text-4xl font-bold tracking-tight md:mb-6 md:text-7xl"
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
      className="text-md relative mx-auto max-w-3xl pt-10 text-center font-semibold text-primary-foreground/80 dark:text-slate-300"
    >
      {children}
    </motion.p>
  );
}
