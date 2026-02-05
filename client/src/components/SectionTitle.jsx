import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  testId,
}) {
  return (
    <div
      data-testid={testId}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl sm:text-4xl leading-tight font-semibold serif">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
