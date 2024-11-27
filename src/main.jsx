import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import Table1 from "./Table1.jsx";
import Barchart from "./chart.jsx";
import Piechart from "./piechart.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Table1 />
    {/* <Barchart /> */}
    {/* <Piechart /> */}
  </StrictMode>
);
