import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  descriptionClassName,
  titleClassName,
  titleFont,
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
      <h2
        className={cn(
          "mt-3 text-3xl sm:text-4xl leading-tight font-semibold serif",
          titleClassName,
        )}
        style={
          titleFont
            ? {
                fontFamily:
                  titleFont === "sans" ? "var(--font-sans)" : "var(--font-serif)",
              }
            : undefined
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
