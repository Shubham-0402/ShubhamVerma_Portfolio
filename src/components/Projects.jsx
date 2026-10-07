import { useState, useEffect, useRef, useCallback } from 'react'
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

const AUTO_SLIDE_INTERVAL = 5000 // 5 seconds

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 1 = next (right), -1 = prev (left), 0 = none
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const isMountedRef = useRef(true)
  // Ref for synchronous transition state check in timer
  const isTransitioningRef = useRef(false)

  const items = projects.items
  const totalItems = items.length

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true
    setDirection(1)
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % totalItems)
  }, [totalItems])

  const goToPrev = useCallback(() => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true
    setDirection(-1)
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }, [totalItems])

  const goToIndex = useCallback((index) => {
    if (isTransitioningRef.current || index === activeIndex) return
    isTransitioningRef.current = true
    setDirection(index > activeIndex ? 1 : -1)
    setIsTransitioning(true)
    setActiveIndex(index)
  }, [activeIndex])

  // Handle transition end
  const onTransitionEnd = useCallback(() => {
    setIsTransitioning(false)
    setDirection(0)
    isTransitioningRef.current = false
  }, [])

  // Auto-slide timer - resets when activeIndex changes
  useEffect(() => {
    isMountedRef.current = true
    const timer = setInterval(() => {
      if (!isMountedRef.current) return
      if (isTransitioningRef.current) return
      goToNext()
    }, AUTO_SLIDE_INTERVAL)
    return () => {
      isMountedRef.current = false
      clearInterval(timer)
    }
  }, [goToNext])

  // Pause auto-slide on hover
  useEffect(() => {
    if (isHovered) {
      // Timer will naturally reset when user stops hovering and activeIndex hasn't changed
      // The interval continues but navigation clicks are blocked by isTransitioningRef check
    }
  }, [isHovered])

  const currentProject = items[activeIndex]
  const githubPending = isPlaceholder(currentProject.githubLink)
  const demoPending = isPlaceholder(currentProject.demoLink)

  // Calculate slide class for animation
  const slideClass = isTransitioning
    ? direction === 1
      ? 'slide-exit-left slide-enter-right'
      : 'slide-exit-right slide-enter-left'
    : 'slide-active'

  return (
    <section className="section projects" id="projects" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.heading} lede={projects.lede} />
        <Reveal>
          <p className="projects-note mono-label">{projects.note}</p>
        </Reveal>

        <div className="projects-carousel">
          {/* LEFT ARROW */}
          <button
            className="carousel-arrow carousel-arrow--prev"
            onClick={goToPrev}
            aria-label="Previous work"
            disabled={isTransitioning}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* CAROUSEL VIEWPORT */}
          <div className="carousel-viewport" role="region" aria-label="Project showcase" aria-roledescription="carousel">
            {/* Current/Active Slide */}
            <div className={`carousel-slide ${slideClass}`} onTransitionEnd={onTransitionEnd}>
              <ProjectCard project={currentProject} githubPending={githubPending} demoPending={demoPending} />
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            className="carousel-arrow carousel-arrow--next"
            onClick={goToNext}
            aria-label="Next work"
            disabled={isTransitioning}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* INDICATORS */}
        <div className="carousel-indicators" aria-label="Project navigation">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>

        {/* Counter: "01 / 04" */}
        <div className="carousel-counter" aria-hidden="true">
          <span className="carousel-counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="carousel-counter-separator" aria-hidden="true">/</span>
          <span className="carousel-counter-total">{String(totalItems).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, githubPending, demoPending }) {
  return (
    <article className="project-card">
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
    </article>
  )
}