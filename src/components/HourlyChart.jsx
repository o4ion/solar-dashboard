import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function HourlyChart({ hourlyToday }) {
  return (
    <section className="chart-section">
      <h2 className="section-title">Hourly Output Today</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={hourlyToday}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis unit=" kW" />
          <Tooltip formatter={(value) => [`${value} kW`, 'Output']} />
          <Line type="monotone" dataKey="kw" stroke="#f59e0b" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

export default HourlyChart