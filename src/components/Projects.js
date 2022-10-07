import React from "react";
import ProjectCard from "./ProjectCard"
import img1 from "../assets/quizzical/Browser2.png"
import img2 from "../assets/quizzical/Browser3.png"

function Projects(props){
    return (
        <div id="projects" className="projects">
            <div className="title"><span className="brace">{`[ `}</span>{"Projects"}<span className="brace">{` ]`}</span></div>
            <ProjectCard id="0" name="Quizzical" desc="It was my first project, I built after learning React. It is a quiz website in which basics of react such as conditional rendering, use of hooks like useState and useEffect are used." image1={img1} image2={img2} url="https://8892quiz.netlify.app/" github="https://github.com/bijeshsingha/quizzical"/>
            <ProjectCard id="1" name="Movie Search App" desc="blah blah blah" image1="" image2="" url="https://shimmering-conkies-1df5c8.netlify.app/" github="https://github.com/bijeshsingha/movie_search_app"/>
            <ProjectCard id="2" name="Movie Search App" desc="blah blah blah" image1="" image2="" url="" github="https://github.com/bijeshsingha"/>
        </div>
    )
}

export default Projects;