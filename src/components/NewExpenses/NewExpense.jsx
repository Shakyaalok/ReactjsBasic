import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpensForm'

const NewExepnse = () => {

  const saveExpenseDataHandler = (getdatafromchilder) =>{
        const expenseData = {
          ...getdatafromchilder,
          id:Math.random().toString()
        }

        console.log(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExepnse

// choose create a pointer in parent and call in it child like expenseForm and it can be recieve as props in children like props.pointer-name like props.onSaveExpenseData
