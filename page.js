
"use client";

import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "A responsive online shopping experience with product listings and a modern interface.",
    tech: "React · JavaScript · CSS",
    number: "01",
  },
  {
    title: "Portfolio Website",
    category: "UI / UX Design",
    description:
      "A personal portfolio showcasing creative work, skills, and professional experience.",
    tech: "Next.js · CSS · JavaScript",
    number: "02",
  },
  {
    title: "Task Manager App",
    category: "Application",
    description:
      "A productivity application for organizing tasks and keeping projects on track.",
    tech: "React · HTML · CSS",
    number: "03",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          Himanshu<span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a href="#contact" className="nav-cta">
            Let's Talk ↗
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <p className="eyebrow">HELLO, I'M A DEVELOPER</p>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span>make an impact.</span>
          </h1>

          <p className="hero-description">
            I create modern websites and web applications
            that combine thoughtful design with powerful
            technology.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button primary">
              Explore my work ↗
            </a>
            <a href="#contact" className="button secondary">
              Contact me
            </a>
          </div>

          <div className="social-text">
            HTML · CSS · JAVASCRIPT · REACT · NEXT.JS
          </div>
        </div>

        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-top">
              <span>●</span><span>●</span><span>●</span>
              <small>developer.js</small>
            </div>
            <pre>
              <span className="purple">const</span> developer = {"{"}
              {"\n"}  name: <span className="green">"Your Name"</span>,
              {"\n"}  passion: <span className="green">"Building"</span>,
              {"\n"}  skills: [
              {"\n"}    <span className="orange">"React"</span>,
              {"\n"}    <span className="orange">"Next.js"</span>
              {"\n"}  ],
              {"\n"}  creative: <span className="purple">true</span>
              {"\n"}{"}"};
            </pre>
            <div className="code-footer">
              <span>✦</span> Always learning. Always building.
            </div>
          </div>
          <div className="floating-badge badge-top">{"</>"}</div>
          <div className="floating-badge badge-bottom">✳</div>
        </div>

        <a className="scroll-hint" href="#about">
          ↓ &nbsp; SCROLL TO DISCOVER
        </a>
      </section>

      <section id="about" className="section about">
        <p className="eyebrow">01 — ABOUT ME</p>
        <h2>
          Turning ideas into
          <br />
          <span>real-world solutions.</span>
        </h2>
        <p className="section-description">
          I'm a passionate web developer who enjoys crafting
          clean interfaces, solving problems, and bringing
          creative ideas to life. I focus on responsive,
          accessible, and user-friendly digital experiences.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="eyebrow">02 — MY TOOLKIT</p>
        <h2>Technologies I work with.</h2>
        <div className="skills-grid">
          {[
            ["01", "HTML5", "Semantic structure"],
            ["02", "CSS3", "Responsive design"],
            ["03", "JavaScript", "Interactive experiences"],
            ["04", "React.js", "Reusable components"],
            ["05", "Next.js", "Modern web applications"],
            ["06", "Git & GitHub", "Version control"],
          ].map(([number, name, description]) => (
            <article className="skill-card" key={name}>
              <span className="skill-number">{number}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">03 — SELECTED WORK</p>
        <h2>Projects I've created.</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <span>{project.number}</span>
                <div className="project-symbol">&lt;/&gt;</div>
                <span className="project-category">
                  {project.category}
                </span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.tech}</small>
                <a
                  href="#contact"
                  aria-label={`Ask me about ${project.title}`}
                >
                  Discuss project ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">04 — GET IN TOUCH</p>
        <h2>
          Have an idea?
          <br />
          <span>Let's build it together.</span>
        </h2>
        <p className="section-description">
          Have a project in mind or want to collaborate?
          I'd love to hear from you.
        </p>
        <a
          className="button primary"
          href="mailto:hello@example.com"
        >
          hello@example.com ↗
        </a>
      </section>

      <footer>
        <a href="#home" className="logo">
          dev<span>.</span>
        </a>
        <p>Designed & built with React and Next.js.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
