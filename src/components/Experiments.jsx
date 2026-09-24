import { experiments } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Experiments.css'

export default function Experiments() {
  return (
    <section className="section experiments" id="experiments">
      <div className="container">
        <SectionHeading eyebrow={experiments.eyebrow} title={experiments.heading} lede={experiments.intro} />

        <ol className="experiment-list">
          {experiments.items.map((item, index) => (
            <Reveal as="li" className="experiment-row" key={item.title} delay={index * 50}>
              <span className="experiment-index mono-label" aria-hidden="true">
                {item.index}
              </span>
              <div className="experiment-main">
                <p className="mono-label experiment-cat">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="experiment-tag">● {item.tag}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}