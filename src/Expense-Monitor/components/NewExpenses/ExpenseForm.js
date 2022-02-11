import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //alternate
  // const [enteredInput, setEnteredInput] = useState({
  //   title:'',
  //   date:'',
  //   amount:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //alternate#1
    // setEnteredInput({
    //   ...enteredInput,
    //   title: event.target.value
    // })

    //alternate#2
    // setEnteredInput((prevState) => {
    //     return {...prevState, title:event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   date: event.target.value
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   amount: event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: enteredDate,
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter the expense title..."
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter the amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
