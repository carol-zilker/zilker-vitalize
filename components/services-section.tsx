import { Check } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";
import { WHATSAPP_URL } from "@/lib/constants";

type Service = {
  provider: string;
  title: string;
  benefits: string[];
};

const SERVICES: Service[] = [
  {
    provider: "Yngrid",
    title: "Massagem Relaxante",
    benefits: ["Redução do estresse", "Relaxamento muscular", "Melhora do sono", "Sensação de bem-estar"],
  },
  {
    provider: "Yngrid",
    title: "Massagem Modeladora",
    benefits: [
      "Auxilia na definição corporal",
      "Estimula circulação",
      "Reduz retenção de líquidos",
      "Melhora o contorno corporal",
    ],
  },
  {
    provider: "Yngrid",
    title: "Massagem com Pedras Quentes",
    benefits: ["Relaxamento profundo", "Alívio muscular", "Melhora da circulação", "Equilíbrio energético"],
  },
  {
    provider: "Yngrid",
    title: "Ventosaterapia",
    benefits: [
      "Estimula circulação sanguínea",
      "Alivia dores musculares",
      "Libera tensões",
      "Auxilia recuperação física",
    ],
  },
  {
    provider: "Yngrid",
    title: "Escalda-pés",
    benefits: ["Relaxamento imediato", "Alívio do cansaço", "Sensação de leveza", "Bem-estar geral"],
  },
  {
    provider: "Carmelita",
    title: "Alinhamento de Chakras",
    benefits: ["Equilíbrio energético", "Harmonia emocional", "Mais disposição", "Bem-estar integral"],
  },
  {
    provider: "Carmelita",
    title: "Florais de Bach",
    benefits: ["Equilíbrio emocional", "Controle da ansiedade", "Redução do estresse", "Apoio emocional"],
  },
  {
    provider: "Carmelita",
    title: "Aromaterapia",
    benefits: ["Relaxamento", "Bem-estar emocional", "Melhora do foco", "Equilíbrio energético"],
  },
  {
    provider: "Carmelita",
    title: "Drenagem Linfática",
    benefits: [
      "Redução de inchaços",
      "Melhora da circulação",
      "Estímulo do sistema linfático",
      "Sensação de leveza",
    ],
  },
  {
    provider: "Carmelita",
    title: "Bambuterapia",
    benefits: [
      "Relaxamento muscular",
      "Melhora circulação",
      "Auxílio na modelagem corporal",
      "Bem-estar físico",
    ],
  },
  {
    provider: "Carmelita",
    title: "Liberação Miofascial",
    benefits: [
      "Alívio de tensões profundas",
      "Melhora da mobilidade",
      "Redução de dores musculares",
      "Sensação de leveza",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Nossos Serviços</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            Terapias para o seu corpo e mente
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Uma seleção de técnicas especializadas para promover relaxamento, saúde e equilíbrio
            energético.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs font-semibold tracking-wide text-accent-foreground/70 uppercase">
                {service.provider}
              </span>
              <h3 className="mt-2 font-heading text-xl text-foreground">{service.title}</h3>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground/70" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full bg-secondary px-5 py-2.5 text-center text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent/40"
              >
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
