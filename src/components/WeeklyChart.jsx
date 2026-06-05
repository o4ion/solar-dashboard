import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './WeeklyChart.module.css'

function WeeklyChart({ weeklyData }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Weekly Output</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis unit=" kWh" />
          <Tooltip formatter={(value) => [`${value} kWh`, 'Output']} />
          <Bar dataKey="kWh" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

export default WeeklyChart