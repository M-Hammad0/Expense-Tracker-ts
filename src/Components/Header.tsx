import React,{useContext} from 'react'
import { ThemeContext } from './../Context/ThemeContext';


const Header = () => {
      const {isDark,light,dark} = useContext(ThemeContext);
     const mode = isDark ? dark : light;
      return <div style={{background: mode.bg, color: mode.syntax}}>
            <h1>Expense Tracker</h1>
      </div>
}

export default Header;