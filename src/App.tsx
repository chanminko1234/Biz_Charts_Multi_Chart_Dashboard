import React, { useState, useEffect } from "react";
import { filterData, years, types } from "./data";
import FilterControls from "./components/FilterControls";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import AreaChart from "./components/AreaChart";
import ScatterPlot from "./components/ScatterPlot";
import RadarChart from "./components/RadarChart";
import BubbleChart from "./components/BubbleChart";
import DonutChart from "./components/DonutChart";
import StackedBarChart from "./components/StackedBarChart";
import "./styles.css";

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const [selectedType, setSelectedType] = useState<string>(types[0]);
  const [filteredData, setFilteredData] = useState(filterData(2023, types[0]));

  useEffect(() => {
    setFilteredData(filterData(selectedYear, selectedType));
  }, [selectedYear, selectedType]);

  return (
    <div className="dashboard">
      <h2>📊 Multi-Chart Dashboard</h2>
      <FilterControls
        selectedYear={selectedYear}
        selectedType={selectedType}
        years={years}
        types={types}
        onYearChange={setSelectedYear}
        onTypeChange={setSelectedType}
      />
      <div className="chart-grid">
        <BarChart data={filteredData} />
        <LineChart data={filteredData} />
        <PieChart data={filteredData} />
        <AreaChart data={filteredData} />
        <ScatterPlot data={filteredData} />
        <RadarChart data={filteredData} />
        <BubbleChart data={filteredData} />
        <DonutChart data={filteredData} />
        <StackedBarChart data={filteredData} />
      </div>
    </div>
  );
};

export default App;
