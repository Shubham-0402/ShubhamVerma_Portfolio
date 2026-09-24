import { education, isPlaceholder } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Education.css'

export default function Education() {
  const institutionPending = isPlaceholder(education.institution)
  const degreePending = isPlaceholder(education.degree)
  const statusPending = isPlaceholder(education.status)

  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionHeading eyebrow={education.eyebrow} title={education.heading} />

        <Reveal className="education-card" as="article">
          <div className="education-card-top">
            <div>
              {institutionPending ? (
                <span className="placeholder-chip">
                  Institution <small>edit in portfolioData.js</small>
                </span>
              ) : (
                <h3 className="education-institution">{education.institution}</h3>
              )}

              {degreePending ? (
                <span className="placeholder-chip">
                  Degree <small>edit in portfolioData.js</small>
                </span>
              ) : (
                <p className="education-degree">{education.degree}</p>
              )}
            </div>

            <span className="education-status">
              <span className="education-status-dot" aria-hidden="true" />
              {statusPending ? 'Student' : education.status}
            </span>
          </div>

          <p className="education-field">{education.field}</p>

          <div className="coursework">
            <p className="mono-label">Academic & practical focus</p>
            <ul className="coursework-list">
              {education.coursework.map((item, index) => (
                <li key={item}>
                  <span className="coursework-index">0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}