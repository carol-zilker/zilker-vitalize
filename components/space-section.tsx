import Image from "next/image";
import { SectionBadge } from "@/components/section-badge";

export function SpaceSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <SectionBadge>Nosso Espaço</SectionBadge>
        <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
          Um refúgio pensado para o seu relaxamento
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2">
        <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/space-1.png"
            alt="Ambiente acolhedor Zilker Vitalize"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 640px) 45vw, 90vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-sm font-medium text-white">
            Ambiente acolhedor
          </figcaption>
        </figure>
        <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/space-2.png"
            alt="Espaço preparado para o bem-estar"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 640px) 45vw, 90vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-sm font-medium text-white">
            Espaço preparado para seu bem-estar
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
