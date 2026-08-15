import './Services.css'
import Reveal from './Reveal'

const SERVICES = [
  { title: 'Video Editing', tags: ['Premiere Pro', 'Storytelling', 'Pacing'] },
  { title: 'Motion Graphics', tags: ['After Effects', 'Animation', 'Compositing'] },
  { title: '3D Design', tags: ['Blender', 'Modeling', '3D Animation'] },
  { title: 'Visual Design', tags: ['Photoshop', 'Compositing', 'Art Direction'] },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <h2 className="services__heading">Services</h2>
        </Reveal>

        <ul className="services__list">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <li className="services__item">
                <span className="services__title">{s.title}</span>
                <span className="services__tags">
                  {s.tags.map((t, ti) => (
                    <span key={ti} className="services__tag">
                      {ti > 0 && <span className="services__dot">·</span>}
                      {t}
                    </span>
                  ))}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
