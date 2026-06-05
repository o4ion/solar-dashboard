import SiteHeader from './components/SiteHeader'
import LiveStats from './components/LiveStats'
import EnergySummary from './components/EnergySummary'
import HourlyChart from './components/HourlyChart'
import WeeklyChart from './components/WeeklyChart'
import PanelGroupTable from './components/PanelGroupTable'
import { siteInfo, liveStats, energySummary, hourlyToday, weeklyData, panelGroups } from './data/solarData'
import './App.css'

function App() {
  return (
    <div className="app">
      <SiteHeader siteInfo={siteInfo} />
      <LiveStats liveStats={liveStats} />
      <EnergySummary energySummary={energySummary} />
      <HourlyChart hourlyToday={hourlyToday} />
      <WeeklyChart weeklyData={weeklyData} />
      <PanelGroupTable panelGroups={panelGroups} />
    </div>
  )
}

export default App