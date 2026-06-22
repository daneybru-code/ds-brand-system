import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-surface border border-white/5 rounded-3xl p-10 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

          <div className="relative flex flex-col lg:flex-row items-center gap-10">
            <div className="shrink-0">
              <Image
                src="/foto-daniel.jpg"
                alt="Daniel Silva"
                width={180}
                height={180}
                className="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Vamos organizar a comunicação visual do seu evento?
              </h2>
              <p className="text-zinc-500 mb-8 max-w-lg">
                Me conta sobre o projeto. Respondo em até 24h com uma proposta
                clara — escopo, prazo, valor e condições definidos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5581998290196?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-black font-semibold px-7 py-4 rounded-xl hover:bg-accent-dark transition-colors text-sm"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
                <a
                  href="tel:+5581998290196"
                  className="inline-flex items-center justify-center gap-2 border border-white/10 text-zinc-400 font-medium px-7 py-4 rounded-xl hover:border-white/20 hover:text-white transition-colors text-sm"
                >
                  (81) 99829-0196
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
