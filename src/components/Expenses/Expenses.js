import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../Card/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedFilterYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
    // console.log(selectedFilterYear);
  };
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilterYear}
        onFilterChange={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
