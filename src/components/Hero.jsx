import { useEffect, useRef } from 'react'
import { personal } from '../data/portfolioData'
import Reveal from './Reveal'
import Bird from './Bird'
import './Hero.css'

const ROLE_TONES = ['cyan', 'blue', 'amber', 'violet']

export default function Hero() {
  const photoRef = useRef(null)

  // gentle portrait parallax — the photo glides slower than the page
  useEffect(() => {
    const node = photoRef.current
    if (!node) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    let current = 0
    let target = 0

    const onScroll = () => {
      target = window.scrollY * 0.06
    }

    const tick = () => {
      current += (target - current) * 0.09
      node.style.transform = `translate3d(0, ${Math.min(current, 48).toFixed(1)}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-inner container">
        <div className="hero-grid">
          {/* ---------------- portrait ---------------- */}
          <div className="hero-photo" ref={photoRef}>
            <Reveal direction="scale" className="hero-photo-reveal">
              <figure className="photo-frame">
                <div className="photo-halo" aria-hidden="true" />
                <div className="photo-sheet">
                  <div className="photo-crop">
                    <img
                      src={personal.photo}
                      alt={personal.photoAlt}
                      style={{ objectPosition: personal.photoPosition }}
                      className="photo-img"
                      width="720"
                      height="1281"
                    />
                    <div className="photo-veil" aria-hidden="true" />
                    <Bird position="near" />
                    <Bird position="far" />
                  </div>
                </div>
                <figcaption className="photo-caption">
                  <span>{personal.firstName}</span>
                  <span className="photo-caption-dot" aria-hidden="true" />
                  <span>{personal.lastName}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* ---------------- copy ---------------- */}
          <div className="hero-copy">
            <Reveal>
              <p className="hero-hello">
                <span aria-hidden="true" className="hero-hello-dash" />
                Hello, I'm
              </p>
            </Reveal>

            <div className="hero-name-slot">
              <h1 className="hero-name hero-name-drop">
                <span className="hero-name-first">{personal.firstName}</span>{' '}
                <span className="hero-name-last">{personal.lastName}</span>
              </h1>
            </div>

            <Reveal delay={170}>
              <ul className="hero-roles" aria-label="What Shubham does">
                {personal.roles.map((role, index) => (
                  <li key={role} className={`hero-role tone-${ROLE_TONES[index % ROLE_TONES.length]}`}>
                    <span className="hero-role-dot" aria-hidden="true" />
                    {role}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="hero-intro">{personal.heroIntro}</p>
            </Reveal>

            <Reveal delay={310}>
              <div className="hero-actions">
                <a className="btn btn--primary" href="#projects">
                  View my work
                  <span className="btn-arrow" aria-hidden="true">↓</span>
                </a>
                <a className="btn btn--ghost" href="#contact">
                  Get in touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <a className="hero-scroll" href="#about">
                <span className="mono-label">Scroll to explore</span>
                <span className="hero-scroll-line" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      <span className="hero-watermark" aria-hidden="true">
        {personal.lastName}
      </span>
    </section>
  )
}