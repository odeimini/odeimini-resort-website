interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="font-serif text-2xl md:text-3xl text-northwoods-bark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-northwoods-bark/80 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
