import React from "react";
import uparrow from "../assets/ArrowUp.svg";

function ToTop() {
    return (<div className="top-button">
        <button className="button" onClick={() => window.scrollTo(0, 0)}>
          <img src={uparrow} alt="up-arrow" width="40px"/>
        </button>
      </div>)
}

export default ToTop;