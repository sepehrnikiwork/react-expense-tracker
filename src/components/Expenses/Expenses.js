import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import React from "react";
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className={"expenses"}>
            {/*{props.items.map(expense =>*/}
            {/*    <ExpenseItem*/}
            {/*        key={expense.id}*/}
            {/*        title={expense.title}*/}
            {/*        amount={expense.amount}*/}
            {/*        date={expense.date}*/}
            {/*    />*/}
            {/*)}*/}
            <ExpenseItem
                key={props.items[0].id}
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                key={props.items[1].id}
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                key={props.items[2].id}
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </Card>
    )
}

export default Expenses