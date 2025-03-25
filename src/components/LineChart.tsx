import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Chart, Line, Point, Tooltip, Axis } from "bizcharts";
import { DataItem } from "../data";

interface ChartProps {
  data: DataItem[];
}

const LineChart: React.FC<ChartProps> = ({ data }) => {
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
      <h3>Line Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Axis name="month" />
          <Axis name="value" />
          <Tooltip shared />
          <Line position="month*value" color="type" />
          <Point position="month*value" />
        </Chart>
      )}
    </div>
  );
};

export default LineChart;
