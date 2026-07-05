import { useEffect, useState } from 'react'

type Project = {
  name: string
  type: string
  description: string
  theme: string
  url?: string
  domain?: string
}

type Capability = {
  title: string
  description: string
  type?: string
  className?: string
}

const projects: Project[] = [
  {
    name: 'The Nextdoor',
    type: 'Community platform',
    description: 'A digital platform focused on helping people discover what is useful, relevant, and available around them.',
    theme: 'nextdoor',
    url: 'https://thenextdoorindia.in',
    domain: 'thenextdoorindia.in',
  },
  {
    name: 'Zestway',
    type: 'Digital venture',
    description: 'A new consumer product being developed in-house at UinvolveX.',
    theme: 'zestway',
    url: 'https://zestway.in',
    domain: 'zestway.in',
  },
  {
    name: 'Ideaboard',
    type: 'AI validation agent',
    description: 'An AI agent that helps people test assumptions, surface risks, and validate an idea before committing significant time and resources.',
    theme: 'ideaboard',
  },
]

const capabilities: Capability[] = [
  { title: 'Product design', description: 'Product definition, user flows, interface design, and prototypes.' },
  { title: 'Web applications', description: 'Responsive, maintainable applications built for real-world use.' },
  { title: 'Marketing', description: 'Campaign planning, digital marketing, creative direction, and performance advertising.' },
  {
    title: 'Xline Studio',
    type: 'Branding and marketing studio',
    description: 'Brand strategy, identity design, marketing, campaign creative, and digital advertising.',
    className: 'service xline',
  },
  {
    title: 'One World',
    type: 'Influencer marketing agency',
    description: 'Creator discovery, influencer partnerships, campaign management, and brand collaborations.',
    className: 'service one-world',
  },
  {
    title: 'Generative AI for business',
    type: 'For small and medium businesses',
    description: 'Practical AI systems for automating repetitive work, improving customer support, searching business knowledge, and connecting AI to existing workflows.',
    className: 'service gen-ai',
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function Brand() {
  return (
    <span className="brand-lockup">
      <span>uinvolve</span>
      <img src="/brand/x-favicon.png" alt="" />
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="UinvolveX home"><Brand /></a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-label">{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav id="site-nav" className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Products</a>
          <a href="#company" onClick={closeMenu}>Company</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <h1>We build and operate digital products.</h1>
            <p>UinvolveX is a technology company based in Guwahati. We turn useful ideas into software, platforms, and new ventures.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">View our products</a>
              <a className="button secondary" href="#contact">Discuss a project</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/brand/x-icon.png" alt="" />
          </div>
          <div className="hero-meta" aria-label="Company details">
            <span>Guwahati, India</span>
            <span>Product design / software / marketing</span>
            <span>Independent technology company</span>
          </div>
        </section>

        <section className="products section" id="work">
          <div className="section-title">
            <h2>Products from UinvolveX.</h2>
            <p>We develop focused digital products from our home in Northeast India.</p>
          </div>

          <div className="product-list">
            {projects.map((project) => (
              <article className={`product-card ${project.theme}`} key={project.name}>
                {project.url ? (
                  <a className="product-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website`}>
                    <span>{project.name}</span>
                  </a>
                ) : (
                  <div className="product-visual"><span>{project.name}</span></div>
                )}
                <div className="product-details">
                  <p className="product-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.url && (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                      Visit {project.domain} <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="company section" id="company">
          <div className="company-heading">
            <h2>Built in Guwahati.<br />Designed to travel.</h2>
          </div>
          <div className="company-copy">
            <p className="company-lead">We are an independent team designing and engineering technology products from Assam, India.</p>
            <p>Our work spans product thinking, interface design, and software development. Keeping those disciplines together helps us move from an early idea to a finished product without losing clarity along the way.</p>
            <a href="#contact">Work with UinvolveX <Arrow /></a>
          </div>
        </section>

        <section className="capabilities section" id="capabilities">
          <div className="section-title compact">
            <h2>Capabilities and services.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className={capability.className ?? ''} key={capability.title}>
                <div>
                  {capability.type && <p className="service-type">{capability.type}</p>}
                  <h3>{capability.title}</h3>
                </div>
                <p className="capability-description">{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <h2>Have a product<br />to build?</h2>
            <p>Tell us what you are working on and where you need help.</p>
          </div>
          <a className="contact-email" href="mailto:hello@uinvolvex.com">
            hello@uinvolvex.com <Arrow />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-intro">
          <a className="brand footer-brand" href="#top"><Brand /></a>
          <p>Products, technology, marketing, and applied AI from Guwahati.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <a href="#work">Products</a>
          <a href="#company">Company</a>
          <a href="#capabilities">Capabilities</a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Websites</p>
          <a href="https://thenextdoorindia.in" target="_blank" rel="noreferrer">The Nextdoor <Arrow /></a>
          <a href="https://zestway.in" target="_blank" rel="noreferrer">Zestway <Arrow /></a>
          <a href="https://xlinestudios.in" target="_blank" rel="noreferrer">Xline Studios <Arrow /></a>
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-label">Contact</p>
          <a href="mailto:hello@uinvolvex.com">hello@uinvolvex.com</a>
          <p>Guwahati, Assam, India</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} UinvolveX</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
