import Navigation from "../components/Navigation";
import StockList from "../components/StockList";
import Spinner from "../components/Loader";
import { useLoaderData } from "react-router-dom";
import { fetchStocks } from "../services/apiStocks";

function Stocks({ isLoading }) {
  const stocks = useLoaderData();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Navigation />
      <h1>Stocks</h1>
      <StockList stocks={stocks} isLoading={isLoading} />
    </div>
  );
}

export async function loader() {
  const stocks = await fetchStocks();
  return stocks;
}

export default Stocks;
