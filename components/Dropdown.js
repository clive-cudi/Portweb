import React from "react";
import { DropdownContext } from "./contexts/DropdownCtx";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function Dropdown({ navOptions }) {
  const [dropdown, setDropdown] = useContext(DropdownContext);
  const [darkTheme] = useContext(ThemeContext)
  return (
    <div className="dropdown-wrapper" style={{
      background: darkTheme ? "rgb(22, 22, 22)" : "white",
    }}>
      <div className="dropdown-close" style={{
        display:  "flex",
        height: "20px",
        width: "100%",
        justifyContent: "end"
      }}>
        <button style={{
          display: "flex",
          width: "20px",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
          color: darkTheme ? "white" : "black"
        }} onClick={()=>{
          dropdown ? setDropdown(false) : setDropdown(false)
        }}><i className="fa fa-times"></i></button>
      </div>
      <div className="dropdown-cont">
        {navOptions.map((option) => {
          console.log(option);
          return (
            <button key={navOptions.indexOf(option)} onClick={()=>{
              dropdown ? setDropdown(false) : setDropdown(false)
            }}>
              <a
                href={`#${option}`}
                style={{
                  textDecoration: "none",
                  color: darkTheme? "white" : "black",
                }}
              >
                {option}
              </a>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
