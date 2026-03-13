import styles from './Main.module.css'
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import imgslice_4_1 from '../../assets/slice-4-1.png'
import imgslice_5_1 from '../../assets/slice-5-1.png'
import imgslice_6_1 from '../../assets/slice-6-1.png'

interface MainProps {
  className?: string
}

export const Main: React.FC<MainProps> = ({ className }) => {

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
  className={`${styles.main} ${styles["hidden-blur"]} ${className || ''}`}
  >

    <header className={styles['im-konstantin-tarasov']}>
      I'M KONSTANTIN TARASOV<br />FRONTEND-DEVELOPER
    </header>

    <section className={styles['montessori-assistant']}>
      {t("main.work1")}
    </section>

    <section className={styles['computer-science']}>
      {t("main.work2")}
    </section>

    <section className={styles['information-technology']}>
      {t("main.work3")}
    </section>

    <a href="#about" className={styles['about-me']}>
      {t("main.about")}
    </a>

    <a href="#projects" className={styles['project']}>
      {t("main.projects")}
    </a>

    <a href="#contacts" className={styles['contact']}>
      {t("main.contact")}
    </a>

    <img className={styles['photo_part1']} src={imgslice_4_1} alt="Photo part 1" />
    <img className={styles['photo_part2']} src={imgslice_5_1} alt="Photo part 2" />
    <img className={styles['photo_part3']} src={imgslice_6_1} alt="Photo part 3" />

  </div>
  )
}