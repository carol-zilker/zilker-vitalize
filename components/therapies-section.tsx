import { Sparkles } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";
import { WHATSAPP_URL } from "@/lib/constants";

type Therapy = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  listTitle: string;
  items: string[];
  cta: string;
};

const THERAPIES: Therapy[] = [
  {
    eyebrow: "Bem-estar Natural",
    title: "Aromaterapia",
    paragraphs: [
      "Bem-estar natural com base científica. Os aromas influenciam a forma como percebemos os espaços e, quando utilizados de maneira adequada, contribuem para um ambiente mais agradável, acolhedor e confortável — influenciando positivamente o humor, a percepção e a experiência das pessoas no local.",
      "Cuidar do ambiente é também cuidar das pessoas.",
    ],
    listTitle: "Benefícios da aromaterapia",
    items: [
      "Auxílio no relaxamento e redução do estresse",
      "Melhora da qualidade do sono",
      "Apoio à concentração e clareza mental",
      "Sensação de equilíbrio emocional e bem-estar",
      "Conforto respiratório e sensação de leveza",
    ],
    cta: "Agendar Aromaterapia",
  },
  {
    eyebrow: "Terapia Energética",
    title: "Alinhamento de Chakras",
    paragraphs: [
      "É um atendimento energético que atua no campo sutil, harmonizando os chakras por meio de cristais e cromoterapia, auxiliando o fluxo natural da energia.",
    ],
    listTitle: "Para que serve esse alinhamento",
    items: [
      "Reequilibrar o campo energético",
      "Harmonizar emoções",
      "Aliviar o cansaço energético",
      "Restaurar a sensação de centramento",
    ],
    cta: "Agendar Alinhamento de Chakras",
  },
  {
    eyebrow: "Equilíbrio Emocional",
    title: "Florais de Bach",
    paragraphs: [
      "Os florais de Bach são compostos extraídos das flores. São indicados para tratar as nossas emoções e ajudar a equilibrar disfunções comportamentais e mentais, fortalecendo a relação entre mente e corpo.",
      "Atuam nas emoções e na personalidade, não nas condições físicas.",
    ],
    listTitle: "Como os florais ajudam",
    items: [
      "Complementam tratamentos de saúde convencionais",
      "Auxiliam na prevenção de doenças",
      "Equilibram questões ligadas à personalidade",
      "Fortalecem o vínculo entre mente e corpo",
    ],
    cta: "Agendar Florais de Bach",
  },
];

export function TherapiesSection() {
  return (
    <section id="terapias" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Terapias em Destaque</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            Conheça nossas terapias integrativas
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Práticas que cuidam do corpo, das emoções e da energia, promovendo equilíbrio e bem-estar
            de forma natural.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {THERAPIES.map((therapy) => (
            <div key={therapy.title} className="flex flex-col rounded-3xl bg-card p-8 shadow-sm">
              <span className="text-xs font-semibold tracking-[0.15em] text-accent-foreground/70 uppercase">
                {therapy.eyebrow}
              </span>
              <h3 className="mt-2 font-heading text-2xl text-foreground">{therapy.title}</h3>

              <div className="mt-4 flex flex-col gap-3">
                {therapy.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h4 className="mt-6 text-sm font-semibold text-foreground">{therapy.listTitle}</h4>
              <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                {therapy.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground/70" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full border border-foreground/20 px-5 py-2.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {therapy.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
