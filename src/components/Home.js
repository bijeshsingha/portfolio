import React from 'react'
import homeImg from "../assets/JS.svg";

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
        <span>Front-end developer aspirant.</span>
        <span className="brace"> |</span>
      </div>
      {props.width > 1064 && <img width="500px" scr={homeImg} alt="coding-guy" />}
    </div>
  );
}

export default Home;
