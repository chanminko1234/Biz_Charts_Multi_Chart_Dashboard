import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import {
  Chart,
  Line,
  Point,
  Axis,
  Tooltip,
  Coordinate,
  Legend,
} from "bizcharts";
import { DataItem } from "../data";

interface RadarChartProps {
  data: DataItem[];
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
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
      <h3>Radar Chart</h3>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <p>Loading data...</p>
        </div>
      ) : (
        <Chart height={300} data={data} autoFit>
          <Coordinate type="polar" />
          <Axis name="item" line={null} />
          <Axis name="user" grid={{ line: { type: "circle" } }} />
          <Tooltip shared />
          <Legend position="right" />
          <Line position="item*user" color="item" />
          <Point position="item*user" size={4} shape="circle" />
        </Chart>
      )}
    </div>
  );
};

export default RadarChart;
