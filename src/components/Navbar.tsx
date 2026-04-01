'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AppImage } from './AppImage'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Beatriz Silvestre – Psicóloga">
          <AppImage
            src="/images/logo.png"
            alt="Beatriz Silvestre Lira - Logo"
            width={32}
            height={32}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Beatriz Silvestre</span>
            <span className={styles.logoCrp}>Psicóloga · CRP 11/24329</span>
          </div>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5588988211715"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.navCta}`}
            >
              Agendar consulta
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${open ? styles.hamOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
