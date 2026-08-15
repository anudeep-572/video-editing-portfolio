import './About.css'
import Reveal from './Reveal'

export default function About() {
  const go = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        {/* Left column */}
        <Reveal className="about__left" delay={0.1}>
          <h2 className="about__hey">Hey!</h2>
          <p className="about__intro">
            I'm Anudeep Reddy, a video editor based in India, crafting cinematic edits that turn raw footage into compelling stories.
          </p>
        </Reveal>

        {/* Center: portrait */}
        <div className="about__photo-wrap">
          <div id="about-photo-placeholder" className="about__photo" style={{ visibility: 'hidden' }} />
        </div>

        {/* Right column */}
        <Reveal className="about__right" delay={0.3}>
          <p className="about__bio">
            I’m a professional video editor, motion graphics designer, and 3D designer focused on crafting visually compelling stories through precise pacing, thoughtful color, and intentional design making every cut and every frame serve the narrative.
          </p>
          <p className="about__bio">
            I’ve had the privilege of collaborating with independent creators to bring their visions to life and I bring the same level of commitment, creativity, and attention to detail to every project I take on.
          </p>
          <a href="#contact" className="about__cta" onClick={go} id="about-get-started">
            Get Started
            <span className="about__cta-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
