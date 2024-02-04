import React from "react";

const Education = (props) =>{
   return (
    <div className={`mainContainerExp ${props.isNightMode? "nightMode": "dayMode"}`}>
    <div className="titleContainer">
      <div className="company">
        <img src={props.src} className="compImg"/>
        <div className="nameNrole">
        <p className="compName edu">{props.companyName}</p>
        <p className="normalText">{props.role}</p>
        </div>
      </div>
      <div className="fromTo">
        <p className="fromToText">{props.fromTo}</p>
        <p className="locationText">{props.location}</p>
      </div>
    </div>
  </div>
   )
}

export default Education