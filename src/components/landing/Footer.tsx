import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-DS.png"
                alt="DS Design & Motion"
                width={28}
                height={28}
                className="w-7 h-7 invert"
              />
              <span className="font-semibold text-white text-sm">
                DS Design & Motion
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Comunicação visual para eventos.
              <br />
              Design, motion e vídeo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>Design para Eventos</li>
              <li>Impressos</li>
              <li>Motion Design</li>
              <li>Edição de Vídeo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="text-zinc-600 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-zinc-600 hover:text-accent transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#pacotes" className="text-zinc-600 hover:text-accent transition-colors">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#processo" className="text-zinc-600 hover:text-accent transition-colors">
                  Processo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+5581998290196"
                  className="flex items-center gap-2 text-zinc-600 hover:text-accent transition-colors"
                >
                  <Phone size={14} />
                  (81) 99829-0196
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dsdesignemotion.com"
                  className="flex items-center gap-2 text-zinc-600 hover:text-accent transition-colors"
                >
                  <Mail size={14} />
                  contato@dsdesignemotion.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center text-xs text-zinc-700">
          &copy; {new Date().getFullYear()} DS Design & Motion
        </div>
      </div>
    </footer>
  );
}
