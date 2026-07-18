import { HeartHandshake, Home, Leaf, Wand2, UserCheck, Award, HeartPulse, Sparkle } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";

const DIFFERENTIALS = [
  { icon: HeartHandshake, label: "Atendimento Humanizado" },
  { icon: Home, label: "Ambiente Exclusivo e Acolhedor" },
  { icon: Leaf, label: "Terapias Integrativas" },
  { icon: Wand2, label: "Técnicas Especializadas" },
  { icon: UserCheck, label: "Atendimento Personalizado" },
  { icon: Award, label: "Profissionais Qualificadas" },
  { icon: HeartPulse, label: "Bem-estar Físico e Emocional" },
  { icon: Sparkle, label: "Experiência Relaxante e Transformadora" },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Diferenciais</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            Por que escolher a Zilker Vitalize?
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-4 rounded-2xl bg-card p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/30">
                <Icon className="h-5 w-5 text-accent-foreground/80" />
              </span>
              <p className="text-sm font-medium text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
