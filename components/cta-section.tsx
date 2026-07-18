import { WHATSAPP_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
        <h2 className="font-heading text-3xl sm:text-4xl">Seu momento de bem-estar começa agora</h2>
        <p className="max-w-xl leading-relaxed text-primary-foreground/80">
          Reserve um momento para cuidar de você. Agende seu atendimento e descubra os benefícios das
          terapias oferecidas pela Zilker Vitalize.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
