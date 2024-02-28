
import ExpenseItems from '../src/components/Expenses/ExpenseItems';
import './App.css';
import Card from '../src/components/UI/Card';
import ExpenseForm from './components/NewExpenses/NewExpense';
import NewExpens from './components/NewExpenses/NewExpense';



const App=()=> {

  const expenses = [
    {id:1, title:'Food',price:10,date:new Date(2024,1,26),location:'GZB'},
    {id:2, title:'Petrol',price:100,date:new Date(2024,1,22),location:'Chandigarh'},
    {id:3, title:'Dryer',price:400,date:new Date(2024,1,12),location:'Delhi'},
    {id:4, title:'Cosmetics',price:110,date:new Date(2024,2,5),location:'Agra'}
  ]



  return (
    <>
    <NewExpens/>
    <Card className="expenses">
        {
          expenses.map((item)=>{
            return(<ExpenseItems id={item.id} title={item.title} price={item.price} date={item.date} location={item.location}/>)
          })
        }
        
    </Card>
   
    </>
    
  );
}

export default App;
