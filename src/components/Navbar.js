import React from "react";

function Navbar(props) {
  const title = (
    <div className="title">
      <span className="brace">{`{ `}</span>
      {"bijeshsingha.dev"}
      <span className="brace">{` }`}</span>
    </div>
  );

  const menu = (
    <>
      <div
        className={`${props.state === 0 && "selected"} header`}
        onClick={() => {
          props.setState(0);
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          props.setIsMenu(false);
        }}
      >
        <a href="#">Home</a>
      </div>
      <div
        className={`${props.state === 1 && "selected"} header`}
        onClick={() => {
          props.setState(1);
          props.setIsMenu(false);
        }}
      >
        <a href="#projects">Projects</a>
      </div>
      <div
        className={`${props.state === 2 && "selected"} header`}
        onClick={() => {
          props.setState(2);
          props.setIsMenu(false);
        }}
      >
        <a href="#">About Me</a>
      </div>
      <div
        className={`${props.state === 3 && "selected"} header`}
        onClick={() => {
          props.setState(3);
          props.setIsMenu(false);
        }}
      >
        <a href="#contact">Contact</a>
      </div>
    </>
  );

  const hamberger = (
    <div
      id="hamburger-icon"
      className={`hamburger-icon ${props.isMenu && "open"}`}
      onClick={() => props.setIsMenu((prev) => !prev)}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );

  return (
    <>
      <div className="navbar text2">
        {title}
        {props.width > 1064 ? menu : hamberger}
      </div>
      {props.isMenu && <div className="mobile-menu text2">{menu}</div>}
    </>
  );
}

export default Navbar;
