import React from "react";
import "./intro.css";
//eslint-disable-next-line
import hello from "./assets/images/51971-hello.gif";
import hi from "./assets/images/hi_portfolio.gif";
import Switch from "react-switch";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import hiDark from './assets/images/developerActivity.svg'

function Intro({ firstName, lastName, jobTitles, briefIntro }) {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  function toggleTheme() {
    if (darkTheme === false) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }

  return (
    <section className="intro-main-wrapper" id="Intro">
      <div className="intro-cont">
        <div className="intro-details">
          <div className="title-greeting">
            <h2 style={{
                color: darkTheme ? "white" : "black",
            }}>Hi There ;) Meet me,</h2>
            <h1>{firstName} {lastName}</h1>
          </div>
          <div className="intro-skills">
            <div className="typing-demo"
            style={{
                color: darkTheme ? "white" : "black",
            }}>
              {jobTitles.map((title)=>{
                return (
                  ` ${title} .`
                )
              })}
            </div>
          </div>
          <div className="intro-words">
            {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat earum iure natus, necessitatibus amet alias modi commodi quisquam nisi veritatis totam adipisci ipsum porro nulla, quaerat nam. Quas, similique.
                        </p> */}
            <p style={{
                color: darkTheme ? "white" : "black",
            }}>
              {briefIntro}
            </p>
          </div>
          <label
            style={{
              display: "flex",
              marginTop: "10px",
              alignItems: "center"
            }}
          >
            <span
              style={{
                color: darkTheme ? "white" : "black",
                fontSize: "14px",
                fontWeight: "bold",
                margin: "10px"
              }}
            >
              Toggle {darkTheme == true ? "Light" : "Dark"} Theme
            </span>
            <Switch
              onChange={toggleTheme}
              checked={darkTheme}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#ffffff"
              onHandleColor="#cccccc"
            />
          </label>
        </div>
        <div className="intro-pic">
          <div className="image-holder">
            <img src={darkTheme ? hiDark : hi} alt="Loading..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
