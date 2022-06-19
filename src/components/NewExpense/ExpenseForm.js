import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    return (
        <form>
            <div className={"new-expense__controls"}>
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" oncancel={amountChangeHandler} value={enteredAmount} min={"0.01"} step={0.1}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" onChange={dateChangeHandler} value={enteredDate} min={"2019-01-01"}
                           max={"2022-12-31"}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;