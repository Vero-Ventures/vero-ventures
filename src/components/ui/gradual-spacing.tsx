"use client";

import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayPerChar?: number;
  framerProps?: Variants;
  className?: string;
  containerClassName?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayPerChar = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  containerClassName,
}: GradualSpacingProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < text.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, delayPerChar * 1000);

    return () => clearInterval(timer);
  }, [text, delayPerChar]);

  return (
    <div className={cn("flex flex-wrap justify-center", containerClassName)}>
      <AnimatePresence>
        {text.split(" ").map((word, wordIndex, wordsArray) => {
          const startIndex =
            wordsArray.slice(0, wordIndex).join(" ").length +
            (wordIndex > 0 ? 1 : 0);

          return (
            <span key={wordIndex} className="mr-5 whitespace-nowrap">
              {word.split("").map((char, charIndex) => {
                const absoluteIndex = startIndex + charIndex;
                return (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    initial="hidden"
                    animate={
                      absoluteIndex < visibleChars ? "visible" : "hidden"
                    }
                    exit="hidden"
                    variants={framerProps}
                    transition={{ duration }}
                    className={cn("inline-block", className)}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
