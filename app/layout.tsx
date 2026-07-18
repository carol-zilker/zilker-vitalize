import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zilker Vitalize | Massoterapia e Terapias Integrativas em São Miguel Paulista",
  description:
    "Na Zilker Vitalize, cada atendimento é pensado para proporcionar relaxamento, saúde, equilíbrio energético e qualidade de vida através da massoterapia e terapias integrativas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
