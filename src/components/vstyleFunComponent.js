import {Col, Row} from "react-bootstrap";
import "../css/vstyle.css";
import React, {useState} from "react";
import VstyleFunFilterGroupComponent from "./vstyleFunFilterGroupComponent";

import maleIcon from "../image/vstyle/male.svg";
import femaleIcon from "../image/vstyle/female.svg";
import tankTopIcon from "../image/vstyle/tanktop.svg";
import tShirtIcon from "../image/vstyle/tshirt.svg";
import shirtIcon from "../image/vstyle/shirt.svg";
import sweaterIcon from "../image/vstyle/sweater.svg";
import suitIcon from "../image/vstyle/suit.svg";
import outwearIcon from "../image/vstyle/outerwear.svg";
import dressIcon from "../image/vstyle/dress.svg";
import solidIcon from "../image/vstyle/solid.svg";
import graphicIcon from "../image/vstyle/graphics.svg";
import floralIcon from "../image/vstyle/floral.svg";
import plaidIcon from "../image/vstyle/plaid.svg";
import spottedIcon from "../image/vstyle/spotted.svg";
import stripedIcon from "../image/vstyle/striped.svg";
import foldedIcon from "../image/vstyle/folded.svg";
import roundIcon from "../image/vstyle/round.svg";
import vshapeIcon from "../image/vstyle/vshape.svg";
import hatIcon from "../image/vstyle/hat.svg";
import glassesIcon from "../image/vstyle/glasses.svg";
import scarfIcon from "../image/vstyle/scarf.svg";
import tieIcon from "../image/vstyle/necktie.svg";

export default function VstyleFunComponent(props) {
    const [activeGender, setActiveGender] = useState(0);
    const [activeSkinColor, setActiveSkinColor] = useState(0);
    const [activeClothingCategory, setActiveClothingCategory] = useState(0);
    const [activeClothingPattern, setActiveClothingPattern] = useState(0);
    const [activeNecklineShape, setActiveNecklineShape] = useState(0);
    const [activeAccessory, setActiveAccessory] = useState([false, false, false, false]);
    const [activeClothingColor, setActiveClothingColor] = useState(0);

    return (
        <Row>
            <Col md={5} style={{paddingRight: "4.8rem"}}>
                <VstyleFunFilterGroupComponent
                    filterName="Gender"
                    align="right"
                    activeFilter={activeGender}
                    setActiveFilter={setActiveGender}
                    filters={[
                        {type: "icon", src: maleIcon, color: "#fff"},
                        {type: "icon", src: femaleIcon, color: "#fff"},
                    ]}
                />
              <VstyleFunFilterGroupComponent
                  filterName="Skin Color"
                  align="right"
                  activeFilter={activeSkinColor}
                  setActiveFilter={setActiveSkinColor}
                  filters={[
                      {type: "fill", src: "none", color: "#ddbe9a"},
                      {type: "fill", src: "none", color: "#d3ab84"},
                      {type: "fill", src: "none", color: "#926b45"},
                  ]}
              />
              <VstyleFunFilterGroupComponent
                  filterName="Clothing Category"
                  align="right"
                  activeFilter={activeClothingCategory}
                  setActiveFilter={setActiveClothingCategory}
                  filters={[
                      {type: "icon", src: tankTopIcon, color: "#fff"},
                      {type: "icon", src: tShirtIcon, color: "#fff"},
                      {type: "icon", src: shirtIcon, color: "#fff"},
                      {type: "icon", src: sweaterIcon, color: "#fff"},
                      {type: "icon", src: suitIcon, color: "#fff"},
                      {type: "icon", src: outwearIcon, color: "#fff"},
                      {type: "icon", src: dressIcon, color: "#fff"},
                  ]}
              />
              <VstyleFunFilterGroupComponent
                  filterName="Clothing Pattern"
                  align="right"
                  activeFilter={activeClothingPattern}
                  setActiveFilter={setActiveClothingPattern}
                  filters={[
                      {type: "icon", src: solidIcon, color: "#fff"},
                      {type: "icon", src: graphicIcon, color: "#fff"},
                      {type: "icon", src: floralIcon, color: "#fff"},
                      {type: "icon", src: plaidIcon, color: "#fff"},
                      {type: "icon", src: spottedIcon, color: "#fff"},
                      {type: "icon", src: stripedIcon, color: "#fff"},
                  ]}
              />
          </Col>
          <Col md={2}>
              <p>"gender " + {activeGender}</p>
              <p>"skin color " + {activeSkinColor}</p>
              <p>"clothing category " + {activeClothingCategory}</p>
              <p>"clothing pattern " + {activeClothingPattern}</p>
              <p>"neckline shape " + {activeNecklineShape}</p>
              {/*<p>"accessory " + {activeAccessory}</p>*/}
              <p>"clothing color " + {activeClothingColor}</p>
          </Col>
          <Col md={5} style={{paddingLeft: "4.8rem"}}>
              <VstyleFunFilterGroupComponent
                  filterName="Neckline Shape"
                  align="left"
                  activeFilter={activeNecklineShape}
                  setActiveFilter={setActiveNecklineShape}
                  filters={[
                      {type: "icon", src: foldedIcon, color: "#fff"},
                      {type: "icon", src: roundIcon, color: "#fff"},
                      {type: "icon", src: vshapeIcon, color: "#fff"},
                  ]}
              />
              <VstyleFunFilterGroupComponent
                  filterName="Accessory"
                  align="left"
                  activeFilter={activeAccessory}
                  setActiveFilter={setActiveAccessory}
                  filters={[
                      {type: "icon", src: hatIcon, color: "#fff"},
                      {type: "icon", src: glassesIcon, color: "#fff"},
                      {type: "icon", src: scarfIcon, color: "#fff"},
                      {type: "icon", src: tieIcon, color: "#fff"},
                  ]}
              />
              <VstyleFunFilterGroupComponent
                  filterName="Clothing Color"
                  align="left"
                  activeFilter={activeClothingColor}
                  setActiveFilter={setActiveClothingColor}
                  filters={[
                      {type: "fill", src: "none", color: "#301015"},
                      {type: "fill", src: "none", color: "#fce5f6"},
                      {type: "fill", src: "none", color: "#ed71ab"},
                      {type: "fill", src: "none", color: "#2db2eb"},
                      {type: "fill", src: "none", color: "#d42e00"},
                      {type: "fill", src: "none", color: "#00a384"},
                      {type: "fill", src: "none", color: "#81ba00"},
                      {type: "fill", src: "none", color: "#58595b"},
                      {type: "fill", src: "none", color: "#fcdd00"},
                      {type: "fill", src: "none", color: "#9b6a39"},
                      {type: "fill", src: "none", color: "#8f74b4"},
                      {type: "fill", src: "none", color: "#f56e14"},
                      {type: "colorful", src: "none", color: "linear-gradient(#fce5f6, #fcdd00, #f56e14, #ed71ab, #d42e00, #81ba00, #00a384, #8f74b4, #2db2eb, #9b6a39, #58595b)"},
                  ]}
              />
          </Col>
      </Row>
    )
}