import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="title">
        <span className="brace">{`{ `}</span>
        {"bijeshsingha.dev"}
        <span className="brace">{` }`}</span>
      </div>
      <div
        className={`${props.state === 0 && "selected"} header`}
        onClick={() => props.setState(0)}
      >
        <a href="#">Home</a>
      </div>
      <div
        className={`${props.state === 1 && "selected"} header`}
        onClick={() => props.setState(1)}
      >
        <a href="#projects">Projects</a>
      </div>
      <div
        className={`${props.state === 2 && "selected"} header`}
        onClick={() => props.setState(2)}
      >
        About Me
      </div>
      <div
        className={`${props.state === 3 && "selected"} header`}
        onClick={() => props.setState(3)}
      >
        Contact
      </div>
    </div>
  );
}

export default Navbar;
