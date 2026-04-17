"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export function AboutUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <section id="studio" className="bg-paper-elevated px-8 py-24" ref={ref}>
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
                {avatarFailed ? (
                  <span className="flex h-full w-full items-center justify-center font-sans text-lg font-semibold text-paper">
                    YT
                  </span>
                ) : (
                  <Image
                    src="/yaniv.jpg"
                    alt="Yaniv Talmor"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    onError={() => setAvatarFailed(true)}
                  />
                )}
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

            <blockquote className="mt-10 border-l-2 border-azure pl-8">
              <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                &ldquo;I love turning wild ideas into real products. If
                you&apos;re building something ambitious, I want to be the
                person who makes it happen with you.&rdquo;
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
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                I&apos;m an AI engineer and founder who has taken multiple
                ventures from zero to production. I studied Machine Learning
                &amp; Robotics at Georgia Tech and have spent years building
                software that actually ships — not just prototypes that look
                good in a pitch.
              </p>
              <p>
                When you work with me, you get someone who is genuinely excited
                about what you&apos;re building. I ask the right questions, move
                fast, communicate constantly, and treat your deadline like my
                own. Clients tend to enjoy the process — which is not something
                you can say about most dev shops.
              </p>
              <p>
                When I&apos;m not shipping code, I&apos;m usually somewhere new.
                I travel as much as I can and bring that same curiosity and
                adaptability to every project I take on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
