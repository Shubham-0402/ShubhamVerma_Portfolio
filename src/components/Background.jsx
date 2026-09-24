import { useEffect, useRef } from 'react'
import './Background.css'

/**
 * Full-page atmospheric backdrop:
 * layered glows that drift slowly, faint structure lines,
 * and a grain overlay. The layer gently parallaxes on scroll.
 */
export default function Background() {
  const layerRef = useRef(null)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) return undefined

    let frame = 0
    let current = 0
    let target = 0

    const onScroll = () => {
      target = window.scrollY
    }

    const tick = () => {
      current += (target - current) * 0.08
      if (Math.abs(target - current) > 0.5 && layerRef.current) {
        layerRef.current.style.setProperty('--scroll-depth', current.toFixed(1))
      }
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
    <div className="background" ref={layerRef} aria-hidden="true">
      <div className="background-base" />
      <div className="background-orb orb-cyan" />
      <div className="background-orb orb-blue" />
      <div className="background-orb orb-violet" />
      <div className="background-orb orb-amber" />
      <div className="background-lines" />
      <div className="background-grain" />
      <div className="background-vignette" />
    </div>
  )
}