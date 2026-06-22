import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";

export default function DocsHome() {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/logo-DS.png"
            alt="DS Design & Motion"
            width={48}
            height={48}
            className="w-12 h-12 invert"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">
              DS Design & Motion
            </h1>
            <p className="text-sm text-zinc-600">Brand System</p>
          </div>
        </div>
        <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
          Design, motion e vídeo para eventos que precisam comunicar com
          clareza, impacto e padrão profissional.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {navigation.map((section) => (
          <div
            key={section.label}
            className="bg-surface rounded-xl border border-white/5 p-5"
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-3">
              {section.label}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-accent transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
