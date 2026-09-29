import { useEffect, useRef, useState } from 'react'

/**
 * Fade / slide-in wrapper, revealing children once they enter
 * the viewport. `data-reveal` drives the direction:
 *   'up' (default) | 'left' | 'right' | 'scale'
 */
export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
}) {
  const ref = useRef(null)
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [visible, setVisible] = useState(reduceMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || reduceMotion) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      className={`reveal${visible ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}