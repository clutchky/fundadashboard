import { useState } from "react";
import { addStock } from "../services/apiStocks";
import { useLoaderData, useNavigate } from "react-router-dom";

function NewStock() {
  const stocks = useLoaderData();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [tickerSymbol, setTickerSymbol] = useState("");
  const [sector, setSector] = useState("");
  const [subSector, setSubSector] = useState("");
  const [pseLink, setPseLink] = useState("");

  const currentDate = new Date();

  async function handleSubmit(e) {
    e.preventDefault();

    const newStock = {
      companyName,
      tickerSymbol,
      sector,
      subSector,
      pseLink,
      date: currentDate.toLocaleDateString(),
      financialData: [],
    };

    const response = await addStock(newStock, stocks);

    if (response.ok) navigate(`/stocks`);
  }

  return (
    <div>
      <h1>Add new company</h1>
      <div>
        <label>Company name:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <label>Ticker Symbol:</label>
        <input
          type="text"
          value={tickerSymbol}
          onChange={(e) => setTickerSymbol(e.target.value)}
        />
      </div>
      <div>
        <label>Sector:</label>
        <input
          type="text"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        />
      </div>
      <div>
        <label>Subsector:</label>
        <input
          type="text"
          value={subSector}
          onChange={(e) => setSubSector(e.target.value)}
        />
      </div>
      <div>
        <label>PSE Link:</label>
        <input
          type="text"
          value={pseLink}
          onChange={(e) => setPseLink(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <span> {currentDate.toLocaleDateString()}</span>
      </div>
      <button
        className="border p-2.5 bg-primary"
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
    </div>
  );
}

export default NewStock;
