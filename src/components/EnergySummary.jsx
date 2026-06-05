function SummaryTile({ label, value, unit }) {
  return (
    <div className="summary-tile">
      <p className="summary-tile__label">{label}</p>
      <p className="summary-tile__value">{value}<span className="summary-tile__unit"> {unit}</span></p>
    </div>
  )
}

function EnergySummary({ energySummary }) {
  return (
    <section className="energy-summary">
      <h2 className="section-title">Energy Summary</h2>
      <div className="energy-summary__grid">
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