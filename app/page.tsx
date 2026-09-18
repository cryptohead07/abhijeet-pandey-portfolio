"use client";

import { Mail } from "lucide-react";
import { useEffect, type CSSProperties } from "react";
import { projects } from "./lib/projects";

type BrandIconProps = { size?: number; strokeWidth?: number };

const GitHubIcon = ({ size = 18 }: BrandIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>;
const LinkedInIcon = ({ size = 18 }: BrandIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M5.27 3.5A1.77 1.77 0 1 1 1.73 3.5a1.77 1.77 0 0 1 3.54 0ZM2.1 6.65h3.35V21H2.1V6.65ZM7.55 6.65h3.2v1.96h.05c.45-.85 1.53-2.36 3.7-2.36 3.96 0 4.69 2.6 4.69 5.98V21h-3.34v-7.75c0-1.85-.03-4.23-2.58-4.23-2.59 0-2.99 2.01-2.99 4.1V21H6.94V6.65h.61Z" /></svg>;
const InstagramIcon = ({ size = 18 }: BrandIconProps) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg>;

const links = [
  { label: "Email", href: "mailto:devabhijeetpandey@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/cryptohead07", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cryptohead07", icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/cryptohead07", icon: InstagramIcon },
];

function Fireflies({ className = "", count = 20 }: { className?: string; count?: number }) {
  return <div className={`fireflies ${className}`} aria-hidden="true">{Array.from({ length: count }, (_, i) => <i key={i} style={{ "--x": `${(i * 37 + 7) % 100}%`, "--y": `${(i * 53 + 11) % 100}%`, "--delay": `${-(i % 7) * .48}s`, "--duration": `${3.9 + (i % 5) * .42}s` } as CSSProperties} />)}</div>;
}

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="site-header">
      <Fireflies className="header-fireflies" count={24} />
      <a className="wordmark" href="#top">ABHIJEET<span>·</span>PANDEY</a>
      <nav aria-label="Primary navigation"><a href="#work">The portfolio</a><a href="#about">The atelier</a><a href="#contact">Correspondence</a></nav>
      <div className="header-actions"><a className="header-social" href="https://github.com/cryptohead07" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={17} /></a><a className="header-cta" href="#contact">Begin a commission</a></div>
    </header>

    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">Independent product house · 2026</p>
        <h1 id="hero-title"><span className="hero-word">Founder.</span><span className="hero-word">Developer.</span><em className="hero-word">Product.</em><em className="hero-word">Builder.</em></h1>
        <p className="hero-intro">I build digital products, software, systems, and experiences that turn real problems into useful things.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore the portfolio</a><div className="social-row" aria-label="Contact links">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label}><Icon size={19} strokeWidth={1.7} /></a>)}</div></div>
      </div>
      <div className="hero-art" aria-hidden="true" data-reveal><div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>AP</span><small>From signal<br />to system</small></div><p className="art-label">Digital craft / product thinking</p></div>
      <aside className="hero-notes" aria-label="About Abhijeet" data-reveal><div className="note-hop"><p className="eyebrow">Principle</p><p>Useful, considered work that earns its place.</p></div><div className="note-hop"><p className="eyebrow">Currently</p><p>Shipping software, commerce, and AI-led tools.</p></div><div className="note-hop"><p className="eyebrow">Based in</p><p>Chennai, India<br />Working globally.</p></div></aside>
    </section>

    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="section-top" data-reveal><p className="eyebrow">01 / The portfolio</p><h2 id="work-title">Curated works.<br /><em>Crafted to endure.</em></h2></div>
      <div className="project-grid">{projects.map((project, index) => <article className={`project project-${project.slug}`} key={project.slug} data-reveal><a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><img src={project.image} alt={`${project.name} homepage`} /><span className="project-index">0{index + 1}</span><span className="image-visit">Visit site</span></a><div className="project-copy"><div><p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3></div><p>{project.description}</p><div className="project-meta">{project.role && <span>{project.role}</span>}{project.year && <span>{project.year}</span>}{project.technologies?.map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>)}</div>
    </section>

    <section className="about section" id="about" aria-labelledby="about-title"><p className="eyebrow" data-reveal>02 / The atelier</p><div data-reveal><h2 id="about-title">A considered approach to <em>making.</em></h2><p>I move between strategy, experience design, and engineering to make ideas tangible. I’m currently studying at SRMIST KTR; the work stays at the center.</p></div></section>
    <section className="capabilities section" aria-labelledby="capabilities-title"><p className="eyebrow" data-reveal>03 / The craft</p><div data-reveal><h2 id="capabilities-title">An exacting approach to making.</h2><ul><li><span>01</span>Software &amp; web development</li><li><span>02</span>Product engineering</li><li><span>03</span>UI/UX &amp; product design</li><li><span>04</span>AI &amp; automation</li><li><span>05</span>Product strategy</li></ul></div></section>
    <section className="lab section" data-reveal><p className="eyebrow">04 / The laboratory</p><div><h2>Experiments<br /><em>in progress.</em></h2><p>SafePlate AI is an early product exploring ingredient-led food decisions, dog profiles, and safer everyday feeding routines.</p><span className="status-pill">In development</span></div></section>
    <section className="contact section" id="contact" aria-labelledby="contact-title" data-reveal><p className="eyebrow">05 / Correspondence</p><h2 id="contact-title">Have a problem<br />worth <em>building for?</em></h2><div className="contact-links">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><Icon size={19} strokeWidth={1.7} /><span>{label}</span></a>)}</div></section>

    <footer><Fireflies className="footer-fireflies" count={42} /><div className="footer-brand"><a className="wordmark" href="#top">ABHIJEET<span>·</span>PANDEY</a><p>Building deliberate digital products from Chennai, India.</p></div><div className="footer-links"><p className="eyebrow">Navigate</p><a href="#work">The portfolio</a><a href="#about">The atelier</a><a href="#contact">Correspondence</a></div><div className="footer-links"><p className="eyebrow">Elsewhere</p>{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><Icon size={15} strokeWidth={1.7} />{label}</a>)}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Abhijeet Pandey</span><a href="#top">Back to top</a></div></footer>
  </main>;
}
