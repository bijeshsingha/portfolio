import React from "react";

function SkillsCard(props) {
    return (
          <div className="box">
            <span className="title">{props.skills[0]}</span>
            <span className="title">{props.skills[1]}</span>
            <span className="title">{props.skills[2]}</span>
            <span className="title">{props.skills[3]}</span>
            <span className="title">{props.skills[4]}</span>
            <span className="title">{props.skills[5]}</span>
            <span className="title">{props.skills[6]}</span>
          </div>
    )
}

export default SkillsCard;