import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { ThemeContext } from "./../Context/ThemeContext";

export default function Transaction(props: any) {
  const { isDark, light, dark } = useContext(ThemeContext);
  const mode = isDark ? dark : light;

  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.trans.amount > 0 ? "+" : "-";
  
  return (
    <li style={{color: mode.syntax2}} className={props.trans.amount > 0 ? "plus" : "minus"}>
      {props.trans.text}{" "}
      <span>
        {sign}
        {Math.abs(props.trans.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(props.trans.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
