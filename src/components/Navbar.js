import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function Navbar() {
  const { width, isMenu, setIsMenu } = useStateContext()
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
        onClick={() => setIsMenu((prev) => !prev)}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        to="/projects"
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
        onClick={() => setIsMenu((prev) => !prev)}
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
        onClick={() => setIsMenu((prev) => !prev)}
      >
        About Me
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "header selected" : "header")}
        to="/contact"
        style={({ isActive }) => ({ color: isActive ? "white" : "" })}
        onClick={() => setIsMenu((prev) => !prev)}
      >
        Contact
      </NavLink>
    </>
  );

  const hamberger = (
    <div
      id="hamburger-icon"
      className={`hamburger-icon ${isMenu && "open"}`}
      onClick={() => setIsMenu((prev) => !prev)}
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
        {width > 1064 ? menu : hamberger}
      </div>
      {isMenu && <div className="mobile-menu text2">{menu}</div>}
    </>
  );
}

export default Navbar;
