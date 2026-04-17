"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    num: "01",
    title: "MVP Development",
    tagline: "Idea to live product in weeks.",
    description:
      "We take your concept from zero to a working, deployable MVP — scoped tightly so it ships fast, built solidly so it scales. No padding, no fluff. Just the core that gets you to market.",
    deliverables: [
      "Product scope & feature spec",
      "Full-stack web or mobile app",
      "Deployment on your infrastructure",
      "Handover with documentation",
    ],
    timeline: "1–2 weeks",
  },
  {
    num: "02",
    title: "AI Prototyping",
    tagline: "Put intelligence inside your product.",
    description:
      "We integrate LLMs, fine-tuned models, and AI APIs into products that actually work — not just demos. From semantic search to autonomous agents, we build AI that earns its place in your stack.",
    deliverables: [
      "Model selection & integration",
      "Prompt engineering & evals",
      "RAG pipelines & embeddings",
      "AI feature shipped end-to-end",
    ],
    timeline: "1–2 weeks",
  },
  {
    num: "03",
    title: "Product & Design",
    tagline: "Design that converts, not just impresses.",
    description:
      "UX that guides users to the aha moment. UI that looks intentional, not templated. We design alongside the build — no hand-off tax, no fidelity gaps.",
    deliverables: [
      "User flows & wireframes",
      "High-fidelity UI in Figma",
      "Design system & tokens",
      "Implemented in production code",
    ],
    timeline: "2–4 weeks",
  },
  {
    num: "04",
    title: "Technical Consulting",
    tagline: "Unstick your architecture.",
    description:
      "Stack audit, roadmap planning, technical co-founder-on-call. We help you make the right decisions before they're expensive to reverse.",
    deliverables: [
      "Tech stack audit & recommendations",
      "Architecture review",
      "Build vs. buy analysis",
      "Vendor & tooling selection",
    ],
    timeline: "1–2 weeks",
  },
];

export function OurServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              What we build
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Capabilities
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
            We work best as your dedicated build partner — not a vendor you
            manage, but a studio that ships.
          </p>
        </div>

        {/* Numbered list */}
        <div className="divide-y divide-hairline border-t border-hairline">
          {capabilities.map((cap, i) => (
            <div key={cap.num}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="group flex w-full items-center gap-6 py-7 text-left transition-colors hover:text-ink"
              >
                <span className="w-8 shrink-0 font-mono text-xs text-ink-muted">
                  {cap.num}
                </span>
                <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3
                    className={cn(
                      "font-display text-2xl font-semibold transition-colors md:text-3xl",
                      open === i
                        ? "text-vermilion"
                        : "text-ink group-hover:text-ink"
                    )}
                  >
                    {cap.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted md:ml-4">
                    {cap.tagline}
                  </span>
                </div>
                <span
                  className={cn(
                    "ml-4 shrink-0 font-mono text-xl text-ink-muted transition-transform duration-200",
                    open === i ? "rotate-45 text-vermilion" : ""
                  )}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-8 pb-10 pl-14 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <p className="text-base leading-relaxed text-ink-muted">
                          {cap.description}
                        </p>
                      </div>
                      <div>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                          Deliverables
                        </p>
                        <ul className="space-y-2">
                          {cap.deliverables.map((d, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-ink"
                            >
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-vermilion" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 border-t border-hairline pt-4">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                            Typical timeline
                          </span>
                          <p className="mt-1 font-display text-lg font-semibold text-ink">
                            {cap.timeline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
