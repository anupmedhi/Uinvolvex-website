import { useEffect, useState } from 'react'

type Project = {
  name: string
  type: string
  description: string
  theme: string
  url?: string
  domain?: string
}

const projects: Project[] = [
  {
    name: 'The Nextdoor',
    type: 'Startup ecosystem platform',
    description: "Bringing the startup ecosystem to the doorstep of colleges in small-town India by connecting grassroots founders with incubators, grants, and mentorship.",
    theme: 'nextdoor',
    url: 'https://thenextdoorindia.in',
    domain: 'thenextdoorindia.in',
  },
  {
    name: 'Zestway',
    type: 'F&B growth venture / PrimePOS',
    description: 'From branding and marketing to operations and technology, Zestway India helps food and beverage businesses scale smarter — now building PrimePOS for faster, cleaner restaurant operations.',
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
  {
    name: 'Xline Studio',
    type: 'Branding and marketing studio',
    description: 'A creative studio for brand strategy, identity, campaigns, marketing, and digital advertising.',
    theme: 'xline-studio',
    url: 'https://xlinestudio.in/',
    domain: 'xlinestudio.in',
  },
  {
    name: 'One World',
    type: 'Influencer marketing agency',
    description: 'Creator-led campaigns, influencer partnerships, and brand collaborations built for culture and reach.',
    theme: 'one-world-project',
  },
  {
    name: 'Colourseed Capital',
    type: 'Early-stage investment firm',
    description: 'Backing early-stage startups with capital, strategic support, and a long-term operating perspective.',
    theme: 'colourseed',
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
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav id="site-nav" className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Products</a>
          <a href="#company" onClick={closeMenu}>Company</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <h1>We build, operate, and back ambitious ventures.</h1>
            <p>From Guwahati, UinvolveX turns promising ideas into digital products, businesses, and brands built for the world.</p>
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
            <h2>Ventures from UinvolveX.</h2>
            <p>We build, operate, and back ambitious ventures from Northeast India.</p>
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

        <section className="contact" id="contact">
          <div>
            <h2>Have a product<br />to build?</h2>
            <p>Tell us what you are working on and where you need help.</p>
          </div>
          <a className="contact-email" href="mailto:support@uinvolvex.in">
            support@uinvolvex.in <Arrow />
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
        </div>
        <div className="footer-column">
          <p className="footer-label">Websites</p>
          <a href="https://thenextdoorindia.in" target="_blank" rel="noreferrer">The Nextdoor <Arrow /></a>
          <a href="https://zestway.in" target="_blank" rel="noreferrer">Zestway <Arrow /></a>
          <a href="https://xlinestudio.in/" target="_blank" rel="noreferrer">Xline Studio <Arrow /></a>
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-label">Contact</p>
          <a href="mailto:uinvolvex@gmail.com">uinvolvex@gmail.com</a>
          <a href="tel:+919101028103">+91 9101028103</a>
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
