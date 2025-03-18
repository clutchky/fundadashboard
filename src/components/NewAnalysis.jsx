import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStock, addFinancialData } from "../services/apiStocks";

function NewAnalysis() {
  const stock = useLoaderData();
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [price, setPrice] = useState(0);
  const [salesRevenue, setSalesRevenue] = useState(0);
  const [costOfRevenue, setCostOfRevenue] = useState(0);
  const [operatingExpenses, setOperatingExpenses] = useState(0);
  const [interestExpenses, setInterestExpenses] = useState(0);
  const [incomeTaxes, setIncomeTaxes] = useState(0);
  const [earningsPerShare, setEarningsPerShare] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [currentAssets, setCurrentAssets] = useState(0);
  const [currentLiabilities, setCurrentLiabilities] = useState(0);
  const [shortTermDebts, setShortTermDebts] = useState(0);
  const [longTermDebts, setLongTermDebts] = useState(0);
  const [operatingCashflow, setOperatingCashflow] = useState(0);
  const [investingCashflow, setInvestingCashflow] = useState(0);
  const [financingCashflow, setFinancingCashflow] = useState(0);
  const [capEx, setCapEx] = useState(0);
  const [totalDivs, setTotalDivs] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    const grossProfit = salesRevenue - costOfRevenue;
    const operatingIncome = grossProfit - operatingExpenses;
    const ebit = otherIncome + operatingIncome;
    const pERatio = price / earningsPerShare;
    const earningsYield = (earningsPerShare / price) * 100;
    const netIncome = ebit - incomeTaxes;
    const gpmRatio = (grossProfit / salesRevenue) * 100;
    const opmRatio = (operatingIncome / salesRevenue) * 100;
    const npmRatio = (netIncome / salesRevenue) * 100;
    const rOEquity = (netIncome / (totalAssets - totalLiabilities)) * 100;
    const currentRatio = currentAssets / currentLiabilities;
    const interestCoverageRatio = ebit / interestExpenses;
    const workingCapitalDebtRatio =
      (currentAssets - currentLiabilities) / (shortTermDebts + longTermDebts);
    const freeCashflow = operatingCashflow - capEx;
    const cashflowGtLongTermDebt = freeCashflow * 3 > longTermDebts;
    const dividendYield = (price / totalDivs) * 100;
    const divPayoutRatio = (totalDivs / earningsPerShare) * 100;

    const newStockAnalysis = {
      year,
      price: Number(price),
      salesRevenue,
      costOfRevenue,
      grossProfit,
      operatingExpenses,
      operatingIncome,
      interestExpenses,
      incomeTaxes,
      netIncome,
      earningsPerShare: Number(earningsPerShare),
      pERatio: pERatio.toFixed(2),
      earningsYield: earningsYield.toFixed(2),
      gpmRatio: gpmRatio.toFixed(2),
      opmRatio: opmRatio.toFixed(2),
      npmRatio: npmRatio.toFixed(2),
      ebit,
      otherIncome,
      totalAssets,
      totalLiabilities,
      rOEquity: rOEquity.toFixed(2),
      currentAssets,
      currentLiabilities,
      shortTermDebts,
      longTermDebts,
      currentRatio: currentRatio.toFixed(2),
      interestCoverageRatio: interestCoverageRatio.toFixed(2),
      workingCapitalDebtRatio: workingCapitalDebtRatio.toFixed(2),
      operatingCashflow,
      investingCashflow,
      financingCashflow: Number(financingCashflow),
      capEx,
      freeCashflow,
      cashflowGtLongTermDebt,
      dividendYield: dividendYield.toFixed(2),
      totalDivs: Number(totalDivs),
      divPayoutRatio: divPayoutRatio.toFixed(2),
    };

    const response = await addFinancialData(newStockAnalysis, stock.id, stock);

    if (response.ok) navigate(`/stocks/${stock.id}`);
  }

  return (
    <div>
      <Link to={`/stocks/${stock.id}`}>Back</Link>
      <h1>Add new analysis</h1>
      <div>
        <h3>Income Statement</h3>
      </div>
      <div>
        <label>Year: </label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Sales Revenue: </label>
        <input
          type="text"
          value={salesRevenue}
          onChange={(e) => setSalesRevenue(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Cost of Revenue: </label>
        <input
          type="text"
          value={costOfRevenue}
          onChange={(e) => setCostOfRevenue(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Operating Expenses: </label>
        <input
          type="text"
          value={operatingExpenses}
          onChange={(e) => setOperatingExpenses(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Interest Expense: </label>
        <input
          type="text"
          value={interestExpenses}
          onChange={(e) => setInterestExpenses(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Income Taxes: </label>
        <input
          type="text"
          value={incomeTaxes}
          onChange={(e) => setIncomeTaxes(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Earnings per share: </label>
        <input
          type="text"
          value={earningsPerShare}
          onChange={(e) => setEarningsPerShare(e.target.value)}
        />
      </div>
      <div>
        <label>Other Income: </label>
        <input
          type="text"
          value={otherIncome}
          onChange={(e) => setOtherIncome(Number(e.target.value))}
        />
      </div>
      <div>
        <h3>Balance Sheet</h3>
      </div>
      <div>
        <label>Total Assets:</label>
        <input
          type="text"
          value={totalAssets}
          onChange={(e) => setTotalAssets(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Total Liabilities:</label>
        <input
          type="text"
          value={totalLiabilities}
          onChange={(e) => setTotalLiabilities(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Current Assets:</label>
        <input
          type="text"
          value={currentAssets}
          onChange={(e) => setCurrentAssets(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Current Liabilities:</label>
        <input
          type="text"
          value={currentLiabilities}
          onChange={(e) => setCurrentLiabilities(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Short term debts:</label>
        <input
          type="text"
          value={shortTermDebts}
          onChange={(e) => setShortTermDebts(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Long term debts:</label>
        <input
          type="text"
          value={longTermDebts}
          onChange={(e) => setLongTermDebts(Number(e.target.value))}
        />
      </div>
      <div>
        <h3>Cashflow Statement</h3>
      </div>
      <div>
        <label>Cashflow from operating activities:</label>
        <input
          type="text"
          value={operatingCashflow}
          onChange={(e) => setOperatingCashflow(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Cashflow from investing activities:</label>
        <input
          type="text"
          value={investingCashflow}
          onChange={(e) => setInvestingCashflow(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Cashflow from financing activities:</label>
        <input
          type="text"
          value={financingCashflow}
          onChange={(e) => setFinancingCashflow(e.target.value)}
        />
      </div>
      <div>
        <label>Capital Expenditures:</label>
        <input
          type="text"
          value={capEx}
          onChange={(e) => setCapEx(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Total dividends in a year:</label>
        <input
          type="text"
          value={totalDivs}
          onChange={(e) => setTotalDivs(e.target.value)}
        />
      </div>
      <div>
        <button
          className="border p-2.5 bg-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit analysis
        </button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const stock = await getStock(params.stockId);

  return stock;
}

export default NewAnalysis;
