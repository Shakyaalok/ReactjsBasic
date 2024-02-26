import './ExpenseItems.css'
import React from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItems = (props) => {

   
  return (
   
   <div className='expense-item'>
         <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
      <h2>{props.id}</h2>
      <h2>{props.location}</h2>
      <ExpenseDetails title={props.title} price={props.price}/>
      </div>

    </div>
  )
}

export default ExpenseItems
