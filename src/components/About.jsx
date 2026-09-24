import { about } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-intro">
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} />
          <Reveal delay={140}>
            <p className="about-accent">"{about.accent}"</p>
          </Reveal>
        </div>

        <div className="about-body">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 70}>
              <p className={index === 0 ? 'about-lead' : ''}>{paragraph}</p>
            </Reveal>
          ))}

          <Reveal as="ul" className="about-highlights" delay={120}>
            {about.highlights.map((item) => (
              <li className="about-highlight" key={item.label}>
                <span className="mono-label">{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}