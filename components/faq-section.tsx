"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";

const FAQS = [
  {
    q: "Quanto tempo dura uma sessão?",
    a: "As sessões variam entre 50 e 90 minutos dependendo da terapia escolhida.",
  },
  {
    q: "Preciso agendar com antecedência?",
    a: "Sim. Recomendamos o agendamento prévio para garantir o melhor horário para você.",
  },
  {
    q: "Posso combinar terapias?",
    a: "Sim. Algumas terapias podem ser combinadas para potencializar os resultados.",
  },
  {
    q: "A massagem dói?",
    a: "As técnicas são adaptadas para garantir conforto e bem-estar durante todo o atendimento.",
  },
  {
    q: "Vocês atendem empresas?",
    a: "Sim. Realizamos massagens terapêuticas corporativas para colaboradores.",
  },
  {
    q: "Posso presentear alguém com uma sessão?",
    a: "Sim. É possível adquirir sessões para presente. Fale conosco pelo WhatsApp.",
  },
  {
    q: "Como faço para agendar?",
    a: "Através do WhatsApp disponível no site. É rápido e prático!",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>Dúvidas Frequentes</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Perguntas e respostas</h2>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.q} className="px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-heading text-lg text-foreground"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
