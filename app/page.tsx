import { projects } from "./lib/projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">ABHIJEET<span>·</span>PANDEY</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://github.com/cryptohead07" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="eyebrow">VibTish Ventures / 2026</p>
          <h1 id="hero-title">Founder.<br />Developer.<br /><em>Product Builder.</em></h1>
          <p className="hero-intro">I build digital products, software, systems, and experiences that turn real problems into useful things.</p>
          <a className="button button-primary" href="#work">View selected work <span>↓</span></a>
        </div>
        <div className="portrait-slot reveal" aria-label="Portrait placeholder for Abhijeet Pandey">
          <div className="portrait-monogram">AP</div>
          <p>Portrait coming soon</p>
          <span className="portrait-index">01 / 01</span>
        </div>
        <aside className="hero-notes reveal" aria-label="About Abhijeet">
          <div><p className="eyebrow">About</p><p>Building at the intersection of technology, design, and business.</p></div>
          <div><p className="eyebrow">Currently</p><p>Founder — VibTish Ventures</p></div>
          <div><p className="eyebrow">Connect</p><a href="https://github.com/cryptohead07" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/cryptohead07" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </aside>
      </section>

      <section className="work section" id="work" aria-labelledby="work-title">
        <div className="section-top"><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Products with<br /><em>an edge of intent.</em></h2></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.slug}>
              <div className={`project-visual ${project.visual}`} aria-hidden="true"><span>{project.name}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
              <div className="project-copy"><div><p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3></div><p>{project.description}</p>
                <div className="project-meta">{project.role && <span>{project.role}</span>}{project.year && <span>{project.year}</span>}{project.technologies?.map((tech) => <span key={tech}>{tech}</span>)}</div>
                {project.href && <a className="inline-link" href={project.href} target="_blank" rel="noreferrer">Visit project <Arrow /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <p className="eyebrow">02 / About</p>
        <div><h2 id="about-title">I identify problems, understand systems, design solutions, then <em>build, ship, and iterate.</em></h2><p>Through VibTish Ventures and independent product work, I move between strategy, experience design, and engineering to make ideas tangible. I’m currently studying at SRMIST KTR; the work stays at the center.</p></div>
      </section>

      <section className="capabilities section" aria-labelledby="capabilities-title"><p className="eyebrow">03 / Capabilities</p><h2 id="capabilities-title">What I bring to the build.</h2><ul><li>Software &amp; web development</li><li>Product engineering</li><li>UI/UX &amp; product design</li><li>AI &amp; automation</li><li>Product strategy</li></ul></section>

      <section className="lab section"><p className="eyebrow">04 / Lab</p><div><h2>Experiments<br /><em>in progress.</em></h2><p>A space for interfaces, prototypes, and practical ideas that are still becoming.</p></div></section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Have a problem<br />worth <em>building for?</em></h2><div className="contact-links"><a className="button button-primary" href="mailto:vibtishventures@gmail.com">Start a conversation <Arrow /></a><a className="inline-link" href="mailto:vibtishventures@gmail.com">Email <Arrow /></a><a className="inline-link" href="https://github.com/cryptohead07" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a className="inline-link" href="https://www.linkedin.com/in/cryptohead07" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></section>

      <footer><span>© {new Date().getFullYear()} Abhijeet Pandey</span><span>VibTish Ventures</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
