import React, { useState } from "react";
import Card from "../Card/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedFilterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
    // console.log(selectedFilterYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilterYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
