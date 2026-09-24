import { personal } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{personal.displayName}</span>
          <span className="footer-roles mono-label">
            {personal.roles.slice(0, 3).join(' · ')}
          </span>
        </div>

        <p className="footer-quote">{personal.tagline}</p>

        <p className="footer-meta mono-label">
          © {currentYear} {personal.displayName} — built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}