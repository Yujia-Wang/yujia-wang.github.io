import "../css/index.css";
import SidebarComponent from "../components/sidebarComponent";
import AboutIntroComponent from "../components/aboutIntroComponent";
import FooterComponent from "../components/footerComponent";

function DrChrono() {
    return (
        <div>
            <SidebarComponent />
            <div className="content-wrapper">

                <FooterComponent />
            </div>
        </div>
    );
}

export default DrChrono;
