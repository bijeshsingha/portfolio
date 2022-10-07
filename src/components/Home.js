import React from "react";
import homeImg from "../assets/home.svg"

function Home(props){
    return (
        <div id="home" className="home">
            <div><span className="title">Hello!👋</span>
            <br/>
            <span className="title">My name is:</span>
            <br/>
            <span className="title brace name">Bijesh Singha.</span>
            <br/>
            <span className="title">Front-end developer.</span><span className="title brace"> |</span></div>
            <img className="img" scr={homeImg} alt="coding-guy"/>
        </div>
    )
}

export default Home;