import React from "react";
import './nav.css';
//eslint-disable-next-line
import { Link } from "react-scroll";
import { useState } from "react";
//eslint-disable-next-line
import Dropdown from "./Dropdown";
import { useEffect } from "react";
import { useContext } from "react";
import { DropdownContext } from "./contexts/DropdownCtx";
import { ThemeContext } from "./contexts/ThemeContext";

function Navbar({name}){
    const [mini, setMini] = useState(false);
    const [showDropdown, setDropdown] = useContext(DropdownContext);
    const navOptions = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];
    const [darkTheme] = useContext(ThemeContext);

    useEffect(()=>{
        if (window.innerWidth <= 650){
            setMini(true)
        }else {
            setMini(false)
        }
    },[])

    return (
        <div className="navbar-main-wrapper" style={{
            background: darkTheme ? "rgb(22, 22, 22)" : "white"
        }}>
            <div className="navbar-cont">
                <div className="nav-name-wrapper">
                    <h1 style={{
                        color: darkTheme ? "white" : "black"
                    }}>{name}</h1>
                </div>
                <div className="nav-controls-wrapper">
                    <div className="nav-controls" style={{
                        justifyContent: mini ? "end" : "space-evenly"
                    }}>
                    {
                        mini === false ?
                        navOptions.map((option)=>{
                            return(
                            <button key={navOptions.indexOf(option)}><a href={`#${option}`} style={{
                                textDecoration: "none",
                                color: darkTheme ? "white" : "black"
                            }}>{option}</a></button>
                            )
                        })
                        : <button style={{
                            cursor: "pointer",
                            color: darkTheme ? "white" : "black"
                        }} onClick={()=>{showDropdown === true ? setDropdown(false): setDropdown(true)}}><i className="fa fa-bars" style={{
                            fontSize: "24px",
                            marginRight: "20px"
                        }}></i></button>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
