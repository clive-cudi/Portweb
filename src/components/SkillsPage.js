import React from "react";
import "./skills.css";
import skillImage from "./assets/images/36707-working-man.gif";
import Skill from "./Skill";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import skillDark from "./assets/images/programmer.svg";

function SkillsPage({ skills }) {
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
            <h1
              style={{
                color: darkTheme ? "white" : "black",
              }}
            >
              What I do Best:
            </h1>
          </div>
          <div className="skills">
              {
                  skills.map((skill)=>{
                      return (
                          <Skill icon={skill.icon} percentage={skill.percentage} />
                      )
                  })
              }
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
