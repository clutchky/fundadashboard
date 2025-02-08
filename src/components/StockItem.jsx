import { Link } from "react-router-dom";

function StockItem({ stock }) {
  return (
    <div>
      <Link to={`/stocks/${stock.id}`}>
        {stock.companyName} - ${stock.tickerSymbol}
      </Link>
    </div>
  );
}

export default StockItem;
