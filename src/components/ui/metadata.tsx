import { cn } from "@/lib/utils";

interface MetaProps {
  label: string;
  value?: string;
  className?: string;
}

export function Meta({ label, value, className }: MetaProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
        {label}
      </span>
      {value && (
        <span className="font-mono text-xs font-medium text-ink">{value}</span>
      )}
    </div>
  );
}

export function MetaRow({
  items,
  className,
}: {
  items: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-8 gap-y-3",
        className
      )}
    >
      {items.map((item, i) => (
        <Meta key={i} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
