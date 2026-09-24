import { development, isPlaceholder } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Development.css'

function GithubIcon() {
  return (
    <svg viewBox="0 0 19 19" aria-hidden="true" className="dev-icon">
      <path
        fillRule="evenodd"
        d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="dev-icon">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.09h4.52V23H.24V8.09zM8.34 8.09h4.33v2.04h.06c.6-1.14 2.07-2.34 4.27-2.34 4.57 0 5.41 3 5.41 6.91V23h-4.51v-7.44c0-1.78-.03-4.06-2.47-4.06-2.48 0-2.86 1.93-2.86 3.93V23H8.34V8.09z" />
    </svg>
  )
}

export default function Development() {
  const githubPending = isPlaceholder(development.githubUrl)
  const linkedinPending = isPlaceholder(development.linkedinUrl)

  return (
    <section className="section development" id="development">
      <div className="container">
        <SectionHeading eyebrow={development.eyebrow} title={development.heading} lede={development.text} />

        <div className="dev-grid">
          <Reveal as="article" className={`dev-tile dev-tile--git${githubPending ? ' is-pending' : ''}`}>
            <span className="dev-tile-icon" aria-hidden="true">
              <GithubIcon />
            </span>
            <div className="dev-tile-body">
              <span className="mono-label">Code &amp; repositories</span>
              <h3>GitHub</h3>
              {githubPending ? (
                <span className="placeholder-chip">
                  YOUR_GITHUB_URL <small>edit in portfolioData.js</small>
                </span>
              ) : (
                <a className="dev-tile-link" href={development.githubUrl} target="_blank" rel="noreferrer">
                  {development.githubUrl.replace(/^https?:\/\//, '')}
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal as="article" className={`dev-tile dev-tile--in${linkedinPending ? ' is-pending' : ''}`} delay={80}>
            <span className="dev-tile-icon" aria-hidden="true">
              <LinkedinIcon />
            </span>
            <div className="dev-tile-body">
              <span className="mono-label">Professional network</span>
              <h3>LinkedIn</h3>
              {linkedinPending ? (
                <span className="placeholder-chip">
                  YOUR_LINKEDIN_URL <small>edit in portfolioData.js</small>
                </span>
              ) : (
                <a className="dev-tile-link" href={development.linkedinUrl} target="_blank" rel="noreferrer">
                  {development.linkedinUrl.replace(/^https?:\/\//, '')}
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}