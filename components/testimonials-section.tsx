import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Depoimentos</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-secondary/40 p-8 text-center sm:p-12">
          <Quote className="h-8 w-8 text-accent-foreground/60" />
          <p className="font-heading text-xl leading-snug text-foreground sm:text-2xl">
            &ldquo;A massagem relaxante da Yngrid mudou minha rotina. Saí completamente renovada e o
            ambiente é simplesmente acolhedor. Recomendo de olhos fechados!&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src="/images/client-1.png" alt="Juliana Martins" fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Juliana Martins</p>
              <p className="text-xs text-muted-foreground">Cliente Zilker Vitalize</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
