import './Bird.css'

/**
 * A subtle bird silhouette that glides across the photograph.
 * Rendered as `aria-hidden` decoration; stays inside the photo crop.
 */
export default function Bird({ position = 'near' }) {
  return (
    <span className={`bird bird--${position}`} aria-hidden="true">
      <svg viewBox="0 0 120 56" className="bird-svg">
        <path d="M4 34 C10 20 26 12 42 20 C52 25 62 27 74 24 C88 20 102 12 116 22 C110 26 100 30 88 31 C78 32 66 34 54 36 C40 38 24 40 12 38 C7 37 4 36 4 34 Z" />
      </svg>
    </span>
  )
}