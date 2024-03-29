
import './App.css';
import { useState } from 'react';
import Card from '../src/components/UI/Card';

import NewExpens from './components/NewExpenses/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpensesChart from './components/Expenses/ExpensesChart';



const App=()=> {

  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Food', price: 10, date: new Date(2021, 1, 26), location: 'GZB' },
    { id: 2, title: 'Petrol', price: 100, date: new Date(2020, 1, 22), location: 'Chandigarh' },
    { id: 3, title: 'Dryer', price: 400, date: new Date(2022, 1, 12), location: 'Delhi' },
    { id: 4, title: 'Cosmetics', price: 110, date: new Date(2021, 2, 5), location: 'Agra' }
  ]);

  const [filteredYear,setFilteredYear] = useState('2020');


  const AddExpenseHandler = (newExpense) =>{
         console.log(newExpense)
         setExpenses(prevExpenses=>[...prevExpenses,newExpense])
  }

  // but there is one issue as of now when i clicked on mutliple time then the list is not updating why?
  const filterYearHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }

 // but now the problem is solved
  const filterExpense = ()=>{
      return expenses.filter((expense)=>expense.date.getFullYear()==filteredYear);
  }



  return (
    <div className="expenses">
    <NewExpens onAddExpense = {AddExpenseHandler}/>
    <ExpensesFilter selected = {filteredYear } onChangeFilter={filterYearHandler}/>
    <ExpensesChart expenses={filterExpense} />
    <Card >
          <ExpensesList items={filterExpense}/>
       
    </Card>
   
    </div>
    
  );
}

export default App;
