import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTopComponent from "./components/scrollToTopComponent";
import Home from "./page/home";
import About from "./page/about";
import Vstyle from "./page/vstyle";
import FoodEx from "./page/foodex";
import FittingEasy from "./page/fittingeasy";
import DrChrono from "./page/drchrono";


function App() {
  return (
      <BrowserRouter>
          <ScrollToTopComponent>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="drchrono" element={<DrChrono />} />
                  <Route path="foodex" element={<FoodEx />} />
                  <Route path="vstyle" element={<Vstyle />} />
                  <Route path="fittingeasy" element={<FittingEasy />} />
              </Routes>
          </ScrollToTopComponent>
      </BrowserRouter>
  );
}

export default App;
