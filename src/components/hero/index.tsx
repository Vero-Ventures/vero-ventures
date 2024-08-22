"use client";

import { motion } from "framer-motion";

import type { ReactNode } from "react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroSection() {
  return (
    <section>
      <HeroHighlight className="mt-10">
        <motion.div
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
          className="mx-auto max-w-screen-xl"
        >
          <HeroTitle>Innovative Software Solutions for Your Business</HeroTitle>
          <HeroDescription>
            <Highlight>
              We transform your ideas into powerful, scalable software. Let's
              build the future together.
            </Highlight>
          </HeroDescription>
        </motion.div>
      </HeroHighlight>
    </section>
  );
}

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-14 text-balance text-center text-4xl font-bold tracking-tighter md:text-7xl">
      {children}
    </h1>
  );
}

export function HeroDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-md relative mx-auto mb-20 max-w-3xl text-center font-semibold text-muted-foreground">
      {children}
    </p>
  );
}
