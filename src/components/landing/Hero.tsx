import Image from "next/image";
import { MessageCircle, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#111111]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <Image
          src="/logo-DS.png"
          alt="DS Design & Motion"
          width={120}
          height={120}
          className="w-24 sm:w-32 lg:w-36 h-auto invert mb-10"
          priority
        />

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 max-w-5xl">
          <span className="text-white">DESIGN,</span>
          <br />
          <span className="text-accent">MOTION</span>
          <span className="text-white"> &</span>
          <br />
          <span className="text-white">VÍDEO PARA</span>
          <br />
          <span className="text-white font-light italic">EVENTOS</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-500 leading-relaxed mb-10 max-w-xl">
          Transformo a comunicação visual do seu evento em peças organizadas,
          profissionais e prontas para divulgação — do post ao telão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="https://wa.me/5581998290196?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-black font-semibold px-7 py-4 rounded-xl hover:bg-accent-dark transition-colors text-sm"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 border border-white/10 text-zinc-400 font-medium px-7 py-4 rounded-xl hover:border-white/20 hover:text-white transition-colors text-sm"
          >
            Conhecer serviços
          </a>
        </div>

        <a
          href="#servicos"
          className="inline-flex items-center gap-2 text-zinc-600 text-xs uppercase tracking-widest hover:text-accent transition-colors"
        >
          <ArrowDown size={14} />
          Scroll
        </a>
      </div>
    </section>
  );
}
