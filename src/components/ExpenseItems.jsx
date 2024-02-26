import './ExpenseItems.css'
import React from 'react'

const ExpenseItems = () => {

    const expenseDate = new Date(2024,1,26);
    const expenseTitle = 'Food';
    const expenseAmount = 10;

  return (

   <div className='expense-item'>
         <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
      <h2>{expenseTitle}</h2>
      <div className='expense-item__price'>{expenseAmount}</div>
      </div>

    </div>
  )
}

export default ExpenseItems
