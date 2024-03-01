import React,{useState}from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpensForm'

const NewExepnse = (props) => {

  const saveExpenseDataHandler = (getdatafromchilder) =>{
        const expenseData = {
          ...getdatafromchilder,
          id:Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setIsAddingExpense(false);
  }

  const [isAddingExpense,setIsAddingExpense] = useState(false);
  const addMoreExpenseHandler = ()=>{
    setIsAddingExpense(true)
  }


  const cancelAddExpenseHandler = () => {
    setIsAddingExpense(false); 
  };


  return (
    <div className='new-expense'>
      {isAddingExpense===false?
      <button onClick={addMoreExpenseHandler}>Add More Expenses</button>:
      ( <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancelAddExpense={cancelAddExpenseHandler}/>)
      }
    </div>
  )
}

export default NewExepnse

// choose create a pointer in parent and call in it child like expenseForm and it can be recieve as props in children like props.pointer-name like props.onSaveExpenseData
