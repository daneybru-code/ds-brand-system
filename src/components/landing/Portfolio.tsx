export default function Portfolio() {
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
            Projetos que mostram como organizo a comunicação visual de eventos —
            do briefing à entrega.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-surface-light border border-white/5 rounded-2xl flex items-center justify-center group hover:border-accent/20 transition-colors"
            >
              <span className="text-sm text-zinc-600 group-hover:text-zinc-500 transition-colors">
                Em breve
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
