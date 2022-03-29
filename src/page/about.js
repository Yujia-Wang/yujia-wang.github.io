import "../css/index.css";
import SidebarComponent from "../components/sidebarComponent";
import AboutIntroComponent from "../components/aboutIntroComponent";
import FooterComponent from "../components/footerComponent";
import ScrollToTopComponent from "../components/scrollToTopComponent";

function About() {
  return (
      <div>
          <ScrollToTopComponent />
          <SidebarComponent />
          <div className="content-wrapper">
              <AboutIntroComponent />
              <FooterComponent />
          </div>
      </div>
  );
}

export default About;
