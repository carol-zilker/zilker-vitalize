export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-accent/30 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-accent-foreground/80 uppercase">
      {children}
    </span>
  );
}
