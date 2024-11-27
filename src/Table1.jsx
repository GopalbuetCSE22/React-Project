// import React, { useState, useEffect } from "react";
// import newData from "./csvjson.json";
// // import Papa from "papaparse";
// import "./Table.css";
// // import Data from "./data.csv";
// function Table1() {
//   //   const [data, setData] = useState([]);
//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       const response = await fetch(Data);
//   //       const reader = response.body.getReader();
//   //       const result = await reader.read();
//   //       const decoder = new TextDecoder("utf-8");
//   //       const csvData = decoder.decode(result.value);
//   //       const parsedData = Papa.parse(csvData, {
//   //         header: true,
//   //         skipEmptyLines: true,
//   //       }).data;
//   //       console.log(parsedData);
//   //       setData(parsedData);
//   //     };
//   //     fetchData();
//   //   }, []);

//   const [visibleColumns, setVisibleColumns] = useState({
//     Day: true,
//     Application: true,
//     "Package Name": true,
//     Network: true,
//     Country: true,
//     Attempts: true,
//     Responses: true,
//     "Fill Rate": true,
//     Impressions: true,
//     eCPM: true,
//   });

//   //   function TableBody() {
//   //     return (
//   //       <>
//   //         {data.map((element1, index) => (
//   //           <tr key={index}>
//   //             {visibleColumns.Day && <td align="center">{element1.Day}</td>}
//   //             {visibleColumns.Application && (
//   //               <td align="center">{element1.Application}</td>
//   //             )}
//   //             {visibleColumns["Package Name"] && (
//   //               <td align="center">{element1["Package Name"]}</td>
//   //             )}
//   //             {visibleColumns.Network && (
//   //               <td align="center">{element1.Network}</td>
//   //             )}
//   //             {visibleColumns.Country && (
//   //               <td align="center">{element1.Country}</td>
//   //             )}
//   //             {visibleColumns.Attempts && (
//   //               <td align="center">{element1.Attempts}</td>
//   //             )}
//   //             {visibleColumns.Responses && (
//   //               <td align="center">{element1.Responses}</td>
//   //             )}
//   //             {visibleColumns["Fill Rate"] && (
//   //               <td align="center">{element1["Fill Rate"]}</td>
//   //             )}
//   //             {visibleColumns.Impressions && (
//   //               <td align="center">{element1.Impressions}</td>
//   //             )}
//   //             {visibleColumns.eCPM && <td align="center">{element1.eCPM}</td>}
//   //           </tr>
//   //         ))}
//   //       </>
//   //     );
//   //   }
//   function TableBody() {
//     return newData.map((element1) => (
//       <tr>
//         {visibleColumns.Day && <td align="center">{element1.Day}</td>}
//         {visibleColumns.Application && (
//           <td align="center">{element1.Application}</td>
//         )}
//         {visibleColumns["Package Name"] && (
//           <td align="center">{element1["Package Name"]}</td>
//         )}
//         {visibleColumns.Network && <td align="center">{element1.Network}</td>}
//         {visibleColumns.Country && <td align="center">{element1.Country}</td>}
//         {visibleColumns.Attempts && <td align="center">{element1.Attempts}</td>}
//         {visibleColumns.Responses && (
//           <td align="center">{element1.Responses}</td>
//         )}
//         {visibleColumns["Fill Rate"] && (
//           <td align="center">{element1["Fill Rate"]}</td>
//         )}
//         {visibleColumns.Impressions && (
//           <td align="center">{element1.Impressions}</td>
//         )}
//         {visibleColumns.eCPM && <td align="center">{element1.eCPM}</td>}
//       </tr>
//     ));
//   }

//   // Handle checkbox changes
//   const handleCheckboxChange = (column) => {
//     setVisibleColumns((prevState) => ({
//       ...prevState,
//       [column]: !prevState[column],
//     }));
//   };

//   return (
//     <>
//       <div>
//         <h1>Game All Data</h1>
//         <div>
//           {/* Render checkboxes dynamically based on the column names */}
//           {Object.keys(visibleColumns).map((column) => (
//             <span key={column} style={{ marginRight: "10px" }}>
//               <input
//                 type="checkbox"
//                 checked={visibleColumns[column]}
//                 onChange={() => handleCheckboxChange(column)}
//               />
//               <label>{column}</label>
//             </span>
//           ))}
//         </div>
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 {visibleColumns.Day && <th>Day</th>}
//                 {visibleColumns.Application && <th>Application</th>}
//                 {visibleColumns["Package Name"] && <th>Package Name</th>}
//                 {visibleColumns.Network && <th>Network</th>}
//                 {visibleColumns.Country && <th>Country</th>}
//                 {visibleColumns.Attempts && <th>Attempts</th>}
//                 {visibleColumns.Responses && <th>Responses</th>}
//                 {visibleColumns["Fill Rate"] && <th>Fill Rate</th>}
//                 {visibleColumns.Impressions && <th>Impressions</th>}
//                 {visibleColumns.eCPM && <th>eCPM</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {TableBody()}{" "}
//               {/* Call the TableBody function to render the rows */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Table1;
import React, { useState } from "react";
import newData from "./csvjson.json";
import "./Table.css";
import TableBody from "./TableBody"; // Import the separate TableBody component
import Chart from "./chart";
import PieChart from "./piechart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Table1() {
  const [visibleColumns, setVisibleColumns] = useState({
    Day: true,
    Application: true,
    "Package Name": true,
    Network: true,
    Country: true,
    Attempts: true,
    Responses: true,
    "Fill Rate": true,
    Impressions: true,
    eCPM: true,
  });

  const handleCheckboxChange = (column) => {
    setVisibleColumns((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };
  // const handleCheckboxChange = (column) => {
  //   setVisibleColumns((prevState) => ({
  //     ...prevState,
  //     [column]: !prevState[column], // Toggle the visibility of the column
  //   }));
  // };

  return (
    <>
      <div>
        <div>
          <h1>Game All Data</h1>
          {/* <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
              Column Visibility
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(visibleColumns).map((column) => (
                <Dropdown.Item key={column}>
                  <input
                    type="checkbox"
                    checked={visibleColumns[column]}
                    onChange={() => handleCheckboxChange(column)} // Handle checkbox change here
                    style={{ marginRight: "10px" }}
                  />
                  <label>{column}</label>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
        <div>
          {Object.keys(visibleColumns).map((column) => (
            <span key={column} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={visibleColumns[column]}
                onChange={() => handleCheckboxChange(column)}
              />
              <label class="lebel">{column}</label>
            </span>
          ))}
        </div>
        <div>
          <table>
            <thead>
              <tr>
                {visibleColumns.Day && <th>Day</th>}
                {visibleColumns.Application && <th>Application</th>}
                {visibleColumns["Package Name"] && <th>Package Name</th>}
                {visibleColumns.Network && <th>Network</th>}
                {visibleColumns.Country && <th>Country</th>}
                {visibleColumns.Attempts && <th>Attempts</th>}
                {visibleColumns.Responses && <th>Responses</th>}
                {visibleColumns["Fill Rate"] && <th>Fill Rate</th>}
                {visibleColumns.Impressions && <th>Impressions</th>}
                {visibleColumns.eCPM && <th>eCPM</th>}
              </tr>
            </thead>
            <tbody>
              <TableBody data={newData} visibleColumns={visibleColumns} />
              {/* Pass newData and visibleColumns as props */}
            </tbody>
          </table>
        </div>
        <div class="chart">
          <Chart />
        </div>
        <div class="pie">
          <h2>Piechart To Represent The CountryWise Responces</h2>
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default Table1;
