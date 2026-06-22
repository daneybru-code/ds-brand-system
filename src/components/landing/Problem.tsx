export default function Problem() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              O problema
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Seu evento tem conteúdo.
              <br />
              <span className="text-zinc-500">Mas como ele aparece?</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-md">
              A maioria dos eventos tem informação boa, público interessado e
              conteúdo relevante. O que falta é uma comunicação visual que
              organize tudo isso com clareza e profissionalismo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Peças soltas",
                text: "Sem identidade visual unificada",
              },
              {
                num: "02",
                title: "Briefing perdido",
                text: "Informação espalhada, retrabalho constante",
              },
              {
                num: "03",
                title: "Prazo apertado",
                text: "Urgência compromete a qualidade",
              },
              {
                num: "04",
                title: "Visual amador",
                text: "Perde credibilidade antes de começar",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-surface-light border border-white/5 rounded-2xl p-6"
              >
                <span className="text-accent text-xs font-bold">
                  {item.num}
                </span>
                <h3 className="font-semibold text-white mt-2 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
