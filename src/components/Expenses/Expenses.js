import React, { useState } from "react";
import Card from "../Card/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart.js";

const Expenses = (props) => {
  const [selectedFilterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
    // console.log(selectedFilterYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === selectedFilterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilterYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
