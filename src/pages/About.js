import React from "react";
import profilePic from "../assets/profile.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import downArrow from "../assets/DownArrow.svg";
import rightArrow from "../assets/RightArrow.svg";
import Card from "../components/Card";
import SkillsCard from "../components/SkillsCard";
import ToTop from "../components/ToTop";
import { Link, NavLink } from "react-router-dom";

function About(props) {
  return (
    <>
    <div id="about" className="about">
      <div className="profile-card">
        <img className="profile-pic" src={profilePic} alt="profile-pic" />
        <div className="profile-name name">Bijesh Singha</div>
        <div className="card-bottom">
          <a
            href="https://github.com/bijeshsingha"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={github} alt="github" width="20px" />
          </a>
          <a
            href="https://www.linkedin.com/in/bijesh-singha-89a634159/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={linkedin} alt="github" width="20px" />
          </a>
          <a
            href="https://www.instagram.com/bijeshsingha8/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={insta} alt="github" width="20px" />
          </a>
        </div>
      </div>
      <div className="about_content">
        <div className="title black center">
          <span className="brace">let</span> about_me;
        </div>
        <span className="normal-text">
          I am currently learning web development and I am really enjoying it. I
          love the challenge of learning new things and improving my skills. I
          am always looking for new challenges and ways to improve my abilities.
        </span>
        <span className="normal-text">
          I am a Mechanical Engineer by degree, and I had worked in an IT
          company as a QA Engineer for 2 years and also developing my frontend
          development skills alongside. I have acquired skills in HTML, CSS,
          React, JavaScript. And building projects to level up my skills to
          create more efficient and functional interface.
        </span>
        <a className="button" href="#experience-card" rel="noreferrer">
          <img src={downArrow} alt="down arrow" width="70px" />
        </a>

        <div id="experience-card" className="experience-card">
          <span className="title black">Work Experience</span>
          <Card
            period="July 2021 - Oct 2021"
            company="Larsen & Toubro Infotech Ltd."
            desg="Graduate Engineering Trainee"
            location="Mumbai"
          />
          <Card
            period="Oct 2021 - Present"
            company="Larsen & Toubro Infotech Ltd."
            desg="QA Engineer"
            location="Chennai"
          />
        </div>
        <div id="education-card" className="experience-card">
          <span className="title black">Education</span>
          <Card
            period="2017 - 2021"
            company="National Institute of Technology Silchar"
            desg="Bachelor of Technology, Mechanical Engineering"
            location="Silchar, Assam"
          />
          <Card
            period="2008 - 2017"
            company="Gurukul Grammar Senior Secondary School"
            desg="Middle School and Higher Secondary"
            location="Guwahati, Assam"
          />
          <Card
            period="2003 - 2008"
            company="KV, Dholchera"
            desg="Pre School"
            location="Cachar, Assam"
          />
        </div>
        <div id="education-card" className="experience-card">
          <span className="title black">Skillset</span>
          <SkillsCard
            skills={[
              "HTML",
              "CSS",
              "React",
              "JavaScript",
              "Java",
              "C/C++",
              "OOPs",
            ]}
          />
          <div className="about-buttons">
            <NavLink
              to="/projects"
              className="hire-me"
            >
              <span className="title">Projects</span>
              <img className="buttonIcon" src={rightArrow} alt="right arrow" width="40px" />
            </NavLink>
            <NavLink to="/contact" className="hire-me">
              <span className="title">Hire me</span>
              <img className="buttonIcon" src={rightArrow} alt="right arrow" width="40px" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    <ToTop />
    </>
  );
}

export default About;
