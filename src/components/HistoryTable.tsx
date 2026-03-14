function HistoryTable({ title, rows }: { title: string; rows: ReadonlyArray<{ year: number; month: number; content: string }> }) {
  return (
    <table className="history">
      <colgroup>
        <col style={{ width: '60px' }} />
        <col style={{ width: '40px' }} />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>年</th>
          <th>月</th>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td>{row.year}</td>
            <td>{row.month}</td>
            <td>{row.content}</td>
          </tr>
        ))}
        {title === '職歴' && (
          <>
            <tr>
              <td></td>
              <td></td>
              <td>現在に至る</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="history-end">以上</td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  )
}

export default HistoryTable
