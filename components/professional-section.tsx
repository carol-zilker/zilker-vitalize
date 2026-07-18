import Image from "next/image";
import { SectionBadge } from "@/components/section-badge";

export function ProfessionalSection() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/professional.png"
            alt="Yngrid Zilker, massoterapeuta"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>

        <div className="flex flex-col items-start gap-5">
          <SectionBadge>A Profissional</SectionBadge>
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Conheça Yngrid Zilker</h2>
          <p className="leading-relaxed text-muted-foreground">
            Meu nome é Yngrid Zilker Arce de Souza e sou Massoterapeuta profissional há mais de 2 anos.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Iniciei minha formação em Massoterapia pelo SENAC e, paralelamente, realizei
            especialização através do curso Terapeuta Oriental.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Ao longo da minha trajetória, atuei em diversas empresas realizando massagens
            terapêuticas e promovendo bem-estar para colaboradores e clientes. Atualmente realizo
            atendimentos em meu espaço terapêutico três vezes por semana, oferecendo massagens
            relaxantes, modeladoras, pedras quentes, ventosaterapia e escalda-pés.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Também atuo duas vezes por semana prestando massagens terapêuticas para funcionários de
            uma instituição bancária, contribuindo para a saúde física e emocional no ambiente
            corporativo.
          </p>

          <blockquote className="mt-2 rounded-2xl border border-border bg-card px-6 py-5">
            <p className="font-heading text-lg leading-snug text-foreground italic">
              &ldquo;Promover equilíbrio, saúde e qualidade de vida através de terapias humanizadas e
              personalizadas.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Nossa Missão
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
