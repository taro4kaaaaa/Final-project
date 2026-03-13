import styles from './Desktop.module.css'
import { Home } from '../Home/Home'
import { Main } from '../Main/Main'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact'

interface DesktopProps {
  className?: string
}


export const Desktop: React.FC<DesktopProps> = ({ className }) => {
  return (
    <div className={`${styles.desktopWrapper} ${className || ''}`}>
      <div className={styles.desktop}>
        <Home />
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}