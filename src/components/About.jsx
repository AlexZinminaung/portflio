import React from "react";
import "./styles/About.css";
import Navbar from "./Navbar";
import profile from '../assets/profile.jpg'
import profile2 from '../assets/profile2.jpg'
import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from "./Footer";
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/java-script.png';
import react from '../assets/react.png';
import git from '../assets/git.png';
import github from '../assets/github.png'

function Header()
{
    return (
    <header className="about-header">
        <Link to='about-me' smooth={true} duration={50}><img src={profile}/></Link>
        <h1>Zin Min Aung</h1>
        <h2>A frontend developer</h2>
    </header>
    );
}
function Binner() {

    return (
    <div className="about-binner" id="about-me">
        <div className="statement">
            <h2>About me</h2>
            <p>My name is Zin Min Aung, a 21-year-old frontend programmer with a passion for coding, mathematics, 
               and problem-solving. With strong skills in web development and effective communication in English, 
               I excel in creating user-friendly web interfaces. I also enjoy teaching and sharing knowledge, making me a valuable asset in collaborative environments.
            </p>
        </div>
        <img src={profile2}/>
    </div>);
}


function Skills() {
    return (
        <section className="skills">
            <h1>My Skills</h1>
            <div className="skills-container">
                <div className="skill-card">
                    <img src={html}/>
                    <p>HTML</p>        
                </div>

                <div className="skill-card">
                    <img src={css}/>
                    <p>CSS</p>        
                </div>

                <div className="skill-card">
                    <img src={js}/>
                    <p>JAVASCRIPT</p>        
                </div>
            
                <div className="skill-card">
                    <img src={react}/>
                    <p>REACT</p>        
                </div>

                <div className="skill-card">
                    <img src={git}/>
                    <p>GIT</p>        
                </div>

                <div className="skill-card">
                    <img src={github}/>
                    <p>GIT HUB</p>        
                </div>
            </div>
        </section>
        
    );
}


function About() {
    return (
    <>
    <Header/>
    <Binner/>
    <Skills/>
    </>
);
}


export default About;