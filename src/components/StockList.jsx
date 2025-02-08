import styled from "styled-components";
import Loader from "./Loader";
import StockItem from "./StockItem";
import Message from "./Message";

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

function StockList({ stocks, isLoading }) {
  if (isLoading) return <Loader />;

  if (!stocks.length) {
    return <Message message="Add a stock to analyze" />;
  }

  return (
    <List>
      {stocks.map((stock) => (
        <StockItem stock={stock} key={stock.id} />
      ))}
    </List>
  );
}

export default StockList;
