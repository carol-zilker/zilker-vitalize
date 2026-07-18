"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" aria-label="Zilker Vitalize - início" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg text-foreground">Zilker Vitalize</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">
              MASSOTERAPIA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Agendar Atendimento
        </a>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1">
          <span className="h-0.5 w-5 bg-foreground" />
          <span className="h-0.5 w-5 bg-foreground" />
          <span className="h-0.5 w-5 bg-foreground" />
        </div>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full bg-background shadow-md">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Agendar Atendimento
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
