import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTopComponent = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
};

export default ScrollToTopComponent;