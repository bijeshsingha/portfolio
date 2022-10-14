import React from "react";

function Card(props) {
    return (
          <div className="box">
            <span className="title">{props.period}</span>
            <span className="text2">{props.desg}</span>
            <br/>
            <span className="text2 white">{props.company}<br/>{props.location}</span>
          </div>
    )
}

export default Card;