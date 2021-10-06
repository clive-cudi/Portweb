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

function Welcome({ firstName, lastName, jobTitles, briefIntro, aboutParagraph, resumeLink, skills, projects,contactInfo }) {
  const [dropdown] = useContext(DropdownContext);
  const navOptions = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];
  return (
    <div className="welcome-main-wrapper">
      <div className="welcome-cont">
        {dropdown ? <Dropdown navOptions={navOptions}  /> : <Navbar name={firstName} />}
        {/* render a page according to condition triggered by button onclick */}
        <Intro firstName={firstName} lastName={lastName} jobTitles={jobTitles} briefIntro={briefIntro} />
        <AboutPage aboutParagraph={aboutParagraph} resumeLink={resumeLink} />
        <SkillsPage skills={skills} />
        <Projects projects={projects} />
        <ContactPage contactInfo={contactInfo} />
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
