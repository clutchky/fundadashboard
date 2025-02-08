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
  console.log(data);
  return data;
}
