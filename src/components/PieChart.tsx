import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Chart, Interval, Tooltip, Coordinate } from "bizcharts";
import { DataItem } from "../data";

interface ChartProps {
  data: DataItem[];
}

const PieChart: React.FC<ChartProps> = ({ data }) => {
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
      <h3>Pie Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Coordinate type="theta" />
          <Tooltip showTitle={false} />
          <Interval position="value" adjust="stack" color="type" />
        </Chart>
      )}
    </div>
  );
};

export default PieChart;
