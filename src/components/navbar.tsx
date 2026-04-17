"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-hairline"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Wordmark + status */}
        <div className="flex items-center gap-4">
          <a href="/" className="font-display text-xl font-semibold text-ink">
            Vero Ventures
          </a>
        </div>

        {/* Nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#studio">Studio</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>

        {/* CTA */}
        <a
          href="#calendly"
          className="hidden items-center gap-1.5 rounded-full border border-ink bg-ink px-5 py-2 font-mono text-xs font-medium text-paper transition-all duration-200 hover:bg-vermilion hover:border-vermilion md:flex"
        >
          Start a project ↗
        </a>

        {/* Mobile CTA */}
        <a
          href="#calendly"
          className="flex items-center gap-1.5 rounded-full border border-ink bg-ink px-4 py-2 font-mono text-xs font-medium text-paper md:hidden"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
    >
      {children}
    </a>
  );
}
