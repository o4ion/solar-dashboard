import { useTheme } from '../context/ThemeContext'
import styles from './SiteHeader.module.css'

function SiteHeader({ siteInfo }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>{siteInfo.siteName}</h1>
        <p className={styles.location}>{siteInfo.location}</p>
        <p className={styles.panels}>
          Total Panels: {siteInfo.totalPanels} | Active: {siteInfo.activePanels}
        </p>
      </div>
      <div className={styles.right}>
        <span className={styles.badge}>Online</span>
        <button className={styles.toggle} onClick={toggleTheme}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  )
}

export default SiteHeader