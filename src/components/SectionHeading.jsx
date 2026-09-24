import Reveal from './Reveal'
import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, lede, className = '' }) {
  return (
    <Reveal className={`section-head${className ? ` ${className}` : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  )
}