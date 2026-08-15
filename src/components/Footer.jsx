import './Footer.css'
import Reveal from './Reveal'

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <Reveal className="container footer__top">
        {/* Left: tagline */}
        <div className="footer__tagline">
          <p>Cutting Stories.</p>
          <p>Frame by Frame.</p>
        </div>

        {/* Center: quick links */}
        <div className="footer__col">
          <span className="footer__col-label">/Quick links</span>
          <div className="footer__links">
            {QUICK_LINKS.map(l => (
              <a key={l.label} href={l.href} className="footer__pill" onClick={e => go(e, l.href)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact */}
        <div className="footer__col">
          <span className="footer__col-label">/Contact</span>
          <a href="mailto:hello@framecut.co" className="footer__email" id="footer-email">
            anudeep10878@gmail.com
          </a>
        </div>
      </Reveal>

      {/* Watermark */}
      <div className="footer__watermark" aria-hidden="true">
        AR
      </div>
    </footer>
  )
}
