'use client'
import { useState } from 'react'
import styles from './WhatsAppFloat.module.css'
import { IconWhatsApp } from '@/components/Icons'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={`${styles.tooltip} ${hovered ? styles.show : ''}`}>
        Agendar consulta
      </span>
      <a
        href="https://wa.me/5588988211715"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.bubble}
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <IconWhatsApp size={22} color="white" />
      </a>
    </div>
  )
}
