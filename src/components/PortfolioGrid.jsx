import { useState, useRef } from 'react'
import './PortfolioGrid.css'
import Reveal from './Reveal'

const PROJECTS = [
  {
    id: 1,
    videoId: 'x8JbeNfyWhM',
    title: 'Content',
    type: 'Music Video',
  },
  {
    id: 2,
    videoId: 'UPBYCW8bi3w',
    title: 'Nova Sport — Sprint',
    type: 'Commercial',
  },
  {
    id: 3,
    videoId: 'jVPbhRdImzA',
    title: 'The Last Hour',
    type: 'Short Film',
  },
  {
    id: 4,
    videoId: 'FNvcODdnU_I',
    title: 'City Pulse',
    type: 'Documentary',
  },
]

export default function PortfolioGrid() {
  const [activeVideoId, setActiveVideoId] = useState(null)
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -344 : 344
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <Reveal className="portfolio__header">
          <h2 className="portfolio__heading">
            Featured<br />Content
          </h2>
          {/* <a href="#contact" className="portfolio__view-all" id="portfolio-view-all"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View All Work
            <span className="portfolio__arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a> */}
        </Reveal>

        <div className="portfolio__carousel" ref={carouselRef}>
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.id} className="project-card" delay={0.1 * idx}>
              <div
                className="project-card__img-wrap"
                onClick={() => setActiveVideoId(p.id)}
              >
                {activeVideoId === p.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${p.videoId}?autoplay=1&rel=0`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="project-card__video"
                  />
                ) : (
                  <>
                    <img src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`} alt={p.title} className="project-card__img" />
                    <div className="project-card__play">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carousel controls */}
        <Reveal delay={0.2} className="portfolio__controls">
          <button className="portfolio__control-btn" onClick={() => scroll('left')} aria-label="Scroll left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="portfolio__control-btn" onClick={() => scroll('right')} aria-label="Scroll right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
