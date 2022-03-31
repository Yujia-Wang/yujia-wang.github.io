import "../css/index.css";
import "../css/App.css";
import {useEffect, useRef} from "react";

export default function TextHighlightComponent(props) {
    const test = useRef(null);

    useEffect(() => {
        const highlightText = Array.from(test);

        function highlight() {

            let scroll = window.scrollTop;
            let height = window.height;

            highlightText.forEach((element) => {
                // let pos = element.offset().top;
                // let bounds = pos + element.outerHeight();

                // console.log(element);
                // if (scroll + height >= bounds) {
                //     highlightText.className = "highlight highlight-active";
                // }
                // else {
                //     highlightText.className = "highlight";
                // }
            });

        }

        window.addEventListener("scroll", highlight);

        return () => {
            window.removeEventListener("scroll", highlight);
        }
    }, []);

    return (
        <span className="highlight" ref={test} style={{backgroundImage: props.color}}>
            {props.text}
        </span>
    );
}