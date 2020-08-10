import React,{useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function ThemeToggle() {
      const {isDark,toggle,light,dark} = useContext(ThemeContext);
     const mode = isDark ? dark : light;
  return (
    <div style={{background: mode.bg, color: mode.syntax}}>
    <div className="switch">
      <FormControlLabel control={<Switch onClick={() => toggle()} />} label="Dark Mode" />
      </div>
    </div>
  );
}
