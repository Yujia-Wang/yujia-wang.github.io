import React, { useRef, useEffect } from "react";
import "../css/index.css";
import "../css/App.css";
import homePageDesign from "../image/home/homepage-design.svg";
import homePageCode from "../image/home/homepage-code.svg";

export default function ImgCompareImgComponent() {
    const imgDesignRef = useRef(null);
    const imgCodeRef = useRef(null);
    const imgCodeContainerRef = useRef(null);

    useEffect(() => {
        // let i;
        //
        // for (i = 0; i < imgCodeContainerRef.current.length; i++) {
        //     compareImages(imgCodeContainerRef[i]);
        // }

        function compareImages(event) {
            let imgDesignWidth = imgDesignRef.current.width;

            imgCodeRef.current.width = imgDesignWidth;

            // let w;

            // w = imgCodeContainerRef.current.width;
            //
            // imgCodeContainerRef.current.width = (w / 2) + "px";

            let currentMousePos = { x: -1, y: -1 };
            let a, x = 0;

            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;

            a = imgCodeContainerRef.current.getBoundingClientRect();

            x = currentMousePos.x - a.left;

            if (x < 0) { x = 0; }
            // if (x > w) { x = w; }

            imgCodeContainerRef.current.width = x;

            console.log(imgCodeContainerRef);

            // console.log(currentMousePos.x, currentMousePos.y);
        }

        document.addEventListener("mousemove", compareImages);

        return () => document.removeEventListener("mousemove", compareImages)
    }, []);

    return (
        <div className="img-comp-img-container">
            <div className="img-comp-img">
                <img id="homepage-design" ref={imgDesignRef} src={homePageDesign} width="100%" alt="bobo design"></img>
            </div>
            <div ref={imgCodeContainerRef} className="img-comp-img img-comp-overlay">
                <img id="homepage-code" ref={imgCodeRef} src={homePageCode} width="100%" alt="bobo code"></img>
            </div>
        </div>
    );
}