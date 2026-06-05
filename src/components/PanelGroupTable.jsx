function PanelGroupTable({ panelGroups }) {
  function getRowClass(status) {
    if (status === 'Offline') return 'table-row--offline'
    if (status === 'Degraded') return 'table-row--degraded'
    return ''
  }

  return (
    <section className="panel-table-section">
      <h2 className="section-title">Panel Groups</h2>
      <table className="panel-table">
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