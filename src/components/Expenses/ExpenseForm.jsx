import React,{useState} from 'react'

const ExpenseForm = () => {

     const [title,setTitle] = useState('');
     const [price,setPrice] = useState('');
     const [place,setPlace] = useState('');
     const [date,setDate] = useState('');

    const submitFormHandler = () =>{
        console.log(title,price,place,date);
     
    }

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


  return ( 
    <div>
     <div>
        <label for="title">Title</label>
        <input type="text"  placeholder='Enter your tile like cosmetics' onChange={titleHandler}/>
     </div>
     <div>
        <label for="price">Price</label>
        <input type="number"  placeholder='Enter your Price' onChange={priceHandler}/>
     </div>
     <div>
        <label for="place">Place</label>
        <input type="text"  placeholder='Enter place of expense' onChange={placeHandler}/>
     </div>
     <div>
        <label for="date">Date</label>
        <input type="date"  onChange={dateHandler} />
     </div>
     <button onClick={submitFormHandler}>Submit</button>
     </div>
  )
}

export default ExpenseForm;
