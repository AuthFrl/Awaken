
"use client";
import { BarChart } from "keep-react";
const BarChartData = [
  {
    name: "2",
    positive: 340,
    negative: 140,
  },
  {
    name: "4",
    positive: 300,
    negative: 200,
  },
  {
    name: "6",
    positive: 170,
    negative: 120,
  },
  {
    name: "8",
    positive: 190,
    negative: 130,
  },
  {
    name: "10",
    positive: 450,
    negative: 120,
  },
  
];

export const BarComponent = () => {
  return (
    <BarChart
      height={250}
      width={500}
      barSize={30}
      barRadius={[4, 4, 0, 0]}
      dataKey="positive"
      secondaryDataKey="negative"
      chartData={BarChartData}
      showBg={true}
      showLegend={true}
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
    />
  );
}
