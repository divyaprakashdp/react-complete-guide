import "./Chart.css";
import ChartBar from "./chartBar";

const Chart = (props) => {
    const dataPointValueArray = props.dataPoint.map(dataPoint => dataPoint.value);
    const maxExpense = Math.max(...dataPointValueArray);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart