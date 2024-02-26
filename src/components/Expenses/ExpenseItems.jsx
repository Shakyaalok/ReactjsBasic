import './ExpenseItems.css'
import React from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItems = (props) => {

   
  return (
   
   <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
      <h2>{props.id}</h2>
      <h2>{props.location}</h2>
      <ExpenseDetails title={props.title} price={props.price}/>
      </div>

    </Card>
  )
}

export default ExpenseItems
