import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Chart, Point, Tooltip, Axis } from "bizcharts";
import { DataItem } from "../data";

interface BubbleChartProps {
  data: DataItem[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
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
      <h3>Bubble Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Axis name="month" title />
          <Axis name="value" title />
          <Tooltip shared />
          <Point
            position="month*value"
            size="value"
            shape="circle"
            color="month"
          />
        </Chart>
      )}
    </div>
  );
};

export default BubbleChart;
