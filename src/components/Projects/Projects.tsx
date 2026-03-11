import styles from './Projects.module.css'
import { useTranslation } from "react-i18next"
import imggroup_44 from '../../assets/group-44.png'
import imggroup_70 from '../../assets/group-70.png'
import imggroup_50 from '../../assets/group-50.png'
import imggroup_68 from '../../assets/group-68.png'

interface ProjectsProps {
  className?: string
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {

  const { t } = useTranslation()

  return (
    <div id = "projects" className={`${styles['project-1']} ${className || ''}`}>
      <span className={styles['projects']}>{t("projects.title")}</span>
      
      {/* Group 1 */}
      <div className={styles['group1']}>
        <span className={styles['a-project-demonstrating']}>
          {t("projects.object1")}
        </span>
        <div className={styles['tech-stack-logos']}>
          <a 
            href="https://github.com/taro4kaaaaa/TypeScript" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['ts']} src={imggroup_44} alt="TS" />
          </a>
        </div>
      </div>

      {/* Group 2 */}
      <div className={styles['group2']}>
        <span className={styles['a-project-consisting']}>
          {t("projects.object2")}
        </span>
        <div className={styles['tech-stack-logos-1']}>
          <a 
            href="https://github.com/taro4kaaaaa/dz4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['react']} src={imggroup_70} alt="React" />
          </a>
        </div>
      </div>

      {/* Group 3 */}
      <div className={styles['group3']}>
        <span className={styles['a-project-consisting-1']}>
          {t("projects.object3")}
        </span>
        <div className={styles['tech-stack-logos-2']}>
          <a 
            href="https://github.com/taro4kaaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['docker']} src={imggroup_50} alt="Docker" />
          </a>
        </div>
      </div>

      {/* Group 4 */}
      <div className={styles['group4']}>
        <span className={styles['a-project-consisting-2']}>
          {t("projects.object4")}
        </span>
        <div className={styles['tech-stack-logos-3']}>
           <a 
            href="https://github.com/taro4kaaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img className={styles['js']} src={imggroup_68} alt="JS" />
          </a>

        </div>
      </div>
    </div>
  )
}