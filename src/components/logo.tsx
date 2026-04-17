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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-label="Vero Ventures mark"
    >
      {/* Lightning bolt — upper body */}
      <polygon points="13,2 3,14 12,14 12,10" className="fill-ink" />
      {/* Lightning bolt — lower tip, accent color */}
      <polygon points="12,14 11,22 21,10 12,10" className="fill-vermilion" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
}

export function Logo({
  className,
  markSize = 28,
  showWordmark = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark size={markSize} />
      {showWordmark && (
        <div className="flex flex-col gap-0.5 leading-none">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
            Vero
          </span>
          <span className="font-mono text-[8.5px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Ventures
          </span>
        </div>
      )}
    </div>
  );
}
