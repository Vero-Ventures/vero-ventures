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
          We partner with visionaries to transform their startup ideas into
          successful businesses. With expert guidance and a tailored approach,
          we&apos;re here to help you every step of the way—from concept to
          launch. Let&apos;s bring your vision to life!
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
      className="mb-2 text-balance text-7xl font-bold tracking-tight"
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
      className="relative mx-auto max-w-xl pt-8 text-center text-muted-foreground"
    >
      {children}
    </motion.p>
  );
}
