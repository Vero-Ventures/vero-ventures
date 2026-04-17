"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="studio" className="px-8 py-24 bg-paper-elevated" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left — name + quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              The founder
            </span>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-ink">
                {/* Replace src with /yaniv.jpg (or similar) once saved to public/ */}
                <img
                  src="/yaniv.jpg"
                  alt="Yaniv Talmor"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.innerHTML =
                      '<span class="flex h-full w-full items-center justify-center font-sans text-lg font-semibold text-paper">YT</span>';
                  }}
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Yaniv Talmor
                </h2>
                <p className="font-mono text-[10px] text-ink-muted">
                  Founder · Vero Ventures · Vancouver, BC
                </p>
              </div>
            </div>

            <blockquote className="mt-10 border-l-2 border-vermilion pl-8">
              <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                &ldquo;I started Vero because founders deserve a builder who&apos;s as invested in the outcome as they are.&rdquo;
              </p>
            </blockquote>

            <a
              href="https://www.linkedin.com/in/yanivtalmor/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
            >
              LinkedIn ↗
            </a>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Yaniv is an AI engineer and serial founder with an M.S. in Machine
                Learning &amp; Robotics from Georgia Tech (3.9 GPA). He has taken
                multiple ventures from zero to production — writing the code,
                making the product decisions, and staying directly accountable to
                the people he builds for.
              </p>
              <p>
                At Vero Ventures, he works directly with every client. No
                handoffs, no account managers, no gap between the person who sold
                you the project and the person building it. When you hire Vero,
                you get Yaniv.
              </p>
              <p>
                He specialises in AI-integrated products, full-stack web and
                mobile apps, and the kind of fast, focused builds that turn an
                idea into something investors and customers can actually use.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-hairline pt-8">
              {[
                { label: "Background", value: "AI / ML · Full-Stack" },
                { label: "Education", value: "Georgia Tech M.S." },
                { label: "Builds", value: "Web · Mobile · AI" },
                { label: "Code ownership", value: "100% yours, always" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
