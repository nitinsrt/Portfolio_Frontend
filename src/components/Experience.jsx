import React from "react";
import "../component css/Experience.css"


const Experience = (props) => {
  return (
  <div className={`mainContainerExp ${props.isNightMode? "nightMode": "dayMode"}`}>
    <div className="titleContainer">
      <div className="company">
        <img src={props.src} className="compImg"/>
        <div className="nameNrole">
        <p className="compName">{props.companyName}</p>
        <p className="normalText">{props.role}</p>
        </div>
      </div>
      <div className="fromTo">
        <p className="fromToText">{props.fromTo}</p>
        <p className="locationText">{props.location}</p>
      </div>
    </div>
    <div className="workExp">
        <ul>
        <li>{props.lineOne}</li>
        <li>{props.lineTwo}</li>
        <li>{props.lineThree}</li>
        {props.lineFour &&
        <li>{props.lineFour}</li>}
        </ul>
    </div>
  </div>
  )
};

export default Experience;
