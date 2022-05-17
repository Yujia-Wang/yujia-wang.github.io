import React from "react";
import "../css/index.css";


export default function ProblemBlockComponent(props) {
    return (
        <div className="problem-block">
           <p className="problem-text1">So...</p>
           <h4 className="problem-text2">{props.text}</h4>
        </div>
    );
}