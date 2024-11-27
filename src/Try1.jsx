import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./Table.css";
// import Papa from "papaparse";
import Data from "./data.csv";
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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track data loading state
  const [error, setError] = useState(null); // Track any errors during data fetch

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await fetch("./data.csv"); // Adjust the path if needed
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csvData = decoder.decode(result.value);
        const parsedData = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        }).data;
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Set error state if an error occurs
      } finally {
        setIsLoading(false); // Set loading state to false after processing
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (column) => {
    setVisibleColumns((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };

  function TableBody() {
    return (
      <>
        {isLoading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p>Error fetching data: {error.message}</p>
        ) : data.length === 0 ? (
          <p>No data found.</p>
        ) : (
          data.map((element1, index) => (
            <tr key={index}>
              {visibleColumns.Day && <td align="center">{element1.Day}</td>}
              {/* ... rest of the column rendering logic */}
            </tr>
          ))
        )}
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Game All Data</h1>
        <div>
          {/* Render checkboxes dynamically based on the column names */}
          {Object.keys(visibleColumns).map((column) => (
            <span key={column} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={visibleColumns[column]}
                onChange={() => handleCheckboxChange(column)}
              />
              <label>{column}</label>
            </span>
          ))}
        </div>
        <div>
          <table>
            <thead>
              <tr>
                {visibleColumns.Day && <th>Day</th>}
                {/* ... rest of the header rendering logic */}
              </tr>
            </thead>
            <tbody>
              {TableBody()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table1;