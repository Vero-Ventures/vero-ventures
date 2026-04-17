import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 32 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-label="Vero Ventures mark"
    >
      {/* Bold V — uses currentColor so it flips with light/dark mode */}
      <path
        d="M 0,0 L 9,0 L 22,30 L 35,0 L 44,0 L 22,38 Z"
        className="fill-ink"
      />
      {/* Accent dot at tip — uses the theme accent color */}
      <circle cx="22" cy="35" r="4" className="fill-vermilion" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
}

export function Logo({ className, markSize = 28, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark size={markSize} />
      {showWordmark && (
        <span className="font-display text-xl font-semibold text-ink">
          Vero Ventures
        </span>
      )}
    </div>
  );
}
