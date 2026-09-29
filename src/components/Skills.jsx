import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading eyebrow={skills.eyebrow} title={skills.heading} lede={skills.intro} />

        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <Reveal
              as="article"
              key={category.name}
              className={`skill-block accent-${category.accent}`}
              delay={index * 70}
            >
              <div className="skill-block-head">
                <span className="skill-index" aria-hidden="true">
                  {category.index}
                </span>
                <h3>{category.name}</h3>
              </div>
              <ul className="skill-tags">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills-focus" delay={80}>
          <div className="skills-focus-head">
            <span className="mono-label">{skills.focusLabel}</span>
            <strong>Learning in public.</strong>
          </div>
          <ul className="skills-focus-list">
            {skills.focusAreas.map((area) => (
              <li key={area}>
                <span className="skills-focus-arrow" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}