// File: constant/navConfig.ts

export const navigation: {
  name: string;
  id: string;
  type?: 'scroll' | 'link';
  href?: string;
}[] = [
  { name: "ABOUT", id: "about", type: "scroll" },
  { name: "AGENT PRECISION", id: "agent-precision", type: "scroll" },
  { name: "ROADMAP", id: "roadmap", type: "scroll" },
  { name: "OUR NETWORK", id: "partners", type: "scroll" },
  { name: "STAKING", id: "staking", type: "link", href: "/under-maintenance" },
  { name: "NFT", id: "nft", type: "link", href: "/under-maintenance" },
  { name: "LITEPAPER", id: "litepaper", type: "link", href: "https://agent-precision.gitbook.io/skor-ai" },
];
