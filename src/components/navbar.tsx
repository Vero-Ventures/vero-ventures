"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

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
          ? "border-b border-hairline bg-paper/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <a href="/">
          <Logo markSize={24} />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#studio">Studio</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#calendly"
            className="hidden items-center gap-1.5 rounded-full border border-ink bg-ink px-5 py-2 font-mono text-xs font-medium text-paper transition-all duration-200 hover:border-vermilion hover:bg-vermilion md:flex"
          >
            Start a project ↗
          </a>
          <a
            href="#calendly"
            className="flex items-center gap-1.5 rounded-full border border-ink bg-ink px-4 py-2 font-mono text-xs font-medium text-paper md:hidden"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-8 w-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-all duration-200 hover:text-ink"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Moon className="h-3.5 w-3.5" />
      )}
    </button>
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
