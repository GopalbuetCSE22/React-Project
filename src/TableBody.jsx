import React from "react";

function TableBody({ data, visibleColumns }) {
  return (
    <>
      {data.map((element1, index) => (
        <tr key={index}>
          {visibleColumns.Day && <td align="center">{element1.Day}</td>}
          {visibleColumns.Application && (
            <td align="center">{element1.Application}</td>
          )}
          {visibleColumns["Package Name"] && (
            <td align="center">{element1["Package Name"]}</td>
          )}
          {visibleColumns.Network && <td align="center">{element1.Network}</td>}
          {visibleColumns.Country && <td align="center">{element1.Country}</td>}
          {visibleColumns.Attempts && (
            <td align="center">{element1.Attempts}</td>
          )}
          {visibleColumns.Responses && (
            <td align="center">{element1.Responses}</td>
          )}
          {visibleColumns["Fill Rate"] && (
            <td align="center">{element1["Fill Rate"]}</td>
          )}
          {visibleColumns.Impressions && (
            <td align="center">{element1.Impressions}</td>
          )}
          {visibleColumns.eCPM && <td align="center">{element1.eCPM}</td>}
        </tr>
      ))}
    </>
  );
}

export default TableBody;
