import './Marquee.css'

const TONES = {
  cyan: 'tone-cyan',
  blue: 'tone-blue',
  violet: 'tone-violet',
  amber: 'tone-amber',
  white: 'tone-white',
}

/**
 * Continuous moving display-board text.
 * The track holds two identical groups so the loop is seamless.
 */
export default function Marquee({ words, label = 'currently' }) {
  const group = (hidden = false) => (
    <div className="marquee-group" key={hidden ? 'duplicate' : 'original'} aria-hidden={hidden}>
      {words.map((word) => (
        <span className={`word ${TONES[word.tone] || 'tone-white'}`} key={`${word.text}-${hidden}`}>
          {word.text}
          <span className="word-mark" aria-hidden="true" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" role="presentation">
      <span className="marquee-label mono-label">{label}</span>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {group()}
          {group(true)}
        </div>
      </div>
    </div>
  )
}