"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "8", unit: "weeks", label: "Average ship time" },
  { value: "10+", unit: "", label: "Projects shipped" },
  { value: "100%", unit: "", label: "Founder-led code" },
  { value: "0", unit: "", label: "Templates used" },
];

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-hairline px-8 py-20 bg-paper" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-end gap-1">
                <span className="font-display text-6xl font-semibold leading-none text-ink md:text-7xl">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="mb-2 font-display text-2xl text-ink-muted">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
