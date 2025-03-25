import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Chart, Interval, Tooltip, Axis, Coordinate } from "bizcharts";
import { DataItem } from "../data";

interface BarChartProps {
  data: DataItem[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
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
      <h3>📊 Bar Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Coordinate transpose />
          <Axis name="month" title />
          <Axis name="value" title />
          <Tooltip shared />
          <Interval position="month*value" color="month" />
        </Chart>
      )}
    </div>
  );
};

export default BarChart;
