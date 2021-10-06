import React from 'react'
import './card.css';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

function Card({name, description}) {
    const [darkTheme] = useContext(ThemeContext);
    return (
        <div className="card-wrapper" style={{
            boxShadow: darkTheme ? "1px 1px 10px 3px black" : "1px 1px 10px 3px lightblue"
        }}>
            <div className="card-cont">
                <div className="card-title">
                    <h2 style={{
                        color: darkTheme ? "white" : "black"
                    }}>{name}</h2>
                </div>
                <div className="card-description">
                    <p style={{
                        color: darkTheme ? "white" : "black"
                    }}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;