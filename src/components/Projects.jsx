import React from "react";
import "../component css/Projects.css"

const Projects = (props) => {
  return (
    <div className={`proContainer ${props.isNightMode? "nightMode": "dayMode"}`}>
      <div className="proFirstLine">
        <div className="proTitle">
          <p className="proTitleText">{props.title}</p>
          <a href={props.url} className={`normalText ${props.isNightMode ? "projectLinkNight" : "projectLinkDay"}`}>{props.githubText}</a>
        </div>
        <div className="proDates">
          <p className="normalText dates">{props.dates}</p>
        </div>
      </div>
      <div className="proDesc">
        <ul>
          <li>{props.lineOne}</li>
          <li>{props.lineTwo}</li>
          <li>{props.lineThree}</li>
          {props.lineFour && <li>{props.lineFour}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
