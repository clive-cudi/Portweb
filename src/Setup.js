import React from "react";
import { ThemeContext } from "./components/contexts/ThemeContext";
import { useContext } from "react";
import { DropdownProvider } from "./components/contexts/DropdownCtx";
import Welcome from "./components/WelcomePage";
import { useState } from "react";
import resume from "./components/assets/docs/Resume_CliveFlavius.pdf";
import jsLogo from "./components/assets/images/icons8-javascript-48.png";
import reactLogo from "./components/assets/images/icons8-react-40.png";
import htmlLogo from "./components/assets/images/icons8-html-5-48.png";
import cssLogo from "./components/assets/images/icons8-css3-50(1).png";
import pythonLogo from "./components/assets/images/icons8-python-50.png";
import blenderLogo from "./components/assets/images/icons8-blender-3d-50.png";

function Setup() {
  const [darkTheme] = useContext(ThemeContext);

  // Edit the following specified slots

  // Enter your First name and Last Name
  const [Name] = useState({
    first: "Clive",
    last: "Flavius",
  });


  // Your Job titles e.g
  const [jobTitles] = useState([
    "Programmer",
    "Web Developer & Designer",
    "Techie ;)",
  ]);


  // A brief Intro about you
  const [briefIntro] = useState(
    "Passionate Web Developer who loves coding and building cool stuff"
  );
  // A paragraph about you i.e what you do, what you like doing, hobbies, talents e.t.c... e.g
  const [para] = useState(
    "Am a passionate Web Developer who loves coding and programming, alot ;). I love building new and interesting ideas for myself and for those who wish to bring their thoughts to life. I also do Music Production [Making Beats] and 3d Modelling [Mostly Blender ;)] for fun along with some Game Development."
  );


  // Your Resume Download Link
  const [resumeLink] = useState(resume);


  // Your Skills along with the corresponding percentage level of knowledge
  // The links to icons for corresponding skills
  const [skills, setSkills] = useState([
    {
      skill: "Html",
      icon: htmlLogo,
      percentage: "96",
    },
    {
      skill: "CSS",
      icon: cssLogo,
      percentage: "90",
    },
    {
      skill: "Javascript",
      icon: jsLogo,
      percentage: "88",
    },
    {
      skill: "React",
      icon: reactLogo,
      percentage: "70",
    },
    {
      skill: "Python",
      icon: pythonLogo,
      percentage: "60",
    },
    {
      skill: "Blender",
      icon: blenderLogo,
      percentage: "50",
    },
  ]);
  // Project Title of the projects you have done e.g
  const projectTitles = ["Plovie", "Tonial", "Plug Chat", "Plug Connect"];


  // Corresponding Descriptions of the projects above e.g
  const projectDescriptions = [
    "Plovie is a Movie web Application that makes use of a couple of API's to provide movie recommendations to users",
    "Tonial is a Music application with chat functionalities along with other features with I am working on.",
    "Plug chat, as the name suggests is a chat application that acted as tool to practice my skills as I was learning React",
    "Plug Connect is an application that combines the power of API's along with other algorithmic process to enable users to connect with other fellow users who do the same work as them",
  ];
  const [projects] = useState(
    projectTitles.map((project) => {
      return {
        title: project,
        description: projectDescriptions[projectTitles.indexOf(project)],
      };
    })
  );


  //  Your contact info i.e (your email and phone number) e.g
  const [contactInfo] = useState({
    email: "clivemaina41@gmail.com",
    phoneNumber: "+254 771 575 804",
  });


  return (
    <DropdownProvider>
      <div
        className="Content"
        style={{
          background: darkTheme ? "rgb(19, 19, 19)" : "white",
          backgroundImage: darkTheme
            ? 'url("chrome://global/skin/media/imagedoc-darknoise.png")'
            : "none",
        }}
      >
        <div className="content-wrapper">
          <Welcome
            firstName={Name.first}
            lastName={Name.last}
            jobTitles={jobTitles}
            briefIntro={briefIntro}
            aboutParagraph={para}
            resumeLink={resumeLink}
            skills={skills}
            projects={projects}
            contactInfo={contactInfo}
          />
        </div>
      </div>
    </DropdownProvider>
  );
}

export default Setup;