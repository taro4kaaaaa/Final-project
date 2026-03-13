import styles from './Desktop.module.css'
import { Home } from '../Home/Home'
import { Main } from '../Main/Main'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact'
import { ThemeButton } from "../ThemeButton/ThemeButton"
import { useTranslation } from "react-i18next"

interface DesktopProps {
  className?: string
}


export const Desktop: React.FC<DesktopProps> = ({ className }) => {

  const { i18n } = useTranslation()

  return (
    <div className={`${styles.desktopWrapper} ${className || ''}`}>
      <div className={styles.desktop}>
        <header>
           <div className={styles.languageSwitcher}>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
              <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
              <ThemeButton />
           </div>
        </header>
        <main>
          <section id = "home">
            <Home />
          </section>
          <section id = "main">
             <Main />
          </section>
          <section id = "about">
            <About />
          </section>
          <section id = "projects">
            <Projects />
          </section>
          <section id = "contacts">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  )
}