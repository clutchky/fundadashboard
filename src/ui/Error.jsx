import { useRouteError } from "react-router-dom";
import Message from "../components/Message";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong...</h1>
      <Message message={error.data} />
    </div>
  );
}

export default Error;
