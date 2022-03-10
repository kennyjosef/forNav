import React from "react";
import "./style.css";
function Button(props){
  
    return(
        <button className="button" onClick={props.handleClick}>
          See All
        </button>

    );
}
export default Button
  