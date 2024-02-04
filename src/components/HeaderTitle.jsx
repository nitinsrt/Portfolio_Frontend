import React from "react";
import "../component css/HeaderTitle.css"

const HeaderTitle = (props)=>{
    return(
       <div className="titleContainerMain push-text">
           <p className="titleText">{props.title}</p>
       </div>
    )
}

export default HeaderTitle;