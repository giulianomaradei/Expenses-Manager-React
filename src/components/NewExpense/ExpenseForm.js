import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [visibility,setVisibility] = useState(-1);

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");
    props.onSave(expenseData);
    
    visibilityHandler(event);
  
  }

  function visibilityHandler(event){
    setVisibility(prevVisibility => {
      return prevVisibility *-1;
    });
    
    if(event.target.name==="cancel-button"){
      resetStates();
    }
  }

  function resetStates(){
    setTitle("");
    setAmount("");
    setDate("");
  }

  var controlsContent = <button className="new-expense__control input" onClick={visibilityHandler}>Add New Expense</button>;

  if(visibility === 1){
    controlsContent = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
          <button name="cancel-button" onClick={visibilityHandler}>Cancel</button>
          <button name="submit-button" type="submit">Add Expense</button>
      </div>
    </form>
    )
  }

  return (
    <div>
        {controlsContent}
    </div>
  );
}

export default ExpenseForm;
