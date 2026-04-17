"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    week: "D1–2",
    phase: "Scope",
    title: "We align on exactly what to build.",
    description:
      "A focused scoping session to nail down your core user, the one thing that makes your MVP worth having, and the feature set that proves it. You leave with a locked spec and a start date.",
  },
  {
    week: "D3–4",
    phase: "Design",
    title: "You see it before a single line of production code.",
    description:
      "High-fidelity UI, user flows, and component decisions — done fast and iterated with you in real-time. Changes happen here, not after they're built.",
  },
  {
    week: "D5–10",
    phase: "Build",
    title: "Full-stack development. Daily updates. No surprises.",
    description:
      "We push to a staging environment daily so you can see progress in real-time. You have a direct line to the person writing your code — no account manager, no ticket queue.",
  },
  {
    week: "D11–14",
    phase: "Ship",
    title: "Live. Yours. With handover.",
    description:
      "Production deployment, domain setup, monitoring configured. Full code handover — you own everything. We stay available post-launch to squash anything that surfaces.",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="bg-paper-elevated px-8 py-24">
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            How a project runs
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            From &ldquo;let&apos;s go&rdquo; to{" "}
            <em className="not-italic text-azure">live</em> in 1–2 weeks.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[3.25rem] top-0 hidden h-full w-px bg-hairline md:block" />

          <div className="space-y-0 divide-y divide-hairline">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[6.5rem_1fr]"
              >
                {/* Week marker */}
                <div className="flex items-start gap-4 md:flex-col md:gap-1">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-azure bg-paper font-mono text-[10px] font-bold text-azure">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                      {step.week}
                    </p>
                    <p className="font-mono text-xs font-medium text-ink">
                      {step.phase}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div className="mt-12 border-t border-hairline pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-xl text-ink-muted">
              Ready to start?{" "}
              <span className="text-ink">
                Intro calls are 30 minutes, free.
              </span>
            </p>
            <a
              href="#calendly"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm font-medium text-paper transition-all duration-200 hover:bg-azure"
            >
              Book now ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
