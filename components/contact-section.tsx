import { MapPin, MessageCircle } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";
import { InstagramIcon } from "@/components/icons";
import {
  ADDRESS_CEP,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  INSTAGRAM_HANDLE,
  MAPS_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contato" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>Contato</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Entre em Contato</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/30">
              <MapPin className="h-5 w-5 text-accent-foreground/80" />
            </span>
            <p className="text-sm font-semibold text-foreground">Endereço</p>
            <p className="text-sm text-muted-foreground">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              {ADDRESS_LINE_3}
              <br />
              {ADDRESS_CEP}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/30">
              <MessageCircle className="h-5 w-5 text-accent-foreground/80" />
            </span>
            <p className="text-sm font-semibold text-foreground">WhatsApp</p>
            <p className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</p>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/30">
              <InstagramIcon className="h-5 w-5 text-accent-foreground/80" />
            </span>
            <p className="text-sm font-semibold text-foreground">Instagram</p>
            <p className="text-sm text-muted-foreground">{INSTAGRAM_HANDLE}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Falar no WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/20 px-7 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-background"
          >
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
}
