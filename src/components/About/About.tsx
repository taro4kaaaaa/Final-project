import styles from './About.module.css'
import { useTranslation } from "react-i18next"
import imgfullsizerender_2_1 from '../../assets/fullsizerender-2-1.png'

interface AboutProps {
  className?: string
}

export const About: React.FC<AboutProps> = ({ className }) => {

  const { t } = useTranslation()

  return (
    <div id = "about" className={`${styles['about']} ${className || ''}`}>
      <span className={styles['about-me-1']}>{t("about.title")}</span>
      <span className={styles['education']}>{t("about.title1")}</span>
      <span className={styles['im-afrontend']}>
        {t("about.description")}
      </span>
      <span className={styles['belgorod-state-technological']}>
        {t("about.description1")}
      </span>
      <img className={styles['about_photo']} src={imgfullsizerender_2_1} alt="about photo" />
    </div>
  )
}