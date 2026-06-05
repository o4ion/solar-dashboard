import styles from './EnergySummary.module.css'

function SummaryTile({ label, value, unit }) {
  return (
    <div className={styles.tile}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}<span className={styles.unit}> {unit}</span></p>
    </div>
  )
}

function EnergySummary({ energySummary }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Energy Summary</h2>
      <div className={styles.grid}>
        <SummaryTile label="Today's Energy" value={energySummary.todayKWh} unit="kWh" />
        <SummaryTile label="This Week" value={energySummary.thisWeekKWh} unit="kWh" />
        <SummaryTile label="This Month" value={energySummary.thisMonthKWh} unit="kWh" />
        <SummaryTile label="Lifetime Total" value={energySummary.totalLifetimeKWh} unit="kWh" />
        <SummaryTile label="CO2 Saved Today" value={energySummary.co2SavedKgToday} unit="kg" />
      </div>
    </section>
  )
}

export default EnergySummary