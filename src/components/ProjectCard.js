import React from "react";

function ProjectCard(props) {
  return (
    <div className="project">
      <div className="title">
        projects<span className="brace"> [ </span>
        {props.id}
        <span className="brace"> ] </span> = {`{`}
        <br />
            <div className="obj-content">
            <span className="title"> name </span>
            <span className="brace">:</span>
            <span className="title"> " {props.name} " ,</span>
            <br />
            <span className="title"> description </span>
            <span className="brace">:</span>
            <span className="title"> " {props.desc} " ,</span>
            <br/>
            <span className="title"> url </span>
            <span className="brace">:</span>
            <a href={props.url} className="title" target="_blank" rel="noreferrer"> " {props.url} " ,</a>
            <br/>
            <span className="title"> github_url </span>
            <span className="brace">:</span>
            <a href={props.github} className="title" target="_blank" rel="noreferrer"> " {props.github} "</a>
            </div>
        {`}`}
      </div>
      <img className="img" src={props.image1} alt="quiz-app1" width="800px"/>
      <img className="img" src={props.image2} alt="quiz-app2" width="800px"/>
    </div>
  );
}

export default ProjectCard;
