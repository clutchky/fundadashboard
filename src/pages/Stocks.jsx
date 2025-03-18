import Navigation from "../components/Navigation";
import StockList from "../components/StockList";
import Spinner from "../components/Loader";
import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchStocks } from "../services/apiStocks";

function Stocks({ isLoading }) {
  const stocks = useLoaderData();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Navigation />
      <h1>Stocks</h1>
      <button
        className="my-4 px-4 rounded-sm bg-primary py-1"
        onClick={() => navigate(`/stocks/new`)}
      >
        Add company
      </button>
      <StockList stocks={stocks} isLoading={isLoading} />
    </div>
  );
}

export async function loader() {
  const stocks = await fetchStocks();
  return stocks;
}

export default Stocks;
