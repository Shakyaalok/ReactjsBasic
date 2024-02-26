import logo from './logo.svg';
import ExpenseItems from './components/ExpenseItems';
import './App.css';



function App() {

  const expenses = [
    {id:1, title:'Food',price:10,date:new Date(2024,1,26),location:'GZB'},
    {id:2, title:'Petrol',price:100,date:new Date(2024,1,22),location:'Chandigarh'},
    {id:3, title:'Dryer',price:400,date:new Date(2024,1,12),location:'Delhi'},
    {id:4, title:'Cosmetics',price:110,date:new Date(2024,2,5),location:'Agra'}
  ]



  return (
    <div className="App">
        {
          expenses.map((item)=>{
            return(<ExpenseItems id={item.id} title={item.title} price={item.price} data={item.date} location={item.location}/>)
          })
        }
    </div>
  );
}

export default App;
