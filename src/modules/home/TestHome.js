import React, { useEffect, useRef, useState } from "react";
import { items, projects } from "./data";
import "./TestHome.css";

const projectDetails = [
  {
    description:
      "Course access, learning materials, and student–teacher communication in one platform. I worked across the interface and application structure.",
    visual: "learning",
    coverTitle: "eplatforma.mk",
    coverLabel: "Education platform",
    coverRole: "Full stack / product",
    number: "01",
    url: "https://www.eplatforma.mk",
    status: "active",
    contribution: "full-project",
  },
  {
    description:
      "A portal for submitting requests to the Agency of Real Estate Cadastre. I worked across the service flow, frontend, and supporting application logic.",
    visual: "portal",
    coverTitle: "E-Services",
    coverLabel: "Public services",
    coverRole: "Full stack / services",
    number: "02",
    url: "https://e-uslugi.katastar.gov.mk",
    status: "shipped",
    contribution: "full-project",
  },
  {
    description:
      "Frontend implementation of Aucta’s company website, including responsive layouts and a clearer presentation of the company’s work.",
    visual: "aucta",
    coverTitle: "Aucta",
    coverLabel: "Company website",
    coverRole: "Frontend / web",
    number: "03",
    url: "https://aucta.dev",
    status: "shipped",
    contribution: "frontend",
  },
  {
    description:
      "A ferry booking system covering schedules, reservation steps, and transaction details. I worked across the booking journey and supporting screens.",
    visual: "ferry",
    coverTitle: "Ferry",
    coverLabel: "Booking system",
    coverRole: "Full stack / booking",
    number: "04",
    status: "shipped",
    contribution: "full-project",
  },
];

const statusFolders = [
  { value: "all", label: "All work" },
  { value: "active", label: "Active" },
  { value: "shipped", label: "Shipped" },
];

const scopeFolders = [
  { value: "all", label: "All scopes" },
  { value: "full-project", label: "Full project" },
  { value: "frontend", label: "Frontend" },
];

const socialShortcuts = [
  { key: "L", name: "LinkedIn" },
  { key: "G", name: "GitHub" },
  { key: "B", name: "Behance" },
];

const skopjeTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Skopje",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZoneName: "shortOffset",
});

function getSkopjeClock() {
  const parts = Object.fromEntries(
    skopjeTimeFormatter.formatToParts(new Date()).map(({ type, value }) => [type, value])
  );
  return { hours: parts.hour, minutes: parts.minute, offset: parts.timeZoneName };
}

function ProjectDiagram({ visual }) {
  if (visual === "learning") {
    return <svg viewBox="0 0 320 90" fill="none" aria-hidden="true">
      <path className="test-learning-link" d="M55 45H116M204 45H265" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
      <circle className="test-learning-packet test-learning-packet--forward" cx="60" cy="45" r="3" fill="currentColor" />
      <circle className="test-learning-packet test-learning-packet--backward" cx="260" cy="45" r="3" fill="currentColor" />
      <circle cx="38" cy="45" r="17" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="282" cy="45" r="17" stroke="currentColor" strokeWidth="1.5" />
      <rect x="116" y="20" width="88" height="50" rx="25" stroke="currentColor" strokeWidth="1.5" />
      <text x="38" y="49" textAnchor="middle">T</text><text x="160" y="49" textAnchor="middle">↔</text><text x="282" y="49" textAnchor="middle">S</text>
    </svg>;
  }
  if (visual === "portal") {
    return <svg viewBox="0 0 320 90" fill="none" aria-hidden="true">
      <rect x="47" y="16" width="48" height="58" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M57 29H84M57 38H80M57 47H84" stroke="currentColor" strokeWidth="1.5" />
      <path className="test-portal-arrow" d="M116 45H188M177 35L188 45L177 55" stroke="currentColor" strokeWidth="1.5" />
      <rect x="211" y="16" width="62" height="58" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path className="test-portal-check" d="M223 47L233 57L258 32" stroke="currentColor" strokeWidth="1.8" />
    </svg>;
  }
  if (visual === "aucta") {
    return <svg viewBox="0 0 320 90" fill="none" aria-hidden="true">
      <rect x="55" y="12" width="210" height="66" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M55 27H265M65 19H69M75 19H79M85 19H89" stroke="currentColor" strokeWidth="1.5" />
      <g className="test-aucta-layout">
        <rect x="66" y="38" width="80" height="29" stroke="currentColor" strokeWidth="1.5" />
        <path d="M157 40H248M157 49H229M157 58H240" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>;
  }
  return <svg viewBox="0 0 320 90" fill="none" aria-hidden="true">
    <path className="test-ferry-route" d="M35 73H285" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
    <circle cx="35" cy="73" r="5" fill="currentColor" /><circle cx="285" cy="73" r="5" fill="currentColor" />
    <g className="test-ferry-boat" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M54 52H101L94 62H61L54 52ZM70 40V52M84 43V52M70 40L84 43" />
      <path d="M61 67C66 64 71 64 76 67M82 67C87 64 92 64 97 67" />
    </g>
  </svg>;
}

function ProjectVisual({ detail, name, isExpanded }) {
  return (
    <div className={`test-project-visual test-project-visual--${detail.visual}`} aria-label={`${name}: ${detail.coverLabel}, ${detail.coverRole}`} role="img">
      <div className="test-cover-top"><span>{detail.number} / PROJECT</span><span>{detail.coverLabel}</span></div>
      <strong className="test-cover-title">{detail.coverTitle}</strong>
      <div className="test-cover-diagram"><ProjectDiagram visual={detail.visual} /></div>
      <div className="test-cover-bottom"><span>{detail.coverRole}</span><span aria-hidden="true">{isExpanded ? "−" : "+"}</span></div>
    </div>
  );
}

export default function TestHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedScope, setSelectedScope] = useState("all");
  const [skopjeClock, setSkopjeClock] = useState(getSkopjeClock);
  const heroRef = useRef(null);
  const filteredProjects = projects
    .map((project, index) => ({ project, detail: projectDetails[index] }))
    .filter(({ detail }) =>
      (selectedStatus === "all" || detail.status === selectedStatus) &&
      (selectedScope === "all" || detail.contribution === selectedScope)
    );

  useEffect(() => {
    const interval = window.setInterval(() => setSkopjeClock(getSkopjeClock()), 15000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.altKey || event.ctrlKey || event.metaKey || event.repeat || event.isComposing || event.target?.closest?.("input, textarea, select, [contenteditable]")) return;
      const key = event.key.toLowerCase();
      const target = { w: "work", a: "about", c: "contact" }[key];
      if (target) {
        event.preventDefault();
        document.getElementById(target)?.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        setMenuOpen(false);
        return;
      }
      const social = socialShortcuts.find(({ key: shortcut }) => shortcut.toLowerCase() === key);
      const link = items.find(({ name }) => name === social?.name)?.link;
      if (link) {
        event.preventDefault();
        window.open(link, "_blank", "noopener,noreferrer");
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const moveHero = (event) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    heroRef.current.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - .5) * 30}px`);
    heroRef.current.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - .5) * 30}px`);
  };

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Simona Anchova — Digital experiences";
    const revealItems = document.querySelectorAll(".test-reveal:not(.test-project)");
    if (!window.IntersectionObserver) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => { document.title = previousTitle; };
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.title = previousTitle;
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="test-page" id="top">
      <header className="test-header">
        <a className="test-wordmark" href="#top" onClick={closeMenu} aria-label="Simona Anchova, back to top">simona<span>↗</span></a>
        <div className="test-header-status">
          <span className="test-status-dot" aria-hidden="true" />
          <span className="test-status-available">open to talk</span>
          <span className="test-status-divider" aria-hidden="true" />
          <span className="test-status-detail">
            <span>design + development</span>
            <span>Skopje, MK / <time><span>{skopjeClock.hours}</span><span className="test-clock-colon">:</span><span>{skopjeClock.minutes}</span></time> / {skopjeClock.offset}</span>
          </span>
        </div>
        <nav className={`test-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu} aria-keyshortcuts="W"><span className="test-nav-key" aria-hidden="true">[W]</span> Work <sup>04</sup></a>
          <a href="#about" onClick={closeMenu} aria-keyshortcuts="A"><span className="test-nav-key" aria-hidden="true">[A]</span> About</a>
          <a href="#contact" onClick={closeMenu} aria-keyshortcuts="C"><span className="test-nav-key" aria-hidden="true">[C]</span> Contact <span>↗</span></a>
        </nav>
        <button className="test-menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close −" : "Menu +"}</button>
      </header>

      <section className="test-hero" ref={heroRef} onPointerMove={moveHero} aria-labelledby="test-hero-title">
        <div className="test-hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="test-hero-top test-reveal">
          <span className="test-index">PORTFOLIO / 2026</span>
          <span className="test-index">FULL STACK DEVELOPER / SKOPJE</span>
        </div>
        <div className="test-hero-main">
          <h1 id="test-hero-title" className="test-hero-title test-reveal">Hi, I’m<br /><em>Simona.</em></h1>
          <div className="test-hero-visual" aria-hidden="true">
            <div className="test-hero-orbit"><span /><span /></div>
          </div>
        </div>
        <div className="test-hero-bottom test-reveal">
          <p>Full stack developer in Skopje. I work on backend systems, APIs, and web applications.</p>
          <a className="test-work-link" href="#work" aria-label="Explore selected work"><span>Explore the work</span><b>↘</b></a>
        </div>
        <div className="test-hero-rail"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
      </section>

      <div className="test-project-rail" aria-hidden="true"><div className="test-project-rail-track"><span className="test-rail-beam" /><i className="test-rail-node" /><i className="test-rail-node" /><i className="test-rail-node" /><i className="test-rail-node" /></div></div>

      <section className="test-intro" aria-label="Introduction">
        <div className="test-intro-inner test-reveal"><span className="test-section-kicker">01 / WHAT I BUILD</span><p>I build reliable <em>backend systems</em> and web applications with clean architecture and maintainable code.</p></div>
      </section>

      <section className="test-work" id="work" aria-labelledby="test-work-title">
        <div className="test-section-head test-reveal"><div><span className="test-section-kicker">02 / SELECTED WORK</span><h2 id="test-work-title">Proof in the<br /><em>making.</em></h2></div><p>Selected work across education, public services, company websites, and booking.</p></div>
        <div className="test-folder-browser" aria-label="Filter selected work">
          <div className="test-folder-browser-top"><span>FILTER PROJECTS</span><span aria-live="polite">SHOWING {String(filteredProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></div>
          <div className="test-folder-groups">
            <div className="test-folder-group" role="group" aria-label="Filter projects by status">
              <span className="test-folder-label">/ STATUS</span>
              <div className="test-folder-options">
                {statusFolders.map((folder) => {
                  const count = folder.value === "all" ? projects.length : projectDetails.filter((detail) => detail.status === folder.value).length;
                  return <button className={`test-folder ${selectedStatus === folder.value ? "is-active" : ""}`} key={folder.value} type="button" aria-pressed={selectedStatus === folder.value} onClick={() => { setSelectedStatus(folder.value); setExpandedProject(null); }}><span className="test-folder-icon" aria-hidden="true" /><span>{folder.label}</span><sup>{String(count).padStart(2, "0")}</sup></button>;
                })}
              </div>
            </div>
            <div className="test-folder-group" role="group" aria-label="Filter projects by scope">
              <span className="test-folder-label">/ SCOPE</span>
              <div className="test-folder-options">
                {scopeFolders.map((folder) => {
                  const count = folder.value === "all" ? projects.length : projectDetails.filter((detail) => detail.contribution === folder.value).length;
                  return <button className={`test-folder ${selectedScope === folder.value ? "is-active" : ""}`} key={folder.value} type="button" aria-pressed={selectedScope === folder.value} onClick={() => { setSelectedScope(folder.value); setExpandedProject(null); }}><span className="test-folder-icon" aria-hidden="true" /><span>{folder.label}</span><sup>{String(count).padStart(2, "0")}</sup></button>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="test-projects">
          {filteredProjects.map(({ project, detail }) => {
            const isExpanded = expandedProject === project.id;
            return (
              <article className={`test-project test-reveal is-visible ${isExpanded ? "is-expanded" : ""}`} key={project.id}>
                <button className="test-project-preview" type="button" aria-expanded={isExpanded} aria-label={`${isExpanded ? "Hide" : "Show"} details for ${project.name}`} onClick={() => setExpandedProject(isExpanded ? null : project.id)}><ProjectVisual detail={detail} name={project.name} isExpanded={isExpanded} /></button>
                <div className="test-project-main">
                  <h3>{project.name}</h3>
                  <span className="test-project-date">{project.date}</span>
                  {detail.url && <a className="test-project-site" href={detail.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>Visit live site <span aria-hidden="true">↗</span></a>}
                  {isExpanded && <p className="test-project-description">{detail.description}</p>}
                </div>
              </article>
            );
          })}
          {filteredProjects.length === 0 && <div className="test-work-empty"><p>No projects match those folders.</p><button type="button" onClick={() => { setSelectedStatus("all"); setSelectedScope("all"); }}>Show all work ↗</button></div>}
        </div>
      </section>

      <section className="test-about" id="about" aria-labelledby="test-about-title">
        <div className="test-about-top test-reveal"><span className="test-section-kicker">03 / ABOUT SIMONA</span><p>SKOPJE / 5 YEARS IN SOFTWARE DEVELOPMENT</p></div>
        <div className="test-about-grid">
          <div className="test-about-display test-reveal"><h2 id="test-about-title">Built to<br /><em>hold up.</em></h2></div>
          <div className="test-about-copy test-reveal"><p>I’m Simona Anchova, a full stack developer based in Skopje. My focus is backend systems, API design, and web applications.</p><p>I currently work as a Software Engineer at Hornetsecurity by Proofpoint. I care about clear structure, readable code, and software that is easy to use and maintain.</p><div className="test-capabilities"><span>FOCUS AREAS</span><ul><li>Backend systems <b>01</b></li><li>API design <b>02</b></li><li>Web applications <b>03</b></li></ul></div></div>
        </div>
      </section>

      <footer className="test-contact" id="contact">
        <div className="test-contact-top"><span className="test-section-kicker">04 / CONTACT</span><span>OPEN TO CONVERSATIONS</span></div>
        <h2>Get in<br /><em>touch.</em></h2>
        <p className="test-contact-intro">Building a product, improving a platform, or looking for backend support? Tell me what you’re working on.</p>
        <a className="test-email" href="mailto:anchovasimona11@gmail.com"><span className="test-email-address">anchovasimona11@gmail.com</span><span className="test-email-arrow" aria-hidden="true">↗</span></a>
        <div className="test-contact-bottom"><a href="#top" className="test-back-top">Back to top ↑</a><span>© {new Date().getFullYear()} SIMONA ANCHOVA</span><div>{items.filter((item) => item.name !== "Contact").map((item) => { const shortcut = socialShortcuts.find(({ name }) => name === item.name)?.key; return <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" aria-keyshortcuts={shortcut}><span className="test-social-key" aria-hidden="true">[{shortcut}]</span>{item.name} ↗</a>; })}</div></div>
      </footer>
    </main>
  );
}
