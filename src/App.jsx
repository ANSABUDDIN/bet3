

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chart from "./components/Chart/Chart";
import Filter from "./components/Filter/Filter";
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/filter" element={<Filter />} />
 
            

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
