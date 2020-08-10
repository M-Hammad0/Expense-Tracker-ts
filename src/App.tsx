import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import ThemeToggle from './Components/ThemeToggle';
import ThemeProvider from './Context/ThemeContext';

function App() {
  return (
    <div>
    <GlobalProvider>
    <ThemeProvider>
    <ThemeToggle />
    <Header />
    <Balance />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />
    </ThemeProvider>
    </GlobalProvider>
    </div>
  );
}

export default App;


