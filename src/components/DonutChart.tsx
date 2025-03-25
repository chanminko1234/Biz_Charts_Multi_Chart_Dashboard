import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Chart, Interval, Tooltip, Axis, Coordinate, Legend } from "bizcharts";
import { DataItem } from "../data";

interface DonutChartProps {
  data: DataItem[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
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
      <h3>Donut Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Coordinate type="theta" innerRadius={0.6} />
          <Tooltip showTitle={false} />
          <Legend position="right" />
          <Interval
            position="value"
            adjust="stack"
            color="type"
            style={{ lineWidth: 1, stroke: "#fff" }}
            label={["type", { offset: -30 }]}
          />
        </Chart>
      )}
    </div>
  );
};

export default DonutChart;
