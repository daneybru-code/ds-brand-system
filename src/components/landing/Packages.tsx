import { Check } from "lucide-react";
import clsx from "clsx";

const packages = [
  {
    name: "Campanha Essencial",
    forWho: "Eventos pequenos, workshops, palestras.",
    items: [
      "1 direção visual simples",
      "1 post feed + 1 story",
      "1 arte para WhatsApp",
      "1 legenda base",
      "1 rodada de ajuste",
    ],
    deadline: "3–5 dias úteis",
    featured: false,
  },
  {
    name: "Evento Profissional",
    forWho: "Comunicação completa e consistente.",
    items: [
      "Key visual do evento",
      "Save the date",
      "3 posts feed + 3 stories",
      "Crachá + Certificado + Ficha",
      "Tela de abertura",
      "2 rodadas de ajuste",
    ],
    deadline: "7–12 dias úteis",
    featured: true,
  },
  {
    name: "Premium Motion",
    forWho: "Máximo impacto com motion e vídeo.",
    items: [
      "Tudo do Evento Profissional",
      "1 vinheta ou chamada animada",
      "1 post ou story animado",
      "1 tela animada para telão",
      "Lettering simples",
      "2 rodadas de ajuste",
    ],
    deadline: "12–18 dias úteis",
    featured: false,
  },
];

export default function Packages() {
  return (
    <section id="pacotes" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Pacotes
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Escopo claro.
            <br />
            <span className="text-zinc-500">Sem surpresas.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={clsx(
                "relative rounded-2xl p-8 flex flex-col",
                pkg.featured
                  ? "bg-accent text-black"
                  : "bg-surface border border-white/5"
              )}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-6 bg-black text-accent text-xs font-bold px-3 py-1 rounded-full">
                  + contratado
                </div>
              )}

              <h3
                className={clsx(
                  "text-lg font-bold mb-1",
                  pkg.featured ? "text-black" : "text-white"
                )}
              >
                {pkg.name}
              </h3>
              <p
                className={clsx(
                  "text-sm mb-7",
                  pkg.featured ? "text-black/60" : "text-zinc-500"
                )}
              >
                {pkg.forWho}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={clsx(
                        "mt-0.5 shrink-0",
                        pkg.featured ? "text-black/40" : "text-accent/60"
                      )}
                    />
                    <span
                      className={
                        pkg.featured ? "text-black/80" : "text-zinc-400"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={clsx(
                  "text-xs mb-5",
                  pkg.featured ? "text-black/40" : "text-zinc-600"
                )}
              >
                Prazo: {pkg.deadline}
              </p>

              <a
                href="https://wa.me/5581998290196?text=Ol%C3%A1!%20Tenho%20interesse%20no%20pacote%20{pkg.name}."
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "block text-center text-sm font-semibold py-3.5 rounded-xl transition-colors",
                  pkg.featured
                    ? "bg-black text-accent hover:bg-black/80"
                    : "bg-accent text-black hover:bg-accent-dark"
                )}
              >
                Solicitar orçamento
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-600 mt-10">
          Também ofereço{" "}
          <strong className="text-zinc-400">Comunicação Mensal</strong> para
          eventos recorrentes.{" "}
          <a
            href="https://wa.me/5581998290196?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20o%20pacote%20mensal."
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Fale comigo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
