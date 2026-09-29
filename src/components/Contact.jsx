import { contact, isPlaceholder, personal } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Contact.css'

export default function Contact() {
  const emailPending = isPlaceholder(personal.email)

  const rows = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      pending: emailPending,
      external: false,
    },
    {
      label: 'Phone (India)',
      value: personal.phoneIndia,
      href: `tel:${personal.phoneIndia.replace(/\s/g, '')}`,
      pending: isPlaceholder(personal.phoneIndia),
      external: false,
    },
    {
      label: 'Phone (Nepal)',
      value: personal.phoneNepal,
      href: `tel:${personal.phoneNepal.replace(/\s/g, '')}`,
      pending: isPlaceholder(personal.phoneNepal),
      external: false,
    },
    {
      label: 'Location',
      value: personal.location,
    },
    {
      label: 'GitHub',
      value: personal.github,
      href: personal.github,
      pending: isPlaceholder(personal.github),
      external: true,
    },
    {
      label: 'LinkedIn',
      value: personal.linkedin,
      href: personal.linkedin,
      pending: isPlaceholder(personal.linkedin),
      external: true,
    },
    {
      label: 'Instagram',
      value: personal.instagram,
      href: personal.instagram,
      pending: isPlaceholder(personal.instagram),
      external: true,
    },
    {
      label: 'Facebook',
      value: personal.facebook,
      href: personal.facebook,
      pending: isPlaceholder(personal.facebook),
      external: true,
    },
    {
      label: 'CV',
      value: 'Coming Soon',
      pending: true,
      soon: true,
    },
  ]

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={<><span>Let's build</span> <span className="text-gradient">something.</span></>}
          lede={contact.text}
          className="section-head--center"
        />

        <Reveal className="contact-cta" delay={80}>
          {emailPending ? (
            <span className="placeholder-chip">
              Email <small>YOUR_EMAIL_HERE — edit in portfolioData.js</small>
            </span>
          ) : (
            <a className="btn btn--primary contact-cta-btn" href={`mailto:${personal.email}`}>
              {personal.email}
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          )}
        </Reveal>

        <Reveal as="ul" className="contact-list" delay={140}>
          {rows.map((row) => (
            <li key={row.label}>
              <span className="mono-label contact-list-label">{row.label}</span>
              {row.soon ? (
                <span className="contact-list-value placeholder-chip">{row.value}</span>
              ) : !row.href ? (
                <span className="contact-list-value">{row.value}</span>
              ) : row.pending ? (
                <span className="contact-list-value placeholder-chip">{row.value}</span>
              ) : (
                <a
                  className="contact-list-value"
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {row.value.replace(/^https?:\/\//, '')}
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </li>
          ))}
        </Reveal>

        <Reveal className="contact-closing" delay={120}>
          <span className="contact-closing-mark" aria-hidden="true" />
          <h3>{contact.closingTitle}</h3>
          <p>{contact.closingLine}</p>
        </Reveal>
      </div>
    </section>
  )
}