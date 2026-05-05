interface Props { eyebrow?: string; title: string; subtitle?: string; center?: boolean; }
export const SectionHeading = ({ eyebrow, title, subtitle, center = true }: Props) => (
  <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
    {eyebrow && <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">{eyebrow}</p>}
    <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
  </div>
);