const BASE_URL = "http://localhost:8000";

export async function fetchStocks() {
  const res = await fetch(`${BASE_URL}/stocks`);

  if (!res.ok) throw Error("Failed getting stock list");

  const data = await res.json();
  return data;
}

export async function getStock(id) {
  const res = await fetch(`${BASE_URL}/stocks/${id}`);

  if (!res.ok) throw Error("Couldn't find stock");

  const data = await res.json();
  return data;
}

export async function addStock(newData) {
  // const newStocks = [...stocks, newData];

  const res = await fetch(`${BASE_URL}/stocks`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw Error("Failed adding new stock");

  return res;
}

export async function addFinancialData(newData, id, stock) {
  const newFinancialData = [...stock.financialData, newData];

  const updatedStock = {
    ...stock,
    financialData: newFinancialData,
  };

  const res = await fetch(`${BASE_URL}/stocks/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedStock),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw Error("Failed adding new financial data");

  return res;
}
