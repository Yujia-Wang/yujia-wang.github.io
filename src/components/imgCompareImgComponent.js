import React, { useRef, useEffect } from "react";
import "../css/index.css";
import "../css/App.css";
import homePageDesign from "../image/home/homepage-design.svg";
import homePageCode from "../image/home/homepage-code.svg";

export default function ImgCompareImgComponent() {
    const imgDesignRef = useRef(null);
    const imgCodeRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousemove", compareImages(imgCodeRef))

        function compareImages(event, img) {
            let currentMousePos = { x: -1, y: -1 };
            let a, x = 0;

            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;

            a = img.getBoundingClientRect();

            x = currentMousePos.x - a.left;

            console.log(currentMousePos.x, currentMousePos.y);
        }

        return () => document.removeEventListener("mousemove", compareImages(imgCodeRef))
    }, []);

    return (
        <div className="img-comp-img-container">
            <div className="img-comp-img">
                <img id="homepage-design" ref={imgDesignRef} src={homePageDesign} width="100%" alt="bobo design"></img>
            </div>
            <div className="img-comp-img img-comp-overlay">
                <img id="homepage-code" ref={imgCodeRef} src={homePageCode} width="100%" alt="bobo code"></img>
            </div>
        </div>
    );
}