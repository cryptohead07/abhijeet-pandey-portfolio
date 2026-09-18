export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  role?: string;
  year?: string;
  technologies?: string[];
  href?: string;
  visual: "ostryn" | "skarve" | "safeplate" | "icpc";
};

export const projects: Project[] = [
  {
    slug: "ostryn",
    name: "Ostryn",
    eyebrow: "Product exploration",
    description: "A product in the portfolio system, ready for its case-study context.",
    visual: "ostryn",
  },
  {
    slug: "skarve",
    name: "SKARVÉ",
    eyebrow: "VibTish Ventures · premium streetwear",
    description: "A premium streetwear storefront built around considered product detail and a connected commerce system.",
    role: "Founder · Product builder",
    technologies: ["Next.js", "Tailwind CSS", "Payload CMS", "Cloudflare"],
    visual: "skarve",
  },
  {
    slug: "safeplate-ai",
    name: "SafePlate AI",
    eyebrow: "Safety-first dog-feeding coach",
    description: "An early product for ingredient-led food decisions, dog profiles, meal history, and safer everyday feeding routines.",
    role: "Founder · Product builder",
    technologies: ["React", "Vite", "Cloudflare Workers", "SwiftUI"],
    visual: "safeplate",
  },
  {
    slug: "icpc-2026",
    name: "ICPC Chennai 2026",
    eyebrow: "ICPC Chennai Region · SRMIST",
    description: "A content-led regional programming contest website with registration information, event content, and hand-managed publishing.",
    year: "2026",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    href: "https://icpcchennai.vercel.app",
    visual: "icpc",
  },
];
