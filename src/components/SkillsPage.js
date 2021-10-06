import React from "react";
import './skills.css';
import skillImage from './assets/images/36707-working-man.gif';
import Skill from "./Skill";
import jsLogo from './assets/images/icons8-javascript-48.png';
import reactLogo from './assets/images/icons8-react-40.png';
import htmlLogo from './assets/images/icons8-html-5-48.png';
import cssLogo from './assets/images/icons8-css3-50(1).png';
import pythonLogo from './assets/images/icons8-python-50.png';
import blenderLogo from './assets/images/icons8-blender-3d-50.png';
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import skillDark from './assets/images/programmer.svg';


function SkillsPage(){
    const [darkTheme] = useContext(ThemeContext);
    return (
        <section className="skills-main-wrapper" id="Skills">
            <div className="skills-main-cont">
                <div className="skills-pic">
                    <div className="image-holder">
                        <img src={darkTheme ? skillDark : skillImage} alt="Loading..." />
                    </div>
                </div>
                <div className="skills-details">
                    <div className="skills-title">
                        <h1 style={{
                            color: darkTheme ? "white" : "black"
                        }}>What I do Best:</h1>
                    </div>
                    <div className="skills">
                    <Skill icon={htmlLogo} percentage="96" />
                        <Skill icon={jsLogo} percentage="88" />
                        <Skill icon={reactLogo} percentage="70" />
                        <Skill icon={cssLogo} percentage="90" />
                        <Skill icon={blenderLogo} percentage="50" />
                        <Skill icon={pythonLogo} percentage="60" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsPage;