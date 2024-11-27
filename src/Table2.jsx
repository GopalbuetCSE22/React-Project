import React from "react";
import React, { useState, useEffect } from "react";
// import newData from "./csvjson.json";
import Papa from "papaparse";
import Data from "./data.csv";

export default function Table2() {
  function TableBody() {
    return newData.map((element1) => (
      <tr>
        <td align="center">{element1.Day}</td>
        <td align="center">{element1.Application}</td>
        <td align="center">{element1["Package Name"]}</td>
        <td align="center">{element1.Network}</td>
        <td align="center">{element1.Country}</td>
        <td align="center">{element1.Attempts}</td>
        <td align="center">{element1.Responses}</td>
        <td align="center">{element1["Fill Rate"]}</td>
        <td align="center">{element1.Impressions}</td>
        <td align="center">{element1.eCPM}</td>
      </tr>
    ));
  }
  return (
    <div>
      <table>
        <tr>
          <th>Day</th>
          <th>Application</th>
          <th>Package Name</th>
          <th>Network</th>
          <th>Country</th>
          <th>Attempts</th>
          <th>Responses</th>
          <th>Fill Rate</th>
          <th>Impressions</th>
          <th>eCPM</th>
        </tr>
        <tbody>
          {TableBody()} {/* Call the TableBody function to render the rows */}
        </tbody>
      </table>
    </div>
  );
}
