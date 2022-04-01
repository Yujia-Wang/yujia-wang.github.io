import "../css/index.css";
import "../css/App.css";
import {useEffect, useRef, useState} from "react";

export default function TextHighlightComponent(props) {
    const highlightTextRef = useRef(null);
    const [highlightColor, setColor] = useState(null);
    const [inPosition, setActive] = useState(false);

    if (props.color = "vstyle" ) {
        setColor("linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 0.1) 50%)");
    }

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
        <span
            className={"highlight " + (inPosition ? "highlight-active" : "")}
            ref={highlightTextRef}
            style={{backgroundImage: highlightColor}}
        >
            {props.text}
        </span>
    );
}