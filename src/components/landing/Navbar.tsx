"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-DS.png"
            alt="DS Design & Motion"
            width={32}
            height={32}
            className="w-8 h-8 invert"
          />
          <span className="font-semibold text-white text-sm tracking-wide hidden sm:block">
            DS Design & Motion
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581998290196?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-accent text-black px-5 py-2 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Fale comigo
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-zinc-400 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581998290196?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold bg-accent text-black px-5 py-2.5 rounded-lg text-center"
          >
            Fale comigo
          </a>
        </div>
      )}
    </header>
  );
}
