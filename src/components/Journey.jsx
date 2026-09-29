import { journey } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Journey.css'

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container">
        <SectionHeading eyebrow={journey.eyebrow} title={journey.heading} lede={journey.intro} />

        <ol className="journey-track">
          {journey.stages.map((stage, index) => {
            const side = index % 2 === 0 ? 'odd' : 'even'
            return (
              <Reveal
                as="li"
                key={stage.number}
                className={`journey-stage journey-stage--${side}`}
                direction={side === 'odd' ? 'left' : 'right'}
              >
                <span className="journey-marker" aria-hidden="true" />
                <article className="journey-card">
                  <div className="journey-card-top">
                    <span className="journey-arc">{stage.arc}</span>
                    <span className="journey-number mono-label">stage {stage.number}</span>
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}