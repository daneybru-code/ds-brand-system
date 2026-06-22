export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    label: "Fundação",
    items: [
      { title: "Visão Geral", href: "/visao-geral" },
      { title: "Posicionamento", href: "/posicionamento" },
      { title: "Tom de Voz", href: "/tom-de-voz" },
    ],
  },
  {
    label: "Serviços",
    items: [
      {
        title: "Serviços",
        href: "/servicos",
        children: [
          { title: "Design", href: "/servicos/design" },
          { title: "Impressos", href: "/servicos/impressos" },
          { title: "Motion", href: "/servicos/motion" },
          { title: "Vídeo", href: "/servicos/video" },
        ],
      },
      { title: "Pacotes", href: "/pacotes" },
    ],
  },
  {
    label: "Operação",
    items: [
      { title: "Processo", href: "/processo" },
      { title: "Briefing", href: "/briefing" },
      { title: "Checklist", href: "/checklist" },
      { title: "Scripts", href: "/scripts" },
    ],
  },
  {
    label: "Sistema",
    items: [
      { title: "Sistema de IA", href: "/sistema-ia" },
      { title: "Organização", href: "/organizacao" },
      { title: "Regras Comerciais", href: "/regras-comerciais" },
    ],
  },
];
