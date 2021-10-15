import React from "react";
import "./about.css";
import busy from "./assets/images/30840-work-from-home.gif";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import man from './assets/images/manOnTable.svg'

function AboutPage({aboutParagraph, resumeLink}) {
  const [darkTheme] = useContext(ThemeContext)
  return (
    <section className="about-main-wrapper" id="About">
      <div className="about-cont">
        <div className="about-details">
          <div className="about-title">
            <h1 style={{
              color: darkTheme ? "white" : "black"
            }}>About Me</h1>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit magnam nesciunt cum, cupiditate maiores perferendis
            iusto? Dolorem obcaecati voluptatum exercitationem commodi vero
            repellat architecto, laudantium totam enim ducimus fugiat odio.
          </p> */}
          <p style={{
            wordSpacing: '2px',
            color: darkTheme ? 'white' : 'black'
          }}>
            {aboutParagraph}
          </p>
          <a href={resumeLink}><button>View Resume</button></a>
        </div>
        <div className="about-pic">
          <div className="image-holder">
            <img src={darkTheme ? man : busy} alt="Loading..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
