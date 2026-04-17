import CalendlyEmbed from "../calendly-embed";

export function ContactUsSection() {
  return (
    <section id="contact" className="bg-[#080E1C] px-8 py-28 dark:bg-[#060912]">
      <div className="mx-auto max-w-7xl">
        {/* Editorial CTA */}
        <div className="mb-16 border-b border-white/10 pb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Let&apos;s build
          </span>
          <h2 className="mt-4 font-display text-5xl font-semibold text-white md:text-6xl lg:text-7xl">
            Have an idea worth building?{" "}
            <em className="not-italic text-azure">Let&apos;s make it real.</em>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
            Intro calls are 30 minutes and free. No pitch, no pressure — just a
            conversation about what you&apos;re building and whether we&apos;re
            the right fit.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-azure" />
              <span className="font-mono text-xs text-white/50">
                Spots fill fast — book before we&apos;re full
              </span>
            </div>
            <span className="hidden text-white/20 sm:block">·</span>
            <a
              href="mailto:yaniv.talmor@veroventures.com"
              className="font-mono text-xs text-white/50 underline underline-offset-4 transition-colors hover:text-white"
            >
              yaniv.talmor@veroventures.com
            </a>
          </div>
        </div>

        {/* Calendly frame */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#F0F5FF]">
          <div className="border-b border-hairline px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-azure" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#526080]">
                Schedule · 30 min intro call
              </span>
            </div>
          </div>
          <CalendlyEmbed url="https://calendly.com/veroventures/chat" />
        </div>
      </div>
    </section>
  );
}
