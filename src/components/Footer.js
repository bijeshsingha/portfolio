import React from "react";

import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import insta from "../assets/insta.png"

function Footer(props){
    return (
        <div className="footer">
            <span>bijeshsingha.dev | 2022</span>
            <span>Made with 💙 by Bijesh Singha</span>
            <div className="followMe">
            <span>Follow </span>
            <a href="https://github.com/bijeshsingha" target="_blank" rel="noreferrer"><img className="icon" src={github} alt="github" width="20px"/></a>
            <a href="https://www.linkedin.com/in/bijesh-singha-89a634159/" target="_blank" rel="noreferrer"><img className="icon" src={linkedin} alt="github" width="20px"/></a>
            <a href="https://www.instagram.com/bijeshsingha8/" target="_blank" rel="noreferrer"><img className="icon" src={insta} alt="github" width="20px"/></a>
            </div>
        </div>
    )
}

export default Footer;