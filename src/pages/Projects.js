import React from "react";
import ProjectCard from "../components/ProjectCard";
import img1 from "../assets/quizzical/Browser2.png";
import img2 from "../assets/quizzical/Browser3.png";
import img3 from "../assets/quizzical/Browser1.png";

import img11 from "../assets/Movie/img1.png";
import img22 from "../assets/Movie/img2.png";
import img33 from "../assets/Movie/img3.png";

import img111 from "../assets/tenzies/img1.png";
import img222 from "../assets/tenzies/img2.png";
import img333 from "../assets/tenzies/img3.png";

import dashboard1 from "../assets/browser.png";
import dashboard2 from "../assets/browser2.png";

import ToTop from "../components/ToTop";

function Projects(props) {
  return (
    <>
    <div id="projects" className="projects" ref={props.ref}>
      <div className="title black">
        <span className="brace">{`[ `}</span>
        {"Projects"}
        <span className="brace">{` ]`}</span>
      </div>
      <ProjectCard
        id="0"
        name="Dashboard Application"
        desc="This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts! This application has complete state management with React Context API, it also has use case of various react hooks such as useState, useEffcts, useRefs, useContext etc., make use of Routes, Link and NavLink from react-router-dom, make use of Syncfusion UI components and use tailwind-CSS framework."
        image1={dashboard1}
        image2={dashboard2}
        image3={img3}
        url="https://pie-dashboard.netlify.app/"
        github="https://github.com/bijeshsingha/dashboardApplication"
      />
      <ProjectCard
        id="1"
        name="Quizzical"
        desc="Quiz App is a fun and interactive way to test your knowledge on any subject. With Quiz App, you can create a quiz on any topic of your choice and share it with your friends. Quiz App is the perfect way to test your knowledge and have a great time with your friends. 
        It was my first project, I built after learning React. Basics of react such as conditional rendering, use of hooks like useState and useEffect, Side Effects and EventListeners are used."
        image1={img1}
        image2={img2}
        image3={img3}
        url="https://8892quiz.netlify.app/"
        github="https://github.com/bijeshsingha/quizzical"
      />
      <ProjectCard
        id="2"
        name="Movie Search App"
        desc="This is a movie search app created using React. The user can search for a movie by title and the app will display a list of matching results. The user can then click on a result to view more information about the movie."
        image1={img11}
        image2={img22}
        image3={img33}
        url="https://shimmering-conkies-1df5c8.netlify.app/"
        github="https://github.com/bijeshsingha/movie_search_app"
      />
      <ProjectCard
        id="3"
        name="Tenzies"
        desc="Tenzies is a simple and fun dice game built in React. The aim of the game is to make all the die same numbered by rolling ten dice. The dice can be rolled up to infinite times and the player can choose to keep any of the dice they rolled. The game is perfect for a quick break or a fun game night with friends. This game also keeps track of your high score so you can try to beat your own best!"
        image1={img111}
        image2={img222}
        image3={img333}
        url="https://tenzies-game12345.netlify.app/"
        github="https://github.com/bijeshsingha/tenzies"
      />
      
    </div>
    <ToTop />
    </>
  );
}

export default Projects;