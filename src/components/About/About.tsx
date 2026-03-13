import styles from './About.module.css'
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import imgfullsizerender_2_1 from '../../assets/fullsizerender-2-1.png'

interface AboutProps {
  className?: string
}

export const About: React.FC<AboutProps> = ({ className }) => {

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
    id = "about"
    className={`${styles['about']} ${styles["hidden-blur"]} ${className || ''}`}
    >
      <h2 className={styles['about-me-1']}>{t("about.title")}</h2>
      <h2 className={styles['education']}>{t("about.title1")}</h2>
      <p className={styles['im-afrontend']}>
        {t("about.description")}
      </p>
      <p className={styles['belgorod-state-technological']}>
        {t("about.description1")}
      </p>

      <img className={styles['about_photo']} src={imgfullsizerender_2_1} alt="about photo" />
    </div>
  )
}