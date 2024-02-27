import './ExpenseItems.css'
import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItems = (props) => {

  const [title,setTitle] = useState(props.title)
  const [price,setPrice] = useState(props.price)

  //adding event listener using react
  const clickHandler = ()=>{
    setTitle('Updated')
   console.log(title)      
  }

  const updatePriceHandler = ()=>{
    setPrice('$100')
  }

   
  return (
 
   <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
      <h2>{props.id}</h2>
      <h2>{props.location}</h2>
      <ExpenseDetails title={title} price={price}/>
      <button onClick={clickHandler}>Changed title</button>
      <button onClick={updatePriceHandler}>Update Price</button>
      </div>

    </Card>
  )
}

export default ExpenseItems
