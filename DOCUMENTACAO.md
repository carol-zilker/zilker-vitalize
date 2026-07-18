# Zilker Vitalize — Documentação do Projeto

Documentação do que foi feito para replicar o site [v0-zilker-vitalize.vercel.app](https://v0-zilker-vitalize.vercel.app/) como um projeto próprio, versionado no GitHub e publicado na Vercel.

## Links

| O que | Link |
|---|---|
| Site em produção | https://zilker-vitalize.vercel.app |
| Repositório GitHub | https://github.com/carol-zilker/zilker-vitalize |
| Painel do projeto na Vercel | https://vercel.com/caroline-zilker-s-projects/zilker-vitalize |

O site foi originalmente criado no [v0.dev](https://v0.dev) (ferramenta da Vercel para gerar apps a partir de prompts) e publicado num domínio `.vercel.app` que não tinha repositório GitHub nem projeto Vercel próprio associado — ou seja, não dava pra editar o código-fonte nem redeploy diretamente. Este projeto recria o mesmo site do zero, como código-fonte de verdade, ligado à sua conta do GitHub e da Vercel.

## O que foi feito

1. **Extração do conteúdo** — Visitei o site original e extraí todos os textos, cores, fontes, imagens e links (WhatsApp, Instagram, endereço, perguntas do FAQ) diretamente da página renderizada.
2. **Novo projeto Next.js** — Criado do zero com `create-next-app` (Next.js 16, App Router, TypeScript, Tailwind CSS 4).
3. **Recriação das seções** — Cada seção do site (topo, sobre, profissional, espaço, serviços, terapias em destaque, diferenciais, depoimentos, resultados, FAQ, contato, rodapé) foi recriada como um componente React, com o mesmo texto e a mesma paleta de cores do site original.
4. **Imagens** — Baixadas do site original (`logo`, `hero-spa`, `space-1`, `space-2`, `professional`, `client-1`) e salvas em `public/images/`.
5. **Repositório GitHub** — Criado `carol-zilker/zilker-vitalize` (público) e o código enviado (`git push`).
6. **Deploy na Vercel** — Projeto conectado ao repositório do GitHub. A partir de agora, **todo `git push` na branch `master` gera um novo deploy automaticamente**.

## Stack técnica

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** (tokens de cor via CSS variables em `app/globals.css`)
- **lucide-react** (ícones)
- Fontes do Google: **Playfair Display** (títulos) e **Inter** (texto)

## Estrutura de pastas

```
zilkervitalize/
├── app/
│   ├── layout.tsx        # fontes, metadata (título/descrição da aba)
│   ├── page.tsx           # monta todas as seções na ordem
│   └── globals.css        # cores, tema, tipografia
├── components/
│   ├── site-header.tsx    # menu do topo (fixo, com versão mobile)
│   ├── hero-section.tsx   # banner principal
│   ├── about-section.tsx  # "A Marca"
│   ├── professional-section.tsx # "A Profissional" (Yngrid)
│   ├── space-section.tsx  # "Nosso Espaço"
│   ├── services-section.tsx     # grade com os 11 serviços
│   ├── therapies-section.tsx    # 3 terapias em destaque
│   ├── differentials-section.tsx
│   ├── testimonials-section.tsx
│   ├── results-section.tsx
│   ├── cta-section.tsx
│   ├── faq-section.tsx    # perguntas frequentes (clique pra abrir/fechar)
│   ├── contact-section.tsx
│   ├── site-footer.tsx
│   ├── section-badge.tsx  # selo pequeno usado no topo de cada seção
│   └── icons.tsx          # ícone do Instagram (desenhado à mão)
├── lib/
│   └── constants.ts        # WhatsApp, Instagram, endereço, links do menu
└── public/images/           # fotos e logo
```

## Onde editar as informações do negócio

Praticamente todo dado de contato (WhatsApp, Instagram, endereço) está centralizado em **[lib/constants.ts](./lib/constants.ts)** — trocar ali atualiza o site inteiro automaticamente.

Os textos de cada seção (serviços, terapias, depoimento, FAQ etc.) estão dentro do respectivo arquivo em `components/`, direto no código, como listas simples no topo de cada arquivo.

## Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Como publicar uma alteração

Como o repositório já está conectado à Vercel, basta enviar a alteração pro GitHub:

```bash
git add -A
git commit -m "descreva o que mudou"
git push
```

Em 1–2 minutos a Vercel gera o novo deploy automaticamente e o site em produção é atualizado.

## Observações

- O domínio atual é o gratuito da Vercel (`zilker-vitalize.vercel.app`). Um domínio próprio (ex: `zilkervitalize.com.br`) pode ser adicionado depois nas configurações do projeto na Vercel, em **Settings → Domains**.
- O repositório é público. Se preferir deixá-lo privado, dá pra mudar em **Settings → General → Danger Zone** no GitHub (o deploy na Vercel continua funcionando normalmente).
