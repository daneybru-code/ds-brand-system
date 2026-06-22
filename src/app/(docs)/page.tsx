import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function DocsHome() {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">DS</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              DS Design & Motion
            </h1>
            <p className="text-sm text-zinc-500">Brand System</p>
          </div>
        </div>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
          Design, motion e vídeo para eventos que precisam comunicar com
          clareza, impacto e padrão profissional.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {navigation.map((section) => (
          <div
            key={section.label}
            className="bg-white rounded-xl border border-zinc-200 p-5"
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              {section.label}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-700 hover:text-blue-600 transition-colors"
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
