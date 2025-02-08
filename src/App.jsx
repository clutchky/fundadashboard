import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Stocks, { loader as stocksLoader } from "./pages/Stocks";
import Portfolio from "./pages/Portfolio";
import Watchlist from "./pages/Watchlist";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import Error from "./ui/Error";
import StockItem from "./components/StockItem";
import Stock, { loader as stockLoader } from "./components/Stock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/stocks",
    element: <Stocks />,
    loader: stocksLoader,
    errorElement: <Error />,
  },
  {
    path: "/stocks/:stockId",
    element: <Stock />,
    loader: stockLoader,
    errorElement: <Error />,
  },
]);

function App() {
  // const [stocks, setStocks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(function () {
  //   async function fetchStocks() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(`${BASE_URL}/stocks`);
  //       const data = await res.json();

  //       setStocks(data);
  //     } catch {
  //       alert("There was an error loading the data...");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchStocks();
  // }, []);

  return (
    // <>
    //   <GlobalStyles />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route
    //         path="stocks"
    //         element={<Stocks stocks={stocks} isLoading={isLoading} />}
    //       />
    //       <Route path="portfolio" element={<Portfolio />} />
    //       <Route path="watchlist" element={<Watchlist />} />
    //       <Route path="*" element={<PageNotFound />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
