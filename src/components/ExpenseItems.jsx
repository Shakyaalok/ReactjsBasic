import './ExpenseItems.css'
import React from 'react'

const ExpenseItems = (props) => {

   
  return (

   <div className='expense-item'>
         <div>{props.data.toISOString()}</div>
      <div className='expense-item__description'>
      <h2>{props.id}</h2>
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className='expense-item__price'>{props.price}</div>
      </div>

    </div>
  )
}

export default ExpenseItems
