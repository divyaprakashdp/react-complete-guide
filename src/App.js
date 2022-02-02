import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 295.3, date: new Date(2022, 1, 22) },
    { title: "Party", amount: 150.5, date: new Date(2022, 7, 26) },
    { title: "Toilet Paper", amount: 100.3, date: new Date(2022, 0, 29) },
  ];
  return (
    <div>
      <h2>Let's get started! YES ha</h2>
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItems>
    </div>
  );
}

export default App;
