import { useId } from 'react'
import './ProjectVisual.css'

/**
 * Decorative scene art for each project. These are abstract line
 * illustrations (not screenshots) themed around what the project does.
 */
export default function ProjectVisual({ visual = 'vision' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')

  switch (visual) {
    case 'vision':
      return <VisionScene uid={uid} />
    case 'lab':
      return <LabScene uid={uid} />
    case 'sign':
      return <SignScene uid={uid} />
    case 'web':
    default:
      return <WebScene uid={uid} />
  }
}

function VisionScene({ uid }) {
  return (
    <svg className="pv pv--vision" viewBox="0 0 420 320" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0e223c" />
          <stop offset="1" stopColor="#0a1426" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" fill={`url(#${uid})`} />
      <g className="pv-dots">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i % 8) * 54 + 20
          const y = Math.floor(i / 8) * 52 + 18
          return <circle key={i} cx={x} cy={y} r="1.3" />
        })}
      </g>

      {/* corner brackets */}
      <g className="pv-bracket">
        <path d="M78 62 h28 M78 62 v28" />
        <path d="M342 62 h-28 M342 62 v28" />
        <path d="M78 268 h28 M78 268 v-28" />
        <path d="M342 268 h-28 M342 268 v-28" />
      </g>

      {/* wireframe subject */}
      <g className="pv-wire">
        <circle cx="210" cy="128" r="42" />
        <path d="M156 138 c8 40 20 52 54 52 s46 -12 54 -52" />
        <path d="M176 190 l-22 34 M244 190 l22 34" />
      </g>

      {/* detected face frame */}
      <g className="pv-face">
        <rect x="168" y="86" width="84" height="84" />
        <circle cx="192" cy="90" r="4" />
        <circle cx="228" cy="88" r="4" />
        <path d="M190 120 h40" />
      </g>

      {/* scan line */}
      <rect className="pv-scan" x="70" y="168" width="280" height="2" rx="1" />

      {/* readouts */}
      <g className="pv-mono">
        <text x="84" y="300">FACE DETECTED</text>
        <text x="272" y="300">ID: 0001</text>
        <text x="330" y="52">LIVE</text>
      </g>
    </svg>
  )
}

function LabScene({ uid }) {
  return (
    <svg className="pv pv--lab" viewBox="0 0 420 320" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a1708" />
          <stop offset="1" stopColor="#120c24" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" fill={`url(#${uid})`} />

      {/* flask */}
      <g className="pv-lab-rig">
        <path d="M190 44 h42 M196 52 h-14 M208 52 v22" />
        <path d="M206 74 h14 l6 8 v106 a44 44 0 0 1-52-68 l14-46 z" />
        <path d="M192 190 a32 32 0 0 1 48 26" />
      </g>

      {/* liquid */}
      <path className="pv-flask-liquid" d="M220 106 l4 -14 h-28 l4 12 a30 30 0 0 0 -4 14 44 44 0 0 1 24 4 30 30 0 0 0 0 -16 z" />

      {/* bubbles */}
      <g className="pv-bubbles">
        <circle className="pu" cx="202" cy="120" r="3" />
        <circle cx="212" cy="110" r="5" />
        <circle cx="196" cy="138" r="4" />
        <circle cx="220" cy="96" r="3" />
      </g>

      {/* formula + labels */}
      <g className="pv-mono">
        <text x="182" y="252">H₂O · AG</text>
        <text x="74" y="84">SAFE</text>
        <text x="318" y="300">AGITATING</text>
      </g>

      {/* orbit ring */}
      <circle className="pv-orbit" cx="330" cy="90" r="34" />
      <circle cx="330" cy="90" r="2.5" />
    </svg>
  )
}

function SignScene({ uid }) {
  return (
    <svg className="pv pv--sign" viewBox="0 0 420 320" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a2540" />
          <stop offset="1" stopColor="#161136" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" fill={`url(#${uid})`} />

      {/* hand */}
      <g className="pv-hand">
        <path d="M150 168 l-10 46 c32 6 66 6 100 2 l2 -42 c-30 6 -60 6 -82 8 l-4 -14 z" />
        <path d="M150 168 c-2 -26 12 -40 40 -40 c2 12 -2 30 -10 44" />
        <path d="M192 118 l16 4 c8 2 18 2 26 -2 l6 -16 c-14 -4 -34 -2 -48 12 z" />
        <path d="M168 198 l6 34 c10 0 22 0 34 -2 l-2 -32" />
        <path d="M216 122 l10 2 c14 1 28 -2 38 -8 l8 10 c-12 14 -34 20 -56 14 l-8 -14 z" />
      </g>

      {/* gesture arcs */}
      <g className="pv-arcs">
        <path d="M96 96 a54 54 0 0 1 44 -22" />
        <path d="M352 96 a54 54 0 0 0 -44 -22" />
      </g>

      {/* speech output */}
      <g className="pv-speech">
        <rect x="286" y="150" width="96" height="54" rx="10" />
        <path d="M310 204 l-8 18 22 -20" />
        <line x1="304" y1="168" x2="364" y2="168" />
        <line x1="304" y1="182" x2="348" y2="182" />
      </g>

      <g className="pv-mono">
        <text x="84" y="300">GESTURE → TEXT</text>
        <text x="278" y="292">SPEAKING</text>
      </g>
    </svg>
  )
}

function WebScene({ uid }) {
  return (
    <svg className="pv pv--web" viewBox="0 0 420 320" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0c1e3d" />
          <stop offset="1" stopColor="#170f30" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" fill={`url(#${uid})`} />

      {/* browser window */}
      <g className="pv-browser">
        <rect x="60" y="60" width="300" height="200" rx="10" />
        <rect x="60" y="60" width="300" height="34" rx="10" />
        <circle cx="78" cy="77" r="4" />
        <circle cx="94" cy="77" r="4" />
        <circle cx="110" cy="77" r="4" />
        <rect x="130" y="70" width="120" height="14" rx="7" />
      </g>

      {/* code lines */}
      <g className="pv-code">
        <line x1="84" y1="120" x2="200" y2="120" />
        <line x1="84" y1="140" x2="248" y2="140" />
        <line x1="98" y1="160" x2="230" y2="160" />
        <line x1="98" y1="180" x2="266" y2="180" />
        <line x1="84" y1="200" x2="216" y2="200" />
        <line x1="84" y1="220" x2="160" y2="220" />
      </g>

      {/* cursor */}
      <path className="pv-cursor" d="M252 168 l4 20 6 -6 6 14 7 -3 -6 -14 8 -5 z" />

      <g className="pv-mono">
        <text x="74" y="300">BUILDING FOR THE WEB</text>
        <text x="316" y="52">src/</text>
        <text x="266" y="52" className="pv-blink">_</text>
      </g>
    </svg>
  )
}