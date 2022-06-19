import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExspenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('updated!');
        console.log(setTitle);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExspenseItem;