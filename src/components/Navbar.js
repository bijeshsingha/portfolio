import React from "react";

function Navbar(props) {

  const title = (<div className="title">
        <span onClick={window.scrollTo({top: 0, left: 0, behavior: 'auto'})} className="brace">{`{ `}</span>
        {"bijeshsingha.dev"}
        <span className="brace">{` }`}</span>
      </div>)

  return (
    <div className="navbar text2">
      {title}
      <div
        className={`${props.state === 0 && "selected"} header`}
        onClick={() => {
          props.setState(0)
          window.scrollTo({top: 0, left: 0, behavior: 'auto'})
        }}
      >
        Home
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
