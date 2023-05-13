import React from "react";
import "../css/index.css";


export default function ProblemBlockComponent(props) {
    return (
        <div className="problem-block">
           <p className="problem-text1">{props.title}</p>
            {props.text.map((content, index) => (
                <h4 className="problem-text2" key={index}>
                    {content}
                </h4>
            ))}
        </div>
    );
}