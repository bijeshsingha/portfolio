import React from "react";

function ProjectCard(props) {
  return (
    <div className="project">
      <div className="title black">
        projects<span className="brace"> [ </span>
        {props.id}
        <span className="brace"> ] </span> = {`{`}
        <br />
        <div className="obj-content">
          <span className="text-darkBlue"> name </span>
          <span className="brace">: </span>
          <span> " {props.name} " ,</span>
          <br />
          <span className="text-darkBlue"> description </span>
          <span className="brace">: </span>
          <span> " {props.desc} " ,</span>
          <br />
          <span className="text-darkBlue"> url </span>
          <span className="brace">: </span>
          <a href={props.url} className="" target="_blank" rel="noreferrer">
            " {props.url} " ,
          </a>
          <br />
          <span className="text-darkBlue"> github_url </span>
          <span className="brace">: </span>
          <a
            href={props.github}
            className="title"
            target="_blank"
            rel="noreferrer"
          >
            " {props.github} "
          </a>
        </div>
        {`}`}
      </div>
      <div className="img">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
            className="child"
            src={props.image1}
            alt="quiz-app1"
            width="500px"
          />
        </a>
        {props.image2 && (
          <a href={props.url} target="_blank" rel="noreferrer">
            <img
              className="child"
              src={props.image2}
              alt="quiz-app2"
              width="500px"
            />
          </a>
        )}
        {props.image3 && (
          <a href={props.url} target="_blank" rel="noreferrer">
            <img
              className="child"
              src={props.image3}
              alt="quiz-app2"
              width="500px"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
