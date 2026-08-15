import './Hero.css'
import Reveal from './Reveal'

export default function Hero() {
  const scrollDown = (e) => {
    e.preventDefault()
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Top-left: year */}
      <span className="hero__year">©{new Date().getFullYear()}</span>
      {/* Top-right: tagline */}
      <span className="hero__since">/CREATING SINCE 2022</span>

      {/* Main title */}
      <Reveal className="hero__title-wrap" delay={0.2}>
        {/* Sparkle icon */}
        <svg className="hero__deco hero__deco--star" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0 L33 27 L60 30 L33 33 L30 60 L27 33 L0 30 L27 27 Z" fill="#0D0D0D"/>
        </svg>

        <h1 className="hero__title">
          VIDEO<br />EDITOR
        </h1>

        {/* Lightning bolt icon */}
        <svg className="hero__deco hero__deco--bolt" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 0 L5 32 L18 32 L16 60 L35 26 L21 26 Z" fill="#0D0D0D"/>
        </svg>
      </Reveal>

      {/* Portrait bottom-center */}
      <a href="#portfolio" className="hero__photo-link" onClick={scrollDown} style={{ display: 'block' }}>
        <div id="hero-photo-placeholder" className="hero__photo" style={{ visibility: 'hidden' }} />
      </a>
    </section>
  )
}
