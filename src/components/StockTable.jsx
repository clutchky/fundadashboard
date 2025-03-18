import { metricStrings } from "../ui/utilities";
import Message from "./Message";

function StockTable({ stock }) {
  const financialData = stock.financialData;

  if (financialData.length === 0) {
    return <Message message="Add an analysis first!" />;
  }

  const years = financialData.map((stock) => stock.year);
  const metrics = Object.keys(financialData[0]).filter((key) => key !== "year");

  // console.log(financialData);
  // console.log("financial data", financialData);

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
        {metrics.map((metric, metricIndex) => {
          const label = metricStrings[metric] || metric;

          return (
            <tr className="border border-gray-300" key={metricIndex}>
              <td className="border border-gray-300">{label}</td>
              {financialData.map((item, yearIndex) => {
                const value = item[metric];

                const displayValue =
                  metric === "cashflowGtLongTermDebt"
                    ? value
                      ? "yes"
                      : "no"
                    : value;

                return (
                  <td
                    className="border border-gray-300 px-2 py-1"
                    key={yearIndex}
                  >
                    {displayValue}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StockTable;
