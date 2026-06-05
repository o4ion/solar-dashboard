import { useTheme } from '../context/ThemeContext'

function SiteHeader({ siteInfo }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="site-header__info">
        <h1 className="site-header__name">{siteInfo.siteName}</h1>
        <p className="site-header__location">{siteInfo.location}</p>
        <p className="site-header__panels">
          Total Panels: {siteInfo.totalPanels} | Active: {siteInfo.activePanels}
        </p>
      </div>
      <div className="site-header__right">
        <span className="site-header__badge">Online</span>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  )
}

export default SiteHeader