import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    function onSaveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSave={onSaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;