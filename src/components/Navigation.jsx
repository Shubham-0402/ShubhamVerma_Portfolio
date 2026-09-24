import { useEffect, useState } from 'react'
import { navigation, personal } from '../data/portfolioData'
import './Navigation.css'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (window.scrollY < 160) setActive('home')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navigation.map((item) => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    )

    ids.forEach((id) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-nav-inner container">
        <a className="brand" href="#home" onClick={close} aria-label="Shubham Verma — home">
          <span className="brand-mark" aria-hidden="true">
            {personal.shortMark}
          </span>
          <span className="brand-name">{personal.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-side">
          <a href="#contact" className="nav-cta" onClick={close}>
            Say Hi
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="site-menu"
        className={`nav-mobile${open ? ' is-open' : ''}`}
        aria-label="Mobile"
      >
        <div className="nav-mobile-inner container">
          <div className="nav-mobile-links">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={close}
                className={active === item.id ? 'is-active' : ''}
              >
                <span className="nav-mobile-index">0{index + 1}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="nav-mobile-foot">
            <p className="mono-label">{personal.roles.join(' · ')}</p>
            <a className="btn btn--primary" href="#contact" onClick={close}>
              Let's connect
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}