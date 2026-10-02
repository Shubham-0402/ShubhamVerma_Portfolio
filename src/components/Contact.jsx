import { contact, isPlaceholder, personal } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import './Contact.css'

export default function Contact() {
  const phoneHref = (value) => `tel:${value.replace(/\s/g, '')}`

  /* Compact, clickable contact buttons. Everything is driven from
     portfolioData.js so details stay in one place. */
  const links = [
    {
      key: 'email',
      label: personal.email,
      href: `mailto:${personal.email}`,
      pending: isPlaceholder(personal.email),
    },
    {
      key: 'phone-india',
      label: personal.phoneIndia,
      href: phoneHref(personal.phoneIndia),
      pending: isPlaceholder(personal.phoneIndia),
    },
    {
      key: 'phone-nepal',
      label: personal.phoneNepal,
      href: phoneHref(personal.phoneNepal),
      pending: isPlaceholder(personal.phoneNepal),
    },
    {
      key: 'github',
      label: 'GitHub',
      href: personal.github,
      pending: isPlaceholder(personal.github),
      external: true,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: personal.linkedin,
      pending: isPlaceholder(personal.linkedin),
      external: true,
    },
    {
      key: 'instagram',
      label: 'Instagram',
      href: personal.instagram,
      pending: isPlaceholder(personal.instagram),
      external: true,
    },
    {
      key: 'facebook',
      label: 'Facebook',
      href: personal.facebook,
      pending: isPlaceholder(personal.facebook),
      external: true,
    },
    {
      key: 'location',
      label: personal.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personal.location)}`,
      pending: isPlaceholder(personal.location),
      external: true,
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

        <Reveal as="ul" className="contact-links" delay={80}>
          {links.map((link) => (
            <li key={link.key}>
              {link.pending ? (
                <span className="contact-link placeholder-chip">{link.label}</span>
              ) : (
                <a
                  className="contact-link"
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                  {link.external && <span className="btn-arrow" aria-hidden="true">↗</span>}
                </a>
              )}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
