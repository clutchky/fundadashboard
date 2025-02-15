import { useState } from "react";
import { Link } from "react-router-dom";

function NewAnalysis() {
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

  function handleSubmit(e) {
    e.preventDefault();
    const newStockAnalysis = {
      year,
      price,
      salesRevenue,
      costOfRevenue,
      operatingExpenses,
      interestExpenses,
      incomeTaxes,
      earningsPerShare,
      otherIncome,
      totalAssets,
      totalLiabilities,
      currentAssets,
      currentLiabilities,
      shortTermDebts,
      longTermDebts,
      operatingCashflow,
      investingCashflow,
      financingCashflow,
      capEx,
      totalDivs,
    };
    console.log(newStockAnalysis);

    return newStockAnalysis;
  }

  return (
    <div>
      <Link to={-1}>Back</Link>
      <h1>Add new analysis</h1>
      <div>
        <h3>Income Statement</h3>
      </div>
      <div>
        <label>Year: </label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
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
          onChange={(e) => setSalesRevenue(e.target.value)}
        />
      </div>
      <div>
        <label>Cost of Revenue: </label>
        <input
          type="text"
          value={costOfRevenue}
          onChange={(e) => setCostOfRevenue(e.target.value)}
        />
      </div>
      <div>
        <label>Operating Expenses: </label>
        <input
          type="text"
          value={operatingExpenses}
          onChange={(e) => setOperatingExpenses(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Expense: </label>
        <input
          type="text"
          value={interestExpenses}
          onChange={(e) => setInterestExpenses(e.target.value)}
        />
      </div>
      <div>
        <label>Income Taxes: </label>
        <input
          type="text"
          value={incomeTaxes}
          onChange={(e) => setIncomeTaxes(e.target.value)}
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
          onChange={(e) => setOtherIncome(e.target.value)}
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
          onChange={(e) => setTotalAssets(e.target.value)}
        />
      </div>
      <div>
        <label>Total Liabilities:</label>
        <input
          type="text"
          value={totalLiabilities}
          onChange={(e) => setTotalLiabilities(e.target.value)}
        />
      </div>
      <div>
        <label>Current Assets:</label>
        <input
          type="text"
          value={currentAssets}
          onChange={(e) => setCurrentAssets(e.target.value)}
        />
      </div>
      <div>
        <label>Current Liabilities:</label>
        <input
          type="text"
          value={currentLiabilities}
          onChange={(e) => setCurrentLiabilities(e.target.value)}
        />
      </div>
      <div>
        <label>Short term debts:</label>
        <input
          type="text"
          value={shortTermDebts}
          onChange={(e) => setShortTermDebts(e.target.value)}
        />
      </div>
      <div>
        <label>Long term debts:</label>
        <input
          type="text"
          value={longTermDebts}
          onChange={(e) => setLongTermDebts(e.target.value)}
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
          onChange={(e) => setOperatingCashflow(e.target.value)}
        />
      </div>
      <div>
        <label>Cashflow from investing activities:</label>
        <input
          type="text"
          value={investingCashflow}
          onChange={(e) => setInvestingCashflow(e.target.value)}
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
          onChange={(e) => setCapEx(e.target.value)}
        />
      </div>
      <div>
        <label>Total dividends in a year:</label>
        <input
          type="text"
          value={capEx}
          onChange={(e) => setCapEx(e.target.value)}
        />
      </div>
      <div>
        <button onClick={(e) => handleSubmit(e)}>Add analysis</button>
      </div>
    </div>
  );
}

export default NewAnalysis;
