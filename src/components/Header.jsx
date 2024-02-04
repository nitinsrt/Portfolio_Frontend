import React, { useState } from "react";
import "../component css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = (props) => {
  const [isNightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!isNightMode);
    props.toggleState(!isNightMode);
  };

  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div
      className={`header custom-component ${
        isNightMode ? "night-mode" : "day-mode"
      } `}
    >
      <div className="mainContainer">
        <div className="leftContainer">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            <p className="headerElement">My Portfolio</p>
          </Link>
        </div>
        <div className="rightContainer">
          <div className={``}>
            <label className="switch">
              <input type="checkbox" onChange={toggleNightMode} />
              <span className="slider round"></span>
            </label>
          </div>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            <p className="headerElement">Experience</p>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            <p className="headerElement">Projects</p>
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            <p className="headerElement">Education</p>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleClick}
          ><p className="headerElement">Skills</p></Link>
          <Link
            to="hobbies"
            smooth={true}
            duration={500}
            onClick={handleClick}
          ><p className="headerElement">Hobbies</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
