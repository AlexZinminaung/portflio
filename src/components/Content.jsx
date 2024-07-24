import React from "react";
import "./styles/Content.css"
import facbook from "../assets/facebook.png";
import linkedin from '../assets/linkedin.png';
import gmail from "../assets/gmail.png";

function Content() {

    return (
    <div className="content-container">
            <h1>Here are my Social Media</h1>
            <p>You can alway content me , anytime, anywhere...</p>
           
            <div className="Card-container">
                <a className="Card" target="_blank" href="https://web.facebook.com/profile.php?id=100086689434304">
                    <img src={facbook}/>
                    <p>My Facebook</p>
                </a>

                <a className="Card" target="_blank" href="https://www.linkedin.com/in/zinmin-aung-5773212aa/">
                    <img src={linkedin}/>
                    <p>My Linkedin</p>
                </a>


                <a className="Card" href="mailto:zinminaungalex200311@gmail.com">
                    <img src={gmail}/>
                    <p>Mail</p>
                </a>

            </div>
        </div>
  
    );
};


export default Content;