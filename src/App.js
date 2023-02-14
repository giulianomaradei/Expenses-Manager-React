
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const [expensesArray,setExpensesArray] = useState([]);

  function addExpenseHandler(expense){
    setExpensesArray(prevExpenses => {
      return prevExpenses.concat([expense]);
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expensesArray}/>
    </div>
  );
}

export default App;
