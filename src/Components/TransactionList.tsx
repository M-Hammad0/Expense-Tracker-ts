import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from './Transaction';
import { ThemeContext } from './../Context/ThemeContext';


export default function TransactionList() {
  const {isDark,light,dark} = useContext(ThemeContext);
  const mode = isDark ? dark : light;
  const { transactions } = useContext(GlobalContext);
  return (
    <div style={{color: mode.syntax}}>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map( t => ( <Transaction key={t.id} trans={t} />   ))}
      </ul>
    </div>
  );
}
