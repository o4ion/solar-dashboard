import styles from './PanelGroupTable.module.css'

function PanelGroupTable({ panelGroups }) {
  function getRowClass(status) {
    if (status === 'Offline') return styles.offline
    if (status === 'Degraded') return styles.degraded
    return ''
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Panel Groups</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Group</th>
            <th>Panels</th>
            <th>Output (kW)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {panelGroups.map((group) => (
            <tr key={group.groupId} className={getRowClass(group.status)}>
              <td>{group.groupId}</td>
              <td>{group.panels}</td>
              <td>{group.outputKW}</td>
              <td>{group.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default PanelGroupTable