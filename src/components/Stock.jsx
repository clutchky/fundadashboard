import { Link, useLoaderData } from "react-router-dom";
import { getStock } from "../services/apiStocks";

function Stock() {
  const stock = useLoaderData();

  return (
    <div>
      <Link to={-1}>Back</Link>
      <div>
        <h1>{stock.companyName}</h1>
        <h3>{stock.tickerSymbol}</h3>
      </div>

      <div style={{ display: "flex" }}>
        {stock.financialData.map((data, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <div style={{ marginBottom: "10px" }}>
              <div style={{ margin: "10px 0px", fontWeight: "bold" }}>
                {data.year}
              </div>
              <p>Sales Revenue: {data.salesRevenue}</p>
              <p>Cost of Revenue: {data.costOfRevenue}</p>
              <p>Gross Profit: {data.grossProfit}</p>
              <p>Operating Expenses: {data.operatingExpenses}</p>
              <p>Operating Income: {data.operatingIncome}</p>
              <p>Interest Expenses: {data.interestExpenses}</p>
              <p>Income Taxes: {data.incomeTaxes}</p>
              <p>Net Income: {data.netIncome}</p>
              <p>Earnings per share: &#8369;{data.earningsPerShare}</p>
              <p>P/E Ratio: {data.pERatio}</p>
              <p>Earnings Yield: {data.earningsYield}%</p>
              <p>Gross Profit Margin Ratio: {data.gpmRatio}%</p>
              <p>Operating Profit Margin Ratio: {data.opmRatio}%</p>
              <p>Net Profit Margin Ratio: {data.npmRatio}%</p>
              <p>EBIT: {data.ebit}</p>
              <p>Other Income: {data.otherIncome}</p>
              <p>Total Assets: {data.totalAssets}</p>
              <p>Total Liabilities: {data.totalLiabilities}</p>
              <p>Return on Equity: {data.rOEquity}%</p>
              <p>Current Assets: {data.currentAssets}</p>
              <p>Current Liabilities: {data.currentLiabilities}</p>
              <p>Short Term Debts: {data.shortTermDebts}</p>
              <p>Long Term Debts: {data.longTermDebts}</p>
              <p>Current Ratio: {data.currentRatio}</p>
              <p>Interest Coverage Ratio: {data.interestCoverageRatio}</p>
              <p>Working Capital Debt Ratio: {data.workingCapitalDebtRatio}</p>
              <p>Operating Cashflow: {data.operatingCashflow}</p>
              <p>Investing Cashflow: {data.investingCashflow}</p>
              <p>Financing Cashflow: {data.financingCashflow}</p>
              <p>Capital Expenditures: {data.capEx}</p>
              <p>Free Cashflow: {data.freeCashflow}</p>
              <p>
                Cashflow &gt; Long Term Debt:{" "}
                {data.cashflowGtLongTermDebt ? "true" : "false"}
              </p>
              <p>Dividend Yield: {data.dividendYield}%</p>
              <p>Total Dividends: &#8369;{data.totalDivs}</p>
              <p>Dividend Payout Ratio: {data.divPayoutRatio}%</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const stock = await getStock(params.stockId);

  return stock;
}

export default Stock;
