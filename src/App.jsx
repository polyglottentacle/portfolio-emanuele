import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'CleanFood Ops',
    subtitle: 'Mobile operations workflow',
    summary: 'A field-first system for shifts, machine evidence and handovers in industrial cleaning operations.',
    problem: 'Operational information was spread across paper, messages and people, weakening handovers.',
    build: 'A responsive role-based product concept covering shifts, machines, people, alerts and reports.',
    proof: 'The project has an ACTIVE_HEALTHY Supabase backend and a READY production deployment on Vercel.',
    image: '/cleanfood-ops.png',
    imageAlt: 'Anonymised responsive field-operations work-area access screen',
    status: 'Operational product · private source',
    href: 'https://cleanfood-ops-source-gzp67vyti-polyglottentacles-projects.vercel.app',
    linkLabel: 'Open live demo',
  },
  {
    number: '02',
    name: 'NEXUS Gym',
    subtitle: 'Fitness and nutrition companion',
    summary: 'Workout tracking, AI-assisted coaching and food scanning in one responsive app.',
    problem: 'Training, nutrition and progress lived in disconnected tools with little useful context.',
    build: 'A React and TypeScript app with workout, muscle, coach and food experiences plus Capacitor mobile targets.',
    proof: 'Private GitHub source, automated verification and a READY production deployment on Vercel.',
    image: '/nexus-gym.png',
    imageAlt: 'NEXUS Gym desktop presentation with mobile workout interface',
    status: 'Working product · private source',
    href: 'https://nexus-gym-lgs3ytq0m-polyglottentacles-projects.vercel.app',
    linkLabel: 'Open live demo',
  },
  {
    number: '03',
    name: 'NEXUS',
    subtitle: 'Local AI operations system',
    summary: 'Twelve specialised agents, approval-based memory, provider fallbacks and deterministic health checks.',
    problem: 'AI work was fragmented across tools, conversations and folders, making continuity hard to verify.',
    build: 'A local-first Python system with specialised agents, an approval gate, health endpoints and recovery checks.',
    proof: 'A live local dashboard reports 12/12 agents, system state, cost, memory proposals and recent routing decisions.',
    image: '/nexus-dashboard.png',
    imageAlt: 'Live NEXUS dashboard showing system metrics and agent status',
    status: 'Local working prototype',
  },
  {
    number: '04',
    name: 'Dioniso Caffè',
    subtitle: 'Direct hospitality ordering',
    summary: 'A multilingual ordering flow designed for a direct relationship between a kitchen and its customers.',
    problem: 'Small hospitality teams need a simple alternative to fragmented, high-friction ordering flows.',
    build: 'A React and TypeScript ordering application with catalogue, cart, subscriptions and admin workflows.',
    proof: 'The source code and technical documentation are public on GitHub.',
    image: '/dioniso-caffe.png',
    imageAlt: 'Friendly Dioniso character holding a sandwich and grapes',
    status: 'Public source',
    href: 'https://github.com/polyglottentacle/Dioniso-panini-ia',
    linkLabel: 'View GitHub project',
  },
]

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true">EG</span>
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={`button ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight aria-hidden="true" size={19} />
    </a>
  )
}

function Project({ project }) {
  return (
    <article className="project">
      <div className="project-copy">
        <div className="project-heading">
          <span className="project-number">{project.number}</span>
          <div><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p></div>
        </div>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-evidence">
          <div><dt>Problem</dt><dd>{project.problem}</dd></div>
          <div><dt>Build</dt><dd>{project.build}</dd></div>
          <div><dt>Proof</dt><dd>{project.proof}</dd></div>
        </dl>
        <div className="project-meta">
          <span>{project.status}</span>
          {project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel || 'View project'} <ArrowUpRight aria-hidden="true" size={16} /></a>}
        </div>
      </div>
      {project.href ? (
        <a className="project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name}>
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        </a>
      ) : (
        <figure className="project-visual"><img src={project.image} alt={project.imageAlt} loading="lazy" /></figure>
      )}
    </article>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="identity" href="#top" aria-label="Emanuele Giordano, back to top"><BrandMark /><span>Emanuele Giordano</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#method">Method</a><a href="#about">About</a></nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">I turn operational pain into working software<span>.</span></h1>
            <p>AI Automation &amp; Product Builder based in Lelystad. I turn real operational workflows into deployed products, databases and AI-assisted systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View case studies <ArrowDown aria-hidden="true" size={19} /></a>
              <ExternalLink href="https://github.com/polyglottentacle"><Github aria-hidden="true" size={19} /> GitHub</ExternalLink>
            </div>
            <div className="availability"><MapPin aria-hidden="true" size={18} />Open to opportunities in the Netherlands · Remote or hybrid</div>
          </div>
          <div className="hero-showcase" aria-label="Preview of deployed work">
            <a className="hero-preview hero-preview-main" href="https://nexus-gym-lgs3ytq0m-polyglottentacles-projects.vercel.app" target="_blank" rel="noreferrer">
              <img src="/nexus-gym.png" alt="NEXUS Gym product shown on desktop and mobile" />
              <span><strong>NEXUS Gym</strong>Live product <ArrowUpRight aria-hidden="true" size={16} /></span>
            </a>
            <a className="hero-preview hero-preview-secondary" href="https://cleanfood-ops-source-gzp67vyti-polyglottentacles-projects.vercel.app" target="_blank" rel="noreferrer">
              <img src="/cleanfood-ops.png" alt="CleanFood Ops role-based work interface" />
              <span><strong>CleanFood Ops</strong>Live operations demo <ArrowUpRight aria-hidden="true" size={16} /></span>
            </a>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Selected work</h2><p>Four systems with clear boundaries between live products, private source and local prototypes.</p></div>
          <div className="project-list">{projects.map((project) => <Project key={project.name} project={project} />)}</div>
          <p className="stack-line">React · TypeScript · Python · Supabase / PostgreSQL · Vercel · GitHub Actions · AI-assisted delivery</p>
          <p className="stack-line">Live demos open in the browser. Private client data and source stay protected.</p>
        </section>

        <section className="method-section" id="method" aria-labelledby="method-title">
          <h2 id="method-title">How I work</h2>
          <ol className="method-steps">
            <li><span>1</span><strong>Start with the real workflow</strong></li>
            <li><span>2</span><strong>Build the smallest useful system</strong></li>
            <li><span>3</span><strong>Verify with visible evidence</strong></li>
          </ol>
          <p>I combine hands-on operational experience with AI-assisted product delivery. The goal is not more software. It is less friction.</p>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">From operations<br />to automation</h2>
          <div className="about-copy">
            <p>I am Emanuele Giordano, based in Lelystad. My background in production lines and commercial kitchens taught me to value clarity, speed and systems that survive contact with real work.</p>
            <p>I now apply that mindset to AI automation and digital products, from database-backed operations tools to mobile product prototypes.</p>
            <p className="languages">Italian · English · Spanish · Dutch in progress</p>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <h2 id="contact-title">Looking for a builder who understands operations?</h2>
          <div className="contact-actions">
            <ExternalLink className="button-primary" href="https://www.linkedin.com/in/wolfnexushub/"><Linkedin aria-hidden="true" size={20} /> Connect on LinkedIn</ExternalLink>
            <ExternalLink href="https://github.com/polyglottentacle"><Github aria-hidden="true" size={20} /> View GitHub</ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer"><BrandMark /><span>Emanuele Giordano · Lelystad, Netherlands</span></footer>
    </div>
  )
}
