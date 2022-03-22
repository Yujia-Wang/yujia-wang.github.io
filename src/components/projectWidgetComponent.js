import React from "react";
import "../css/index.css";
import "../css/App.css";

export default function projectWidgetComponent(props) {
    return (
        <img className="project-container" src={props.imgSource} alt={props.altText} />
    );
}
