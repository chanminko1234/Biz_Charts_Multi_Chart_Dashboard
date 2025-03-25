export interface DataItem {
  year: number;
  month: string;
  type: string;
  value: number;
}

export const allData: DataItem[] = [
  { year: 2023, month: "Jan", type: "A", value: 40 },
  { year: 2023, month: "Feb", type: "A", value: 35 },
  { year: 2023, month: "Mar", type: "A", value: 30 },
  { year: 2024, month: "Jan", type: "A", value: 50 },
  { year: 2024, month: "Feb", type: "A", value: 45 },
  { year: 2024, month: "Mar", type: "A", value: 40 },
];

export const years = Array.from(new Set(allData.map((d) => d.year))).sort();
export const types = Array.from(new Set(allData.map((d) => d.type)));

export const filterData = (year: number, type: string): DataItem[] =>
  allData.filter((d) => d.year === year && d.type === type);
