import { cn } from "@/lib/utils";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
  testId,
}) {
  return (
    <div
      data-testid={testId}
      className={cn(
        "group rounded-2xl soft-border bg-card p-6 shadow-sm shadow-black/5 transition-colors hover:bg-secondary",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <div>
          <div className="text-lg font-semibold serif">{title}</div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
