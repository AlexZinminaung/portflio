import React from "react";
import "./styles/Projects.css"
import react from '../assets/react.png'
import projects from "./projects";

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects </h1>
            <div className="project-box-container">
                
                {projects.map(project => {
                    return (        
                            <a href={project.url} target="_blank" id={project.id}>
                                <div className="project-box">
                                    <img src={react}/>
                                    <p>{project.name}</p>    
                                </div>
                            </a>);
                })}
                
            </div>


        </div>
    );
}


export default Projects;