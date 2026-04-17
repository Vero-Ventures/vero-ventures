"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-8 pb-24 pt-28 md:pt-36">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-vermilion/10 blur-[120px]" />
        <div className="absolute -top-10 right-0 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[100px] dark:bg-blue-500/15" />
        <div className="bg-vermilion/8 absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full blur-[100px]" />
      </div>
      <div className="mx-auto max-w-5xl text-center">
        {/* Section marker */}
        <motion.div
          {...fadeUp(0)}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            MVP Studio · Vancouver, BC
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-8xl"
        >
          We build the software your{" "}
          <em className="text-vermilion">pitch deck</em> promised.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.25)}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          Vero Ventures is a small studio designing and shipping
          production-grade MVPs for founders and companies — from first sketch
          to live app in <span className="font-medium text-ink">1–2 weeks</span>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#calendly"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-sm font-medium text-paper transition-all duration-200 hover:bg-vermilion"
          >
            Book an intro call ↗
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-7 py-3.5 font-mono text-sm font-medium text-ink transition-all duration-200 hover:border-ink"
          >
            See selected work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
