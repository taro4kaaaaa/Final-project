import styles from './Projects.module.css'
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import imggroup_44 from '../../assets/group-44.png'
import imggroup_70 from '../../assets/group-70.png'
import imggroup_50 from '../../assets/group-50.png'
import imggroup_68 from '../../assets/group-68.png'

interface ProjectsProps {
  className?: string
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {

  const { t } = useTranslation()

  useEffect(() => {

  const items = document.querySelectorAll(`.${styles.projectItem}`)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.projectShow)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  items.forEach((item) => observer.observe(item))

  return () => observer.disconnect()

}, [])

  return (
    <main id = "projects" className={`${styles['project-1']} ${className || ''}`}>
      <h2 className={styles['projects']}>{t("projects.title")} </h2>
      
      {/* Group 1 */}
      <section className={`${styles.group1} ${styles.projectItem}`}
      style={{ transitionDelay: "0.1s" }}>
        <p className={styles['a-project-demonstrating']} >
          {t("projects.object1")}
        </p>
        <div className={styles['tech-stack-logos']}>
          <a 
            href="https://github.com/taro4kaaaaa/TypeScript" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['ts']} src={imggroup_44} alt="TS" />
          </a>
        </div>
      </section>

      {/* Group 2 */}
      <section className={`${styles.group2} ${styles.projectItem}`}
      style={{ transitionDelay: "0.3s" }}>
        <p className={styles['a-project-consisting']}>
          {t("projects.object2")}
        </p>
        <div className={styles['tech-stack-logos-1']}>
          <a 
            href="https://github.com/taro4kaaaaa/dz4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['react']} src={imggroup_70} alt="React" />
          </a>
        </div>
      </section>

      {/* Group 3 */}
      <section className={`${styles.group3} ${styles.projectItem}`}
      style={{ transitionDelay: "0.5s" }}>
        <p className={styles['a-project-consisting-1']}>
          {t("projects.object3")}
        </p>
        <div className={styles['tech-stack-logos-2']}>
          <a 
            href="https://github.com/taro4kaaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['docker']} src={imggroup_50} alt="Docker" />
          </a>
        </div>
      </section>

      {/* Group 4 */}
      <section className={`${styles.group4} ${styles.projectItem}`}
      style={{ transitionDelay: "0.7s" }}>
        <p className={styles['a-project-consisting-2']}>
          {t("projects.object4")}
        </p>
        <div className={styles['tech-stack-logos-3']}>
           <a 
            href="https://github.com/taro4kaaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['js']} src={imggroup_68} alt="JS" />
          </a>

        </div>
      </section>
    </main>
  )
}