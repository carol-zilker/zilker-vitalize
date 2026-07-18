import { SectionBadge } from "@/components/section-badge";

const RESULTS = [
  "Redução do estresse",
  "Melhora da qualidade do sono",
  "Alívio de tensões musculares",
  "Mais disposição",
  "Equilíbrio emocional",
  "Bem-estar físico e mental",
  "Melhora da circulação",
  "Autocuidado e qualidade de vida",
];

export function ResultsSection() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Resultados</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            Benefícios das Terapias Integrativas
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((result, index) => (
            <div key={result} className="flex flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm">
              <span className="font-heading text-3xl text-accent-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium text-foreground">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
