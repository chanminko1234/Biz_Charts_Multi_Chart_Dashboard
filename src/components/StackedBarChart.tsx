import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Chart, Interval, Tooltip, Axis, Coordinate, Legend } from "bizcharts";
import { DataItem } from "../data";

interface StackedBarChartProps {
  data: DataItem[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setLoading(false);
    }, 1000); // Simulating API delay
  }, [data]);

  return (
    <div className="chart-container">
      <h3>Stacked Bar Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Axis name="category" />
          <Axis name="value" />
          <Tooltip shared />
          <Legend position="top" />
          <Interval position="category*value" color="type" adjust="stack" />
        </Chart>
      )}
    </div>
  );
};

export default StackedBarChart;
