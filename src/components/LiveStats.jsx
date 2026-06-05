import styles from './LiveStats.module.css'

function StatCard({ label, value, unit }) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}<span className={styles.unit}> {unit}</span></p>
    </div>
  )
}

function LiveStats({ liveStats }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Live Stats</h2>
      <div className={styles.grid}>
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