import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

     const [title,setTitle] = useState('');
     const [price,setPrice] = useState('');
     const [place,setPlace] = useState('');
     const [date,setDate] = useState('');

/*
    const [userInput,setUserInput] = useState({
        title:'',
        price:'',
        place:'',
        date:''
    })

    
    const titleHandler  = (e)=>{
        // setUserInput({
        //     ...userInput,
        //     title:e.target.value
        // })
        // if we have lot of state the we can get the older state or outdated state or incorrect state so 
        // using below method then react will gurantee that snapshot state will be the latest

        setUserInput((prevState)=>{
            return {...prevState,title:e.target.value}
        })
     }


     const placeHandler  = (e)=>{
        // setUserInput({
        //     ...userInput,
        //     place:e.target.value
        // })
     }

     const priceHandler  = (e)=>{
        // setUserInput({
        //     ...userInput,
        //     price:e.target.value
        // })
     }


     const dateHandler  = (e)=>{
        setUserInput({
            ...userInput,
            date:e.target.value
        })
     }
*/

  
    const titleHandler  = (e)=>{
       setTitle(e.target.value)
    }

    const placeHandler  = (e)=>{
       setPlace(e.target.value)
    }

    const priceHandler  = (e)=>{
       setPrice(e.target.value)
    }

    const dateHandler  = (e)=>{
       setDate(e.target.value)
    }

    const submitFormHandler = (e) =>{
        e.preventDefault();

        const expenseDetails = {
            title:title,
            price:price,
            place:place,
            data:new Date(date)
        }
      props.onSaveExpenseData(expenseDetails)
        setTitle('')  // this will only work when we give the value attribute to the input fileds as given below
        setPrice('')
        setPlace('')
        setDate('')
    }



  return ( 
    <form onSubmit={submitFormHandler}>
     <div className='new-expense__controls'>

        <div className='new-expense__control'>
        <label for="title">Title</label>
        <input type="text"  placeholder='Enter your tile like cosmetics' value={title} onChange={titleHandler}/>
        </div>

        <div className='new-expense__control'>
        <label for="price">Price</label>
        <input type="number"  placeholder='Enter your Price' min='0.01' step='0.01' value={price} onChange={priceHandler}/>
        </div>
        
        <div className='new-expense__control'>
        <label for="place">Place</label>
        <input type="text"  placeholder='Enter place of expense' value={place} onChange={placeHandler}/>
        </div>

        <div className='new-expense__control'>
        <label for="date">Date</label>
        <input type="date" min='2019-01-01' max='2024-12-31'  value={date} onChange={dateHandler} />
        </div>
     </div>
     
     <div className='new-expense__actions'>
     <button type='submit'>Add Expense</button>
     </div>
     </form>
  )
}

export default ExpenseForm;
