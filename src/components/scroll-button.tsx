"use client";

import { ChevronUpIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <Button
      className="fixed bottom-5 right-5 rounded-full px-2 py-6"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon size={32} />
    </Button>
  );
}
