import Image from "next/image";
import { SectionBadge } from "@/components/section-badge";

const PILLS = ["Cuidado Humanizado", "Bem-estar Integral", "Experiência Premium"];

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg lg:order-1">
          <Image
            src="/images/space-1.png"
            alt="Espaço terapêutico Zilker Vitalize"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>

        <div className="order-1 flex flex-col items-start gap-5 lg:order-2">
          <SectionBadge>A Marca</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Conheça a Zilker Vitalize</h2>
          <p className="leading-relaxed text-muted-foreground">
            A Zilker Vitalize nasceu com o propósito de cuidar das pessoas de forma integral,
            promovendo bem-estar físico, emocional e energético através de terapias especializadas
            e atendimento humanizado.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Cada sessão é realizada com atenção aos detalhes, proporcionando uma experiência
            acolhedora, relaxante e transformadora.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
