import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopComponent = ({children}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 30);

    }, [pathname]);

    return children;
};

export default ScrollToTopComponent;