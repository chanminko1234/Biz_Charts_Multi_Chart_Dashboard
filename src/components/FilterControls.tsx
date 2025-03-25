import React from "react";
interface FilterProps {
  selectedYear: number;
  selectedType: string;
  years: number[];
  types: string[];
  onYearChange: (year: number) => void;
  onTypeChange: (type: string) => void;
}

const FilterControls: React.FC<FilterProps> = ({
  selectedYear,
  selectedType,
  years,
  types,
  onYearChange,
  onTypeChange,
}) => {
  return (
    <div className="filters">
      <label>
        Year:
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <label>
        Type:
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterControls;
