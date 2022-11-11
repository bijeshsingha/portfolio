import React from "react";
import { NavLink } from "react-router-dom";

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
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        to="/projects"
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
      >
        About Me
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        to="/contact"
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
      >
        Contact
      </NavLink>
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
