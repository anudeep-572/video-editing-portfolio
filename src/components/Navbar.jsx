import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // close on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = () => setMenuOpen(false)
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [menuOpen])

  return (
    <header className="nav">
      <div className="nav__pill" onClick={e => e.stopPropagation()}>
        {/* Name / Logo */}
        <a href="#hero" className="nav__name" onClick={e => go(e, '#hero')}>
          <img src="/Profile.png" alt="Profile" className="nav__profile" />
        </a>

        {/* Desktop links */}
        <nav className="nav__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav__link" onClick={e => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button className="nav__more" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>

      </div>

      {/* Dropdown for mobile / menu */}
      {menuOpen && (
        <div className="nav__dropdown">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav__drop-link" onClick={e => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
