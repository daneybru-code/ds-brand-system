"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const projects = [
  {
    title: "II Simpósio Oncoderma Recife",
    type: "Simpósio médico — Dermatologia oncológica",
    deliverables: "Telão, backdrop, banner, totem",
    image: "/trabalhos/eventos/oncoderma-palco.jpg",
  },
  {
    title: "II Simpósio Oncoderma — Backdrop",
    type: "Simpósio médico — Dermatologia oncológica",
    deliverables: "Backdrop com patrocinadores",
    image: "/trabalhos/eventos/oncoderma-backdrop.jpg",
  },
  {
    title: "XVI Congresso Uro-Oncologia",
    type: "Congresso médico — Ricardo Brennand",
    deliverables: "Telão, totem, identidade do evento",
    image: "/trabalhos/eventos/uro-oncologia-palco.jpg",
  },
  {
    title: "XVI Congresso Uro-Oncologia — Backdrop",
    type: "Congresso médico — Recife Detroit",
    deliverables: "Backdrop com patrocinadores",
    image: "/trabalhos/eventos/uro-oncologia-backdrop.jpg",
  },
  {
    title: "II Simpósio Recife Tórax",
    type: "Simpósio médico — Cirurgia torácica",
    deliverables: "Palco, telão, backdrop iluminado",
    image: "/trabalhos/eventos/recife-torax-palco.jpg",
  },
  {
    title: "Recife Tórax — Backdrop",
    type: "Simpósio médico — Cirurgia torácica",
    deliverables: "Backdrop com patrocinadores",
    image: "/trabalhos/eventos/recife-torax-backdrop.jpg",
  },
  {
    title: "Seminário Reforma Tributária",
    type: "Seminário jurídico — Castro e Silva Galvão",
    deliverables: "Telão, banners laterais, identidade",
    image: "/trabalhos/eventos/reforma-tributaria-palco.jpg",
  },
  {
    title: "Reforma Tributária — Banner",
    type: "Seminário jurídico — Castro e Silva Galvão",
    deliverables: "Banner digital e impresso",
    image: "/trabalhos/eventos/reforma-tributaria-banner.jpg",
  },
  {
    title: "III Simpósio Oncologia Gastrointestinal",
    type: "Simpósio médico — Oncologia GI",
    deliverables: "Telão, palco, identidade visual",
    image: "/trabalhos/eventos/oncologia-gi-palco.jpg",
  },
  {
    title: "Oncologia GI — Detalhe",
    type: "Simpósio médico — Oncologia GI",
    deliverables: "Material de divulgação",
    image: "/trabalhos/eventos/oncologia-gi-detalhe.jpg",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Portfólio
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Trabalhos <span className="text-zinc-500">realizados</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
            Eventos reais com comunicação visual completa — telão, backdrop,
            banners, totens e identidade visual.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all text-left"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-xs">{project.type}</p>
                <p className="text-accent text-xs mt-1">
                  {project.deliverables}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[85vh]">
              <Image
                src={projects[selected].image}
                alt={projects[selected].title}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold">
                  {projects[selected].title}
                </h3>
                <p className="text-zinc-500 text-sm">
                  {projects[selected].type}
                </p>
                <p className="text-accent text-sm mt-1">
                  {projects[selected].deliverables}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors text-lg"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
