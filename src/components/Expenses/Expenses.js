import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import "./Expenses.css"

function Expenses(props){
    const expenses = props.expenses;

    // eslint-disable-next-line
    const [selectedYear,setSelectedYear] = useState("2020");    

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

    function onYearSelectedHandler(yearSelected){
        setSelectedYear(yearSelected);
    }

    return(
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onYearSelected={onYearSelectedHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>
        </Card>
        
    )
}

export default Expenses;