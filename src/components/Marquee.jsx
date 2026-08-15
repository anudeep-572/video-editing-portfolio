import './Marquee.css'

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-text">
          <span className="marquee-text--dark">From raw footage to final cut. Cinematic edits</span>
          <br />
          <span className="marquee-text--faded">built to move people, stay timeless, and perform in</span>
          <br />
          <span className="marquee-text--faded">the real world — driven by pacing, color,</span>
          <br />
          <span className="marquee-text--faded">and intentional storytelling.</span>
        </p>
      </div>
    </section>
  )
}
