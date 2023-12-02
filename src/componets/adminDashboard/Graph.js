import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const dummyData = [
    { x: new Date(2021, 0), y: 1200 },
    { x: new Date(2021, 1), y: 1500 },
    { x: new Date(2021, 2), y: 1800 },
    { x: new Date(2021, 3), y: 1000 },
    { x: new Date(2021, 4), y: 1300 },
    { x: new Date(2021, 5), y: 1100 },
    { x: new Date(2021, 6), y: 1400 },
    { x: new Date(2021, 7), y: 1700 },
    { x: new Date(2021, 8), y: 1600 },
    { x: new Date(2021, 9), y: 1900 },
    { x: new Date(2021, 10), y: 2000 },
    { x: new Date(2021, 11), y: 2200 },
    { x: new Date(2022, 0), y: 2400 },
    { x: new Date(2022, 1), y: 1000 },
    ];
    const totalDonation = dummyData.reduce(
      (total, dataPoint) => total + dataPoint.y,
      0
    );

  const options = {
    theme: "light1",
    animationEnabled: true,
      zoomEnabled: true,
    backgroundColor: 'transparent',
    title: {
      text: `Monthly Donations - Total: ₹${totalDonation}`,
      fontColor: "rgba(115,05,105,.8)",
    },
    axisX: {
      valueFormatString: "MMM YYYY",
      gridThickness: 0,
    },
    axisY: {
      title: "Donation Amount (in Ruppees)",
      prefix: "₹",
      gridThickness: 0,
    },
    data: [
      {
        type: "area",
        dataPoints: dummyData,
      },
    ],
    };
      const chartContainerStyle = {
        width: "60vw",
        height: "40vh",
      };

  return (
    <div style={chartContainerStyle}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default App;
