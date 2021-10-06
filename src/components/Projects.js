import React from 'react';
import './projects.css';
import Card from './Card';

function Projects() {
    const projects = ['Plovie', 'Tonial', 'Plug Chat', 'Plug Connect'];
    const projectDescriptions = [
        "Plovie is a Movie web Application that makes use of a couple of API's to provide movie recommendations to users",
        "Tonial is a Music application with chat functionalities along with other features with I am working on.",
        "Plug chat, as the name suggests is a chat application that acted as tool to practice my skills as I was learning React",
        "Plug Connect is an application that combines the power of API's along with other algorithmic process to enable users to connect with other fellow users who do the same work as them"
    ]
    // const descriptions = [
    //     {
    //         card: 1,
    //         desc: ""
    //     },
    //     {
    //         card: 2,
    //         desc: ""
    //     },
    //     {
    //         card: 3,
    //         desc: ""
    //     },
    //     {
    //         card: 4,
    //         desc: ""
    //     }
    // ]
    const descriptions = projects.map((project)=>{
        return (
            {
                card: project,
                desc: projectDescriptions[projects.indexOf(project)]
            }
        )
    })
    return (
        <div className="projects-main-wrapper" id="Projects">
            <div className="projects-main-cont">
                <div className="projects-title">
                    <h1>What I've Done :</h1>
                </div>
                <div className="cards-wrapper">
                    {
                        projects.map((project)=>{
                            return (
                                <Card name={project} key={projects.indexOf(project)} description={descriptions[projects.indexOf(project)].desc} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects