import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const App = () => {
    const expenses = [
        {id: 1, title: 'Car Insurance', amount: 94.12, date: new Date(2022, 5, 9)},
        {id: 2, title: 'Car Breaks', amount: 8.65, date: new Date(2022, 5, 6)},
        {id: 3, title: 'Car Gas', amount: 99.2, date: new Date(2022, 7, 9)},
    ]
    return (
        <div className={"App-header"}>
            <NewExpense/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
