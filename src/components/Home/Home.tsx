import { useTranslation } from "react-i18next"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import styles from './Home.module.css'
import imgfd7ecbec_2630_43b7_bf60_a6768e180b2d_1 from '../../assets/fd7ecbec-2630-43b7-bf60-a6768e180b2d-1.png'
import img1 from '../../assets/Group6.png'


interface HomeProps {
  className?: string
}

export const Home: React.FC<HomeProps> = ({ className }) => {

  const { t, i18n } = useTranslation()

  return (
    <div className={`${styles.home} ${className || ''}`}>
      <div className={styles.languageSwitcher}>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
        <ThemeButton />
      </div>
          <h1 className={styles.profile}>
            {t("home.profile")}
          </h1>
          <p className={styles['everything-we-do']}>
            {t("home.quote")}
          </p>
          <img src={img1} alt="design element" className={styles.ellipse1} />
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