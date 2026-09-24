import { isPlaceholder, projects } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectVisual from './ProjectVisual'
import './Projects.css'

const FACT_LABELS = [
  { key: 'built', label: 'What I built' },
  { key: 'does', label: 'What it does' },
  { key: 'how', label: 'How it works' },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.heading} lede={projects.lede} />
        <Reveal>
          <p className="projects-note mono-label">{projects.note}</p>
        </Reveal>

        <div className="projects-list">
          {projects.items.map((project, index) => (
            <ProjectRow key={project.number} project={project} alt={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, alt }) {
  const githubPending = isPlaceholder(project.githubLink)
  const demoPending = isPlaceholder(project.demoLink)

  return (
    <Reveal
      as="article"
      className={`project${alt ? ' project--alt' : ''}${project.featured ? ' project--featured' : ''}`}
    >
      <div className="project-media">
        <div className="project-art">
          <ProjectVisual visual={project.visual} />
        </div>
        <span className="project-ghost" aria-hidden="true">
          {project.number}
        </span>
        <span className="project-category mono-label">{project.category}</span>
      </div>

      <div className="project-info">
        <p className="project-kicker mono-label">Project {project.number}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <dl className="project-facts">
          {FACT_LABELS.map((fact) => (
            <div key={fact.key} className={`project-fact${fact.key === 'how' ? ' project-fact--wide' : ''}`}>
              <dt>{fact.label}</dt>
              <dd>{project[fact.key]}</dd>
            </div>
          ))}
        </dl>

        <ul className="project-tech" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.githubLink && (
            githubPending ? (
              <span className="placeholder-chip">
                GitHub <small>edit in portfolioData.js</small>
              </span>
            ) : (
              <a className="btn btn--ghost" href={project.githubLink} target="_blank" rel="noreferrer">
                GitHub repository
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            )
          )}

          {project.demoLink && (
            demoPending ? (
              <span className="placeholder-chip">
                Live demo <small>edit in portfolioData.js</small>
              </span>
            ) : (
              <a
                className="btn btn--primary"
                href={project.demoLink}
                {...(project.demoLink.startsWith('#') ? {} : { target: '_blank', rel: 'noreferrer' })}
              >
                {project.demoLink.startsWith('#') ? 'Explore project' : 'Live demo'}
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            )
          )}
        </div>
      </div>
    </Reveal>
  )
}