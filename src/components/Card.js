import React from 'react'
import './card.css';

function Card({name, description}) {
    return (
        <div className="card-wrapper">
            <div className="card-cont">
                <div className="card-title">
                    <h2>{name}</h2>
                </div>
                <div className="card-description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;