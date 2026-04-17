import { cn } from "@/lib/utils";

const ITEMS = [
  "MVP Development",
  "AI Prototypes",
  "Web Apps",
  "Mobile",
  "Design Sprints",
  "Tech Strategy",
  "Full-Stack Build",
  "Product Design",
];

export function MarqueeRibbon({ className }: { className?: string }) {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className={cn(
        "overflow-hidden bg-vermilion py-3.5",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="flex w-max animate-marquee items-center gap-0"
        style={{ willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-[11px] uppercase tracking-[0.18em] text-paper"
          >
            {item}
            <span className="mx-5 text-paper/50">✱</span>
          </span>
        ))}
      </div>
    </div>
  );
}
