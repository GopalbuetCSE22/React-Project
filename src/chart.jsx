import React from "react";
import Chart from "react-apexcharts";
import data from "./csvjson.json";

function Barchart() {
  let dataArray = [];
  dataArray = data.map((item) => {
    return item.Country;
  });
  let dataArray1 = [];
  dataArray1 = data.map((item) => {
    return item.Attempts;
  });

  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h1 className="text-center mt-3 mb-3">Chart Of CountryWise Game Attempted</h1>

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Number Of Attemted Games",
              data: dataArray1,
            },
          ]}
          options={{
            title: {
              text: "CountryWise Attempted Game",
              style: { fontSize: 30 },
            },

            // subtitle: {
            //   text: "This is BarChart Graph",
            //   style: { fontSize: 18 },
            // },

            // colors: ["#f90000"],
            // theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: dataArray,
              title: {
                text: "Number of Game Attemted",
                style: { color: "#eb9834", fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#aa432c"] },
              },
              title: {
                text: "Number of Game Attemted",
                style: { color: "#eb9834", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Barchart;
