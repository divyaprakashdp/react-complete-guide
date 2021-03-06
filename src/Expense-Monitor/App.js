import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense.js";

const dummyExpenses = [
  { title: "Car Insurance", amount: 295.3, date: new Date(2022, 1, 22) },
  { title: "Party", amount: 150.5, date: new Date(2020, 7, 26) },
  { title: "Toilet Paper", amount: 100.3, date: new Date(2021, 0, 29) },
  { title: "Book", amount: 170.3, date: new Date(2022, 2, 9) },
  { title: "Guitar", amount: 400.3, date: new Date(2022, 2, 19) },
  { title: "TV", amount: 200.3, date: new Date(2021, 4, 19) },
];


function App() {
      const [expenses, setNewExpense] = useState(dummyExpenses);
      const addExpenseHandler = (expense) =>{
        setNewExpense((prevExpenses) =>{
          return [expense, ...prevExpenses]
        });
        // console.log(expenses)
      }
  return (
    
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
