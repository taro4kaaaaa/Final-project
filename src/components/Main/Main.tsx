import React from 'react'
import styles from './Main.module.css'
import { useTranslation } from "react-i18next"
import imgslice_4_1 from '../../assets/slice-4-1.png'
import imgslice_5_1 from '../../assets/slice-5-1.png'
import imgslice_6_1 from '../../assets/slice-6-1.png'

interface MainProps {
  className?: string
}

export const Main: React.FC<MainProps> = ({ className }) => {

  const { t } = useTranslation()

  return (
    <div className={`${styles['main']} ${className || ''}`}>
      <span className={styles['im-konstantin-tarasov']}>
        I'M KONSTANTIN TARASOV<br />FRONTEND-DEVELOPER
      </span>
      
      {/* Блок 1 - Montessori Assistant Teacher */}
      <span className={styles['montessori-assistant']}>
        {t("main.work1")}
      </span>
      
      {/* Блок 2 - Computer Science Teacher */}
      <span className={styles['computer-science']}>
         {t("main.work2")}
      </span>
      
      {/* Блок 3 - Information Technology Engineer */}
      <span className={styles['information-technology']}>
           {t("main.work3")}
      </span>
      
      <a href="#about" className={styles['about-me']}> {t("main.about")}</a>
      <a href="#projects" className={styles['project']}> {t("main.projects")}</a>
      <a href="#contacts" className={styles['contact']}> {t("main.contact")}</a>
      <img className={styles['slice41']} src={imgslice_4_1} alt="slice41" />
      <img className={styles['slice51']} src={imgslice_5_1} alt="slice51" />
      <img className={styles['slice61']} src={imgslice_6_1} alt="slice61" />
    </div>
  )
}