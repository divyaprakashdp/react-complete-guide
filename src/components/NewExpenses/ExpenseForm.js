import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

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
    }

    const dateChangeHandler = (event) =>{
      setEnteredDate(event.target.value);
      // setEnteredInput({
      //   ...enteredInput,
      //   date: event.target.value
      // })
    }

    const amountChangeHandler = (event) =>{
      setEnteredAmount(event.target.value);
      // setEnteredInput({
      //   ...enteredInput,
      //   amount: event.target.value
      // })
    }
    
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={dateChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={amountChangeHandler}/>
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
