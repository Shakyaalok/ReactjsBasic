import "./ExpensesList.css";
import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
    
  if(props.items().length===0){
    return <h2 className="expense-list__fallback">Found No expenses</h2>
  }

  return (
    <ul className="expense-list">
      {props.items().map((item) => {
        return (
          <ExpenseItems
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
            location={item.location}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
