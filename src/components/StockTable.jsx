function StockTable({ stock }) {
  const financialData = stock.financialData;

  const years = financialData.map((stock) => stock.year);
  const metrics = Object.keys(financialData[0]).filter((key) => key !== "year");

  console.log(financialData);

  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-300"></th>
          {years.map((year, index) => (
            <th className="border border-gray-300" key={index}>
              {year}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {metrics.map((metric, metricIndex) => (
          <tr className="border border-gray-300" key={metricIndex}>
            <td className="border border-gray-300">{metric}</td>
            {financialData.map((item, yearIndex) => (
              <td className="border border-gray-300" key={yearIndex}>
                {item[metric]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockTable;
