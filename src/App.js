import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense.js";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 295.3, date: new Date(2022, 1, 22) },
    { title: "Party", amount: 150.5, date: new Date(2022, 7, 26) },
    { title: "Toilet Paper", amount: 100.3, date: new Date(2022, 0, 29) },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
