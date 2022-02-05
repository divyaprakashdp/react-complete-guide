import React, { useState } from 'react';
import ExpenseItems from "./ExpenseItems";
import Card from '../Card/Card.js';
import  "./Expenses.css"
import ExpensesFilter from "./ExpenseFilter";


const Expenses=(props) =>{
  const [selectedFilterYear, setFilterYear] = useState('2022')
  const filterChangeHandler = (filterYear)=>{
    setFilterYear(filterYear);
    console.log(selectedFilterYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedFilterYear} onFilterChange={filterChangeHandler}/>
      <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItems>
    </Card>
  );
}

export default Expenses;
