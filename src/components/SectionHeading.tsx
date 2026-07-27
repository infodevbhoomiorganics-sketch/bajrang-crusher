type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-royal-200">
        <span className="h-1.5 w-1.5 rounded-full bg-royal-400 animate-pulse-glow" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-300/80 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
