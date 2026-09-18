export type Project = { slug: string; name: string; eyebrow: string; description: string; role?: string; year?: string; technologies?: string[]; href: string; image: string };

export const projects: Project[] = [
  { slug: "ostryn", name: "Ostryn", eyebrow: "Software systems", description: "A software studio building ERP systems, AI automation, and full-stack products for schools, institutions, and SMBs.", role: "Founder & CEO", technologies: ["Next.js", "React", "Tailwind CSS", "Cloudflare"], href: "https://vibtish-tech.pages.dev", image: "/projects/ostryn-landing.png" },
  { slug: "skarve", name: "SKARVÉ", eyebrow: "Premium streetwear", description: "A premium streetwear storefront built around considered product detail and a connected commerce system.", role: "Founder · Product builder", technologies: ["Next.js", "Tailwind CSS", "Payload CMS", "Cloudflare"], href: "https://skarve-store.pages.dev", image: "/projects/skarve-landing.png" },
  { slug: "icpc-2026", name: "ICPC Chennai 2026", eyebrow: "Regional programming contest", description: "A content-led regional programming contest website with registration information, event content, and hand-managed publishing.", year: "2026", technologies: ["Next.js", "Tailwind CSS", "Vercel"], href: "https://icpcchennai.vercel.app", image: "/projects/icpc-landing.png" },
];
