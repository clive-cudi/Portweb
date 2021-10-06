import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import "./welcome.css";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import Projects from "./Projects";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { DropdownContext } from "./contexts/DropdownCtx";
import Footer from "./Footer";

function Welcome({ name }) {
  const [dropdown] = useContext(DropdownContext);
  const navOptions = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];
  return (
    <div className="welcome-main-wrapper">
      <div className="welcome-cont">
        {dropdown ? <Dropdown navOptions={navOptions}  /> : <Navbar name={name} />}
        {/* render a page according to condition triggered by button onclick */}
        <Intro name={name} />
        <AboutPage />
        <SkillsPage />
        <Projects />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
