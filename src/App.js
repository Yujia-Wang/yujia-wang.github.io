import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTopComponent from "./components/scrollToTopComponent";
import Home from "./page/home";
import About from "./page/about";
import Vstyle from "./page/vstyle";


function App() {
  return (
      <BrowserRouter>
          {/*<ScrollToTopComponent>*/}
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="vstyle" element={<Vstyle />} />
              </Routes>
          {/*</ScrollToTopComponent>*/}
      </BrowserRouter>
  );
}

export default App;
