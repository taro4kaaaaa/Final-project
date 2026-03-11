import { useTranslation } from "react-i18next"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import styles from './Home.module.css'
import imgfd7ecbec_2630_43b7_bf60_a6768e180b2d_1 from '../../assets/fd7ecbec-2630-43b7-bf60-a6768e180b2d-1.png'
import img1 from '../../assets/Ellipse1.png'
import img2 from '../../assets/Ellipse2.png'
import img3 from '../../assets/Ellipse3.png'
import img4 from '../../assets/Ellipse4.png'

interface HomeProps {
  className?: string
}

export const Home: React.FC<HomeProps> = ({ className }) => {

  const { t, i18n } = useTranslation()

  return (
    <div className={`${styles.home} ${className || ''}`}>

      {/* 🔹 Переключатель языка */}
      <div className={styles.languageSwitcher}>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>

        <ThemeButton />
      </div>

      <span className={styles.profile}>
        {t("home.profile")}
      </span>

      <span className={styles['everything-we-do']}>
        {t("home.quote")}
      </span>

      <div className={styles.ellipsesContainer}>
        <img src={img1} alt="the design element" className={styles.ellipse1} />
        <img src={img2} alt="the design element" className={styles.ellipse2} />
        <img src={img3} alt="the design element" className={styles.ellipse3} />
        <img src={img4} alt="the design element" className={styles.ellipse4} />
      </div>

      <img
        className={styles.photo_profile}
        src={imgfd7ecbec_2630_43b7_bf60_a6768e180b2d_1}
        alt="profile"
      />

      <span className={styles['photo-by-andrew']}>
        {t("home.annotation")}
      </span>

    </div>
  )
}