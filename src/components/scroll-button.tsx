"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const toggleVisible = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 300);
    };

    // Check initial scroll position
    toggleVisible();

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

  return (
    <Button
      className={cn(
        "fixed bottom-5 right-5 rounded-full px-2 py-6 transition-opacity duration-300",
        {
          "opacity-100": visible,
          "opacity-0": !visible,
        }
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon size={32} />
    </Button>
  );
}
