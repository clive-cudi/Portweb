import React from "react";

function Skill({icon, name, percentage}) {
    return (
        <div className="skill-wrapper">
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