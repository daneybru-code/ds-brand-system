const steps = [
  {
    step: "01",
    title: "Contato",
    description: "Você me conta sobre o evento e o que precisa.",
  },
  {
    step: "02",
    title: "Briefing",
    description: "Organizo todas as informações do projeto.",
  },
  {
    step: "03",
    title: "Proposta",
    description: "Entregáveis, prazo, valor — tudo definido.",
  },
  {
    step: "04",
    title: "Criação",
    description: "Design, prévia e rodada de ajustes.",
  },
  {
    step: "05",
    title: "Entrega",
    description: "Arquivos finais organizados por formato.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Processo
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Como <span className="text-zinc-500">funciona</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col sm:items-center text-left sm:text-center py-6 sm:py-0">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-5 left-1/2 w-full h-px bg-white/5" />
              )}

              <div className="relative w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center text-sm font-bold mb-4 shrink-0">
                {step.step}
              </div>

              <h3 className="font-semibold text-white text-sm mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-zinc-500 max-w-[160px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
