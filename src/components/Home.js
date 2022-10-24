import React from 'react'
import homeImg from "../assets/JS.svg";
import rightArrow from "../assets/RightArrow.svg";

function Home(props) {

  return (
    <div id="home" className="home">
      <div className="title">
        <span>Hello!👋</span>
        <br />
        <span>My name is:</span>
        <br />
        <span className="brace name">Bijesh Singha.</span>
        <br />
        <span>Web Development Enthusiast.</span>
        <span className="brace"> |</span>
        <br/>
        <br/>
        <a
          href="#projects"
          className="hire-me"
        >
          <span className="title">Projects</span>
          <img className="buttonIcon" src={rightArrow} alt="right arrow" width="40px" />
        </a>
      </div>
      {props.width > 1064 && <img width="500px" scr={homeImg} alt="coding-guy" />}
    </div>
  );
}

export default Home;
