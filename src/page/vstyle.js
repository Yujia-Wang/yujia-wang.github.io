import "../css/index.css";
import SidebarComponent from "../components/sidebarComponent";
import AboutIntroComponent from "../components/aboutIntroComponent";
import FooterComponent from "../components/footerComponent";

function Vstyle() {
  return (
      <div>
          <SidebarComponent />
          <div className="content-wrapper">
              <AboutIntroComponent />
              <FooterComponent />
          </div>
      </div>
  );
}

export default Vstyle;
