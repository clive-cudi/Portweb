import React from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

function Skill({icon, name, percentage}) {
    const [darkTheme] = useContext(ThemeContext);
    return (
        <div className="skill-wrapper" style={{
            background: darkTheme ? "rgb(58, 58, 58)" : "white",
            boxShadow: darkTheme ? "1px 1px 10px 3px black" : "1px 1px 10px 3px lightblue"
        }} >
            <div className="skill-cont">
                <div className="icon-tray">
                    <img src={icon} alt="</>" />
                </div>
                <div className="bar-wrapper">
                    <div className="bar">
                        <div className="juice" style={{
                            width: `${percentage}%`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;