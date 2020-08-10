import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { ThemeContext } from "./../Context/ThemeContext";

export default function IncomeExpense() {
  const { isDark, light, dark } = useContext(ThemeContext);
  const mode = isDark ? dark : light;
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((item) => item.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container" style={{background: mode.bg2, color: mode.syntax}}>
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {Math.abs(expense)}
        </p>
      </div>
    </div>
  );
}
