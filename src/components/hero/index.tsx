"use client";

import { motion } from "framer-motion";

import type { ReactNode } from "react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { GradualSpacing } from "../ui/gradual-spacing";

export function HeroSection() {
  return (
    <section>
      <HeroHighlight className="mx-auto mt-10 max-w-screen-xl">
        <HeroTitle text="Innovative Software Solutions for Your Business" />
        <HeroDescription>
          <Highlight>
            We transform your ideas into powerful, scalable software. Let&apos;s
            build the future together.
          </Highlight>
        </HeroDescription>
      </HeroHighlight>
    </section>
  );
}

export function HeroTitle({ text }: { text: string }) {
  return (
    <GradualSpacing
      className="mb-8 text-balance text-center text-4xl font-bold tracking-tight md:mb-14 md:text-7xl"
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
      className="text-md relative mx-auto mb-20 max-w-3xl text-center font-semibold text-muted-foreground"
    >
      {children}
    </motion.p>
  );
}
