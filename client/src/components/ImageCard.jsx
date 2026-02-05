import { cn } from "@/lib/utils";

export default function ImageCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
  className,
  testId,
}) {
  return (
    <div
      data-testid={testId}
      className={cn(
        "group overflow-hidden rounded-2xl soft-border bg-card shadow-sm shadow-black/5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/20" />
        {badge ? (
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
            {badge}
          </div>
        ) : null}
      </div>
      <div className="p-6">
        <div className="text-lg font-semibold serif">{title}</div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
