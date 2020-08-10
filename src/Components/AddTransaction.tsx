import React, { useState, useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";
import { ThemeContext } from "./../Context/ThemeContext";

interface Itransaction {
  id: number,
  text: string,
  amount: number
}


export default function AddTransaction() {
      
      const [text, setText] = useState("");
      const [amount, setAmount] = useState<string>("0.00");
      
      const {addTransaction} = useContext(GlobalContext);

      const onSubmit = (event: any) => { 
        event.preventDefault();

        const newTransaction: Itransaction = {
          id : Math.floor(Math.random() * 100000),
          text,
          amount: +amount
        }

        addTransaction(newTransaction);
      }

      const { isDark, light, dark } = useContext(ThemeContext);
      const mode = isDark ? dark : light;


  return (
    <div style={{color: mode.syntax}}>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(event) => setText(event.target.value) } placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="text" value={amount} onChange={(event) => setAmount((event.target.value))} placeholder="Enter amount..." />
        </div>
        <button style={{background: mode.syntax2}} className="btn">Add transaction</button>
      </form>
    </div>
  );
}
