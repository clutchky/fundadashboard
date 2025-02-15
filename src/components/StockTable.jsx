function StockTable({ stock }) {
  const financialData = stock.financialData;

  const years = financialData.map((stock) => stock.year);
  const metrics = Object.keys(financialData[0]).filter((key) => key !== "year");

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th></th>
          {years.map((year, index) => (
            <th key={index}>{year}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {metrics.map((metric, metricIndex) => (
          <tr key={metricIndex}>
            <td>{metric}</td>
            {financialData.map((item, yearIndex) => (
              <td key={yearIndex}>{item[metric]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockTable;
