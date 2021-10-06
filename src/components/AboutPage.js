import React from "react";
import "./about.css";
import busy from "./assets/images/30840-work-from-home.gif";
import resume from './assets/docs/Resume_CliveFlavius.pdf';
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import man from './assets/images/manOnTable.svg'

function AboutPage() {
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
            Am a passionate Web Developer who loves coding and programming, alot ;).
            I love building new and interesting ideas for myself and for those who wish to bring their thoughts to life.
            I also do Music Production [Making Beats] and 3d Modelling [Mostly Blender ;)] for fun along with some Game Development.
          </p>
          <a href={resume}><button>View Resume</button></a>
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
