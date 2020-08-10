import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { ThemeContext } from './../Context/ThemeContext';

const Balance = () => {
      const {isDark,light,dark} = useContext(ThemeContext);
      const mode = isDark ? dark : light;

      const {transactions} = useContext(GlobalContext)

      const amounts = transactions.map(t => (t.amount));
      const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
      return (
            <div className="container" style={{background: mode.bg, color: mode.syntax2}}>
                  <h4 style={{color: mode.syntax}}>Balance</h4>
                  <h1 id="balance">${total}</h1>
            </div>
      )
}

export default Balance;
