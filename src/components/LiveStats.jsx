function StatCard({ label, value, unit }) {
  return (
    <div className="stat-card">
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__value">{value}<span className="stat-card__unit"> {unit}</span></p>
    </div>
  )
}

function LiveStats({ liveStats }) {
  return (
    <section className="live-stats">
      <h2 className="section-title">Live Stats</h2>
      <div className="live-stats__grid">
        <StatCard label="Current Output" value={liveStats.currentOutputKW} unit="kW" />
        <StatCard label="Today's Peak" value={liveStats.peakOutputTodayKW} unit="kW" />
        <StatCard label="Efficiency" value={liveStats.efficiencyPercent} unit="%" />
        <StatCard label="Battery Level" value={liveStats.batteryLevelPercent} unit="%" />
        <StatCard label="Grid Export" value={liveStats.gridExportKW} unit="kW" />
        <StatCard label="Self Consumption" value={liveStats.selfConsumptionKW} unit="kW" />
      </div>
    </section>
  )
}

export default LiveStats