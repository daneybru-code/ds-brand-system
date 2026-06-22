import { Palette, Printer, Film, Video } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design para Eventos",
    items: [
      "Save the date",
      "Posts e stories",
      "Banners e WhatsApp",
      "Programação visual",
      "Telas de abertura",
    ],
  },
  {
    icon: Printer,
    title: "Impressos",
    items: [
      "Crachás e credenciais",
      "Certificados",
      "Fichas de palco",
      "Backdrop e banners",
      "Sinalização",
    ],
  },
  {
    icon: Film,
    title: "Motion Design",
    items: [
      "Vinhetas e aberturas",
      "Chamadas animadas",
      "Lower thirds",
      "Telas para telão",
      "Posts animados",
    ],
  },
  {
    icon: Video,
    title: "Edição de Vídeo",
    items: [
      "Corte e ritmo",
      "Legendas e trilha",
      "Identidade no vídeo",
      "Reels e Stories",
      "Versões WhatsApp",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Serviços
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Do <span className="text-accent">post</span> ao{" "}
              <span className="text-accent">movimento</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
            Cada evento tem necessidades diferentes. Crio a comunicação visual
            completa — digital, impressa e audiovisual.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface border border-white/5 rounded-2xl p-7 hover:border-accent/20 transition-colors"
            >
              <service.icon
                size={28}
                className="text-accent mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-base font-semibold text-white mb-5">
                {service.title}
              </h3>
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-500 flex items-start gap-2"
                  >
                    <span className="w-1 h-1 bg-accent/50 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
