import React from "react";
import data from "./csvjson.json";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
export default function piechart() {
  let dataArray = [];
  dataArray = data.map((item) => {
    return item.Country;
  });
  let dataArray1 = [];
  dataArray1 = data.map((item) => {
    return item.Responses;
  });
  return (
    <div>
      <Doughnut
        data={{
          labels: dataArray,
          datasets: [
            {
              label: "Response Count",
              data: dataArray1,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Revenue Sources",
            },
          },
        }}
      />
    </div>
  );
}
