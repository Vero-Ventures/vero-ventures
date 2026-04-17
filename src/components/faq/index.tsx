"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How much does an MVP cost?",
    a: "Most projects land between $15k–$40k CAD depending on scope and complexity. We scope tightly before committing to a number — you'll always know the full cost before we start.",
  },
  {
    q: "How fast can you start?",
    a: "We typically have a 1–2 week intake period. If you book an intro call this week, we could be scoping your project within days.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do, 100%. All code, designs, and assets are fully transferred to you at the end of the project. No licensing fees, no lock-in.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Absolutely — it's actually where we do our best work. We translate product vision into clear technical decisions and keep you looped in at every step without burying you in jargon.",
  },
  {
    q: "What happens after the MVP ships?",
    a: "You get post-launch support to squash anything that surfaces. After that, we offer ongoing retainers for teams that want to keep iterating — or we hand off cleanly so your own team can take over.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes. We can work alongside your internal devs, integrate with your existing repos and tooling, and hand off mid-project if needed. We're flexible.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Questions */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-hairline md:grid-cols-2 md:gap-x-24 md:divide-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-hairline">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 py-7 text-left"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {faq.q}
                </h3>
                <span
                  className={cn(
                    "mt-1 shrink-0 font-mono text-xl text-ink-muted transition-transform duration-200",
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
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 pr-8 text-sm leading-relaxed text-ink-muted">
                      {faq.a}
                    </p>
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
