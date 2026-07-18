import { InstagramIcon } from "@/components/icons";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";

const FOOTER_LINKS = NAV_LINKS.filter((link) =>
  ["Início", "Sobre", "Serviços", "FAQ", "Contato"].includes(link.label)
);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-3 lg:px-8">
        <div>
          <p className="font-heading text-xl text-foreground">Zilker Vitalize</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Massoterapia e Terapias Integrativas. Equilíbrio, bem-estar e renovação para corpo e
            mente.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Links rápidos</p>
          <ul className="mt-3 flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Contato</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <li>{WHATSAPP_DISPLAY}</li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              {ADDRESS_LINE_1} - {ADDRESS_LINE_2} - {ADDRESS_LINE_3}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        Zilker Vitalize © {new Date().getFullYear()} — Massoterapia e Terapias Integrativas.
      </div>
    </footer>
  );
}
