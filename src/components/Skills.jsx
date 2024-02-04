import React from "react";
import "../component css/Skills.css";

const Skills = (props) => {
  return (
    <div className={`skills ${props.isNightMode ? "nightMode" : "dayMode"}`}>
        <p className="skillTitle"> 
          {props.title}</p>
          <ul>
            {props.list.map((items) => {
              return <li key={items.id}>{items.s}</li>;
            })}
          </ul>
    </div>
  );
};

export default Skills;
