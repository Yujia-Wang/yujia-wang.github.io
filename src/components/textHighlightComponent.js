import "../css/index.css";
import "../css/App.css";
import {useEffect, useRef, useState} from "react";

export default function TextHighlightComponent(props) {
    const highlightTextRef = useRef(null);
    const [inPosition, setActive] = useState(false);

    useEffect(() => {

        function highlight() {

            let scroll = window.pageYOffset;
            let height = window.outerHeight;

            let pos = highlightTextRef.current.offsetTop;
            let bounds = pos + highlightTextRef.current.offsetHeight;

            if (scroll + height >= bounds) {
                setActive(true);
            }
            else {
                setActive(false);
            }

        }

        window.addEventListener("scroll", highlight);

        return () => {
            window.removeEventListener("scroll", highlight);
        }
    }, []);

    return (
        <span className={"highlight " + (inPosition ? "highlight-active" : "")} ref={highlightTextRef} style={{backgroundImage: props.color}}>
            {props.text}
        </span>
    );
}