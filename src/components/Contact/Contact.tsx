import { useState } from "react"
import styles from './Contact.module.css'
import imgfullsizerender_3_1 from '../../assets/fullsizerender-3-1.png'
import { ContactModal } from "./ContactModal"
import { useTranslation } from "react-i18next"

interface ContactProps {
  className?: string
}

export const Contact: React.FC<ContactProps> = ({ className }) => {

  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div id = "contacts" className={`${styles['contact-1']} ${className || ''}`}>
        <span className={styles['contacts']}>{t("contact.title")}</span>

        <a 
        href="https://t.me/taro4ka" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles['telegram']}
        >
          telegram
        </a>

        <span className={styles['email']} onClick={() => setOpen(true)}>
        email
        </span>

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
          max
        </a>

        <a
          href="https://wa.me/79611773828"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['whatsapp']}
        >
          whats`app
        </a>

        <a
          href="https://instagram.com/taro4kaaa"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['instagram']}
        >
          instagram
        </a>

        <a
          href="https://x.com/durov"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['twitter']}
        >
          twitter
        </a>

        <img className={styles['contact_photo']} src={imgfullsizerender_3_1} alt="contact photo" />
    </div>
  )
}