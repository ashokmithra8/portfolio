import React, { useState } from "react";

const profile = {
  name: "Ashok Mithra Gaddam",
  role: "Software Engineer",
  location: "Charlotte, NC",
  email: "ashokmithra20@gmail.com",
  phone: "9899336936",
  linkedin: "https://www.linkedin.com/in/ashok-mithra20-gaddam/",
  image: `${import.meta.env.BASE_URL}profile-photo.jpg`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Interests", "interests"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

const highlights = [
  "2+ years of full-stack software engineering experience",
  "End-to-end ownership from backend APIs to polished UI",
  "React, Node, Express, Next.js, TypeScript, Tailwind, PostgreSQL, AWS RDS",
  "Experience shipping dashboards, analytics workflows, and AI-driven interfaces",
];

const interests = [
  "Full-Stack Product Engineering",
  "Dashboard & Workflow Systems",
  "AI-Driven Web Applications",
  "Product Analytics",
  "API Design & Integration",
  "User-Focused Frontend Experiences",
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "API Development", "Backend Services"],
  DatabaseCloud: ["PostgreSQL", "AWS RDS", "Data Access Layers", "Integration Workflows"],
  Engineering: ["Git", "Agile", "Code Reviews", "Debugging", "Product Analytics", "Cross-Functional Collaboration"],
};

const projects = [
  {
    title: "AI Content Integrity Dashboard",
    description:
      "Built a Next.js, React, and Tailwind prototype that visualizes text-origin signals, review status, and API results for AI content integrity workflows.",
    tags: ["Next.js", "React", "Tailwind", "APIs", "AI"],
    thumbnail: "/1.png",
    link: "#",
  },
  {
    title: "Product Analytics Dashboard",
    description:
      "Created dashboard views for feature usage, user trends, and operational metrics to help teams identify requested features and prioritize product improvements.",
    tags: ["React", "Analytics", "Dashboards", "Product"],
    thumbnail: "/2.png",
    link: "#",
  },
  {
    title: "API-Backed Operational Workflows",
    description:
      "Developed PostgreSQL and AWS RDS-backed API services that support reliable data access, analytics instrumentation, and integration-ready internal workflows.",
    tags: ["Node.js", "Express", "PostgreSQL", "AWS RDS"],
    thumbnail: "/3.png",
    link: "#",
  },
];

const experience = [
  {
    company: "Duke Energy",
    location: "Charlotte, NC",
    role: "Software Engineer",
    period: "August 2025 — Present",
    bullets: [
      "Build and deploy React, Node, Express, TypeScript, and Tailwind dashboard features that turn complex operational workflows into intuitive, reusable product experiences.",
      "Develop PostgreSQL and AWS RDS-backed API services for reliable data access, product analytics, and integration-ready workflows across internal platforms.",
      "Partner with design, business, and engineering stakeholders to scope top-requested features, iterate from prototype to release, and improve usability through feedback-driven refinements.",
    ],
  },
  {
    company: "Urban Company",
    location: "Hyderabad, India",
    role: "Software Engineer",
    period: "January 2023 — June 2024",
    bullets: [
      "Delivered customer-facing web features using React, Next.js, Node, Express, TypeScript, and REST APIs, owning implementation from backend logic through polished CSS/Tailwind interfaces.",
      "Implemented PostgreSQL workflows, dashboard views, and usage tracking to support data-driven product decisions, feature prioritization, and faster release cycles.",
      "Worked across product, design, QA, and engineering to debug production issues, refine high-impact user journeys, and ship requested improvements in Agile sprints.",
    ],
  },
  {
    company: "Henotic Technologies Pvt. Ltd",
    location: "Hyderabad, India",
    role: "Software Engineer Intern",
    period: "July 2022 — December 2022",
    bullets: [
      "Contributed to full-stack web modules by creating React components, Node/Express routes, SQL queries, and responsive CSS updates for application features.",
      "Supported API testing, bug fixes, code reviews, and UI refinements while learning rapid iteration, ownership, and collaboration in a startup-style engineering environment.",
    ],
  },
];

const education = [
  {
    school: "Central Michigan University",
    location: "Michigan",
    degree: "Master of Science in Information Systems",
    period: "August 2024 — December 2025",
  },
  {
    school: "SRKR Engineering College",
    location: "Bhimavaram, India",
    degree: "Bachelor of Technology in Computer Science",
    period: "August 2020 — May 2024",
  },
];

const achievements = [
  "Built dashboard workflows that simplified complex operational processes into reusable product experiences.",
  "Delivered end-to-end customer-facing features across backend services, APIs, and polished frontend interfaces.",
  "Collaborated with ML, design, product, QA, business, and engineering stakeholders to ship user-focused software.",
  "Implemented analytics views and usage tracking to support product decisions and faster release cycles.",
];

function Icon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    pin: (
      <svg {...common}>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      </svg>
    ),
    link: (
      <svg {...common}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <a className="project-card" href={project.link} aria-label={`View ${project.title}`}>
      <div className="project-visual">
        <img
          className="project-thumbnail"
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
        />
      </div>

      <div className="project-title-row">
        <h3>{project.title}</h3>
        <Icon name="link" />
      </div>

      <p>{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function ExperienceItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <article className={`experience-card ${isOpen ? "is-open" : ""}`}>
      <button
        className="experience-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="timeline-top">
          <div>
            <h3>{item.role}</h3>
            <div className="company-line">
              {item.company} · {item.location}
            </div>
          </div>

          <div className="experience-meta">
            <span className="period">{item.period}</span>
            <span className="expand-icon">{isOpen ? "−" : "+"}</span>
          </div>
        </div>
      </button>

      {isOpen && (
        <ul className="bullet-list">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function PortfolioWebsite() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #f8fafc;
          color: #0f172a;
        }

        a { color: inherit; text-decoration: none; }

        main {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(37, 99, 235, 0.14), transparent 30rem),
            radial-gradient(circle at top right, rgba(14, 165, 233, 0.16), transparent 28rem),
            #f8fafc;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(226, 232, 240, 0.92);
          background: rgba(248, 250, 252, 0.88);
          backdrop-filter: blur(16px);
        }

        .nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0.95rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.95rem;
          color: #475569;
          font-size: 0.84rem;
          font-weight: 750;
        }

        .nav-links a:hover { color: #020617; }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 6rem 1.5rem 5rem;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }

        .profile-card {
          border: 1px solid #e2e8f0;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 2rem;
          padding: 1rem;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.14);
        }

        .profile-art {
          min-height: 520px;
          border-radius: 1.45rem;
          padding: 2rem;
          background: linear-gradient(135deg, #e0f2fe, #ffffff, #dbeafe);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          text-align: center;
        }

        .profile-photo-wrap {
          width: min(100%, 290px);
          aspect-ratio: 1 / 1;
          border-radius: 999px;
          padding: 0.65rem;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 22px 52px rgba(15, 23, 42, 0.18);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 999px;
          object-fit: cover;
          object-position: center;
        }

        .profile-art h1 {
          margin: 0.45rem 0 0;
          color: #0f172a;
          font-size: clamp(1.7rem, 3vw, 2.35rem);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .profile-art .role {
          margin: 0.35rem 0 0;
          color: #2563eb;
          font-weight: 850;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          color: #475569;
          font-weight: 700;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid #dbeafe;
          background: white;
          color: #2563eb;
          padding: 0.55rem 0.85rem;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 750;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
        }

        .hero-copy h2 {
          margin: 1.5rem 0 0;
          max-width: 780px;
          color: #121c2c;
          font-size: clamp(2.45rem, 5vw, 4.35rem);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .hero-copy p {
          max-width: 690px;
          margin: 1.5rem 0 0;
          color: #475569;
          font-size: 1.14rem;
          line-height: 1.75;
        }

        .hero-actions, .socials {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          margin-top: 1.8rem;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          border-radius: 1rem;
          border: 1px solid #0f172a;
          background: #0f172a;
          color: white;
          padding: 0.85rem 1.15rem;
          font-weight: 800;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.16);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 38px rgba(15, 23, 42, 0.22);
        }

        .button.secondary {
          background: white;
          color: #0f172a;
          border-color: #cbd5e1;
          box-shadow: none;
        }

        .socials a {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 999px;
          color: #475569;
          font-weight: 850;
          transition: transform 180ms ease, color 180ms ease;
        }

        .socials a:hover {
          color: #020617;
          transform: translateY(-2px);
        }

        section {
          padding: 5rem 1.5rem;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .section-heading {
          max-width: 760px;
          margin: 0 auto 2.6rem;
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 0.75rem;
          color: #2563eb;
          font-size: 0.78rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        .section-heading h2 {
          margin: 0;
          color: #020617;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          letter-spacing: -0.055em;
        }

        .section-heading p {
          color: #64748b;
          line-height: 1.75;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          align-items: stretch;
        }

        .about-card, .summary-card {
          border-radius: 1.75rem;
          padding: 2rem;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);
        }

        .about-card {
          background: #0f172a;
          color: white;
        }

        .about-card h2 {
          margin: 1rem 0 0;
          font-size: 2rem;
          line-height: 1.1;
          letter-spacing: -0.05em;
        }

        .about-card p:last-child {
          color: #cbd5e1;
          line-height: 1.75;
        }

        .summary-card {
          border: 1px solid #e2e8f0;
          background: white;
        }

        .highlight-list {
          display: grid;
          gap: 0.9rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .highlight-list li {
          padding: 1rem;
          border-radius: 1rem;
          background: #f8fafc;
          color: #334155;
          font-weight: 750;
          line-height: 1.55;
        }

        .grid-2, .grid-3, .skills-grid {
          display: grid;
          gap: 1rem;
        }

        .grid-2 { grid-template-columns: repeat(2, 1fr); }
        .grid-3 { grid-template-columns: repeat(3, 1fr); }
        .skills-grid { grid-template-columns: repeat(4, 1fr); }

        .card-item, .skill-group, .education-card, .experience-card, .project-card {
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 1.35rem;
          padding: 1.25rem;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.045);
        }

        .card-item {
          color: #334155;
          font-weight: 800;
          line-height: 1.55;
        }

        .skill-group h3 {
          margin: 0 0 0.9rem;
          color: #0f172a;
          font-size: 1.05rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          border-radius: 999px;
          background: #eff6ff;
          color: #1d4ed8;
          padding: 0.42rem 0.65rem;
          font-size: 0.78rem;
          font-weight: 850;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 42px rgba(15, 23, 42, 0.12);
        }

        .project-visual {
          aspect-ratio: 16 / 10;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1.15rem;
          background: #eff6ff;
        }

        .project-thumbnail {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .project-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .project-title-row h3 {
          margin: 0;
          font-size: 1.22rem;
          letter-spacing: -0.03em;
        }

        .project-card p {
          flex: 1;
          color: #64748b;
          line-height: 1.7;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .timeline-list {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }

        .timeline-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: flex-start;
        }

        .experience-card h3, .education-card h3 {
          margin: 0;
          font-size: 1.25rem;
        }

        .company-line, .school-line {
          color: #2563eb;
          font-weight: 850;
          margin-top: 0.35rem;
        }

        .period {
          color: #64748b;
          font-weight: 800;
          white-space: nowrap;
        }

        .bullet-list {
          margin: 1rem 0 0;
          padding-left: 1.1rem;
          color: #475569;
          line-height: 1.7;
        }

        .experience-toggle {
          width: 100%;
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
        }

        .experience-card {
          overflow: hidden;
          transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .experience-card:hover {
          transform: translateY(-2px);
        }

        .experience-card .bullet-list {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .experience-meta {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .expand-icon {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: #eff6ff;
          color: #1d4ed8;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          font-weight: 900;
          line-height: 1;
          flex-shrink: 0;
        }

        .experience-card.is-open {
          border-color: #bfdbfe;
          box-shadow: 0 18px 42px rgba(37, 99, 235, 0.11);
        }

        .contact-box {
          max-width: 860px;
          margin: 0 auto;
          border-radius: 2rem;
          background: #0f172a;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          box-shadow: 0 26px 70px rgba(15, 23, 42, 0.22);
        }

        .contact-box h2 {
          margin: 1rem 0 0;
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1;
          letter-spacing: -0.07em;
        }

        .contact-box p {
          max-width: 640px;
          margin: 1rem auto 0;
          color: #cbd5e1;
          line-height: 1.75;
        }

        .contact-actions {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .contact-actions .secondary {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.25);
        }

        .contact-actions .secondary:hover {
          background: white;
          color: #0f172a;
        }

        footer {
          border-top: 1px solid #e2e8f0;
          padding: 2rem 1.5rem;
          text-align: center;
          color: #64748b;
          font-size: 0.95rem;
        }

        @media (max-width: 980px) {
          .hero, .about-grid {
            grid-template-columns: 1fr;
          }

          .grid-3, .skills-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero, section {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .hero {
            padding-top: 4.5rem;
          }

          .profile-art {
            min-height: 420px;
          }

          .grid-2, .grid-3, .skills-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions, .contact-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .button {
            width: 100%;
          }

          .timeline-top {
            flex-direction: column;
          }

          .experience-meta {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-links" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <aside className="profile-card" aria-label="Profile card">
          <div className="profile-art">
            <p className="eyebrow">Portfolio</p>
            <div className="profile-photo-wrap">
              <img className="profile-photo" src={profile.image} alt={`${profile.name} profile photo`} />
            </div>
            <div>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <div className="location">
                <Icon name="pin" />
                {profile.location}
              </div>
            </div>
          </div>
        </aside>

        <div className="hero-copy">
          <div className="badge">
            <Icon name="spark" />
            Full-stack product engineer
          </div>
          <h2>I build end-to-end web products, dashboards, APIs, and analytics-driven experiences.</h2>
          <p>
            Software Engineer with 2+ years of experience across React, Node, Express, Next.js, TypeScript, Tailwind,
            REST APIs, PostgreSQL, and AWS RDS. I move comfortably from backend services to polished interfaces,
            turning ambiguous product needs into reliable, user-focused software.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              View projects <Icon name="arrow" />
            </a>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
          <div className="socials" aria-label="Social links">
            <a href={profile.linkedin} aria-label="LinkedIn profile">
              IN
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email me">
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container about-grid">
          <div className="about-card">
            <p className="eyebrow">About</p>
            <h2>Product-minded software engineer who ships across the stack.</h2>
            <p>
              I build practical web experiences that connect clean interfaces, reliable APIs, analytics instrumentation,
              and database-backed workflows. I enjoy collaborating with product, design, ML, business, QA, and engineering
              teams to break down ambiguous problems and deliver features users actually need.
            </p>
          </div>
          <div className="summary-card">
            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="interests">
        <div className="container">
          <SectionHeading eyebrow="Interests" title="Areas I enjoy working on">
            I like building useful products that combine fast frontend development, reliable backend systems, and measurable product outcomes.
          </SectionHeading>
          <div className="grid-3">
            {interests.map((interest) => (
              <div className="card-item" key={interest}>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="Technical toolkit" />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, values]) => (
              <div className="skill-group" key={group}>
                <h3>{group.replace("DatabaseCloud", "Database & Cloud")}</h3>
                <div className="skill-list">
                  {values.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <SectionHeading eyebrow="Projects" title="Selected engineering work">
            Projects focused on AI interfaces, analytics dashboards, API-backed workflows, and product decision support.
          </SectionHeading>
          <div className="grid-3">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="Professional experience" />
          <div className="timeline-list">
            {experience.map((item, index) => (
              <ExperienceItem item={item} index={index} key={`${item.company}-${item.role}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="timeline-list">
            {education.map((item) => (
              <article className="education-card" key={`${item.school}-${item.degree}`}>
                <div className="timeline-top">
                  <div>
                    <h3>{item.degree}</h3>
                    <div className="school-line">
                      {item.school} · {item.location}
                    </div>
                  </div>
                  <span className="period">{item.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="container">
          <SectionHeading eyebrow="Achievements" title="Impact highlights" />
          <div className="grid-2">
            {achievements.map((item) => (
              <div className="card-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-box">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something useful.</h2>
          <p>
            I’m open to software engineering opportunities, product-focused engineering work, and full-stack projects involving dashboards,
            APIs, analytics, and AI-driven web experiences.
          </p>
          <div className="contact-actions">
            <a className="button" href={`mailto:${profile.email}`}>
              Email me <Icon name="mail" />
            </a>
            <a className="button secondary" href={profile.linkedin}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} {profile.name}. Built with React.</footer>
    </main>
  );
}