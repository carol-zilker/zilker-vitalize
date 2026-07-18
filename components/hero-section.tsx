import Image from "next/image";
import { SectionBadge } from "@/components/section-badge";
import { WHATSAPP_URL } from "@/lib/constants";

const FEATURES = ["Atendimento Personalizado", "Ambiente Acolhedor", "Profissionais Especializadas"];

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <SectionBadge>Massoterapia &amp; Terapias Integrativas</SectionBadge>
          <h1 className="font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[60px]">
            Equilíbrio, Bem-estar e Renovação para Corpo e Mente
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Na Zilker Vitalize, cada atendimento é pensado para proporcionar relaxamento, saúde,
            equilíbrio energético e qualidade de vida através da massoterapia e terapias integrativas.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-foreground/20 px-7 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Conhecer Serviços
            </a>
          </div>
          <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
          <Image
            src="/images/hero-spa.png"
            alt="Ambiente de massoterapia Zilker Vitalize"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
