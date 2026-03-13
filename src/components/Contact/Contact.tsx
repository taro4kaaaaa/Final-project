import { useState } from "react"
import styles from './Contact.module.css'
import imgfullsizerender_3_1 from '../../assets/fullsizerender-3-1.png'
import { ContactModal } from "./ContactModal"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"

interface ContactProps {
  className?: string
}

export const Contact: React.FC<ContactProps> = ({ className }) => {

  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["show-blur"])
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (
    <div 
    ref={sectionRef}
    id = "contacts" 
    className={`${styles['contact-1']} ${styles["hidden-blur"]} ${className || ''}`}
    >
        <h2 className={styles['contacts']}>{t("contact.title")}</h2>

        <a 
        href="https://t.me/taro4ka" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles['telegram']}
        >
          Telegram
        </a>

        <p className={styles['email']} onClick={() => setOpen(true)}>
        Email
        </p>

        <ContactModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />

        <a
          href="https://max.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['max']}
        >
          Max
        </a>

        <a
          href="https://wa.me/79611773828"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['whatsapp']}
        >
          WhatsApp
        </a>

        <a
          href="https://instagram.com/taro4kaaa"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['instagram']}
        >
          Instagram
        </a>

        <a
          href="https://x.com/durov"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['twitter']}
        >
          Twitter
        </a>

        <img className={styles['contact_photo']} src={imgfullsizerender_3_1} alt="contact photo" />
    </div>
  )
}