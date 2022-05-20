import {Col, Row} from "react-bootstrap";
import "../css/vstyle.css";
import React, {useRef, useState, useEffect} from "react";
import * as d3 from "d3";
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

    const maleHeadHTML = '<svg><rect class="part1 malehead-cls-1" x="33.25" y="105.02" width="15.62" height="18.31"/><path id="_Path_" data-name="&lt;Path&gt;" class="part1 malehead-cls-1" d="M2.63,66.13C5.06,73.7,10,73.05,10,73.05L6.6,57.58S.2,58.56,2.63,66.13Z"/><path id="_Path_2" data-name="&lt;Path&gt;" class="part1 malehead-cls-1" d="M79.49,66.13c-2.43,7.57-7.41,6.92-7.41,6.92l3.44-15.47S81.92,58.56,79.49,66.13Z"/><path class="part2 malehead-cls-2" d="M76.06,51.69c0,19.33-10.78,57.24-35.14,57.24S6.06,71,6.06,51.69a35,35,0,0,1,70,0Z"/><path class="part1 malehead-cls-1" d="M40.92,108.93C16.56,108.93,6.06,71,6.06,51.69a35,35,0,0,1,35-35Z"/><path class="malehead-cls-3" d="M74.71,66.55s1.84-16.21,4.71-23.5,3.19-16.7-5.91-19.61c0,0,1.83-11.61-11.36-17.44S40.21-5.3,15.37,9.5c0,0-14.53,9.82-8.5,13.18,0,0-4.67,1.68-3.32,6,0,0-5.87,2.91-1.8,8,0,0-4.22,6.42.45,5.81,0,0-2.71,6,3.16,4.58,0,0,.45,10.55,1,10.85s1.81,9,1.81,9S9.73,57.53,9,51.57c0,0-.15-3.82,5.42-8.25,0,0,6.48-7.71,27.4-10,0,0,17.77-1.42,22.44-3,0,0,1.8,1.69,4.66,7.34,0,0-1.2,10.85,3.17,11.77C72.06,49.43,72,55.7,74.71,66.55Z"/><path class="malehead-cls-3" d="M74.3,69.52S74,84.1,75.93,87.12s-3.8,12.65-7.32,14.3c0,0-7,10.44-12.47,9.34a16.75,16.75,0,0,1-15.89,4.4s-9.87,2.48-14.48-4.12c0,0-10.57-4.12-13.55-10.72A13.76,13.76,0,0,1,6.8,83.82s.81-13.75,1.08-15.67,3,9.52,7.59,14.85a20,20,0,0,0,7.09,5.15,25.75,25.75,0,0,0,.78,5.57c1,2.8,8.44,14.57,14.11.55h7.3S49.9,108,58,94.82l.55-5.5s10.84-6,13.28-12.92Z"/></svg>';
    const maleUpperbodyHTML = '<svg><path class="part2 maleupperbody-cls-1" d="M24.49,107.05H96.36l-.67-59.89s6.18,18.21,9,64.5H120S118,53.46,105.23,17.91c0,0-8.16-17.91-44.5-17.91S15.81,17.6,15.81,17.6,7.19,26.4.8,111.66H16.17s3.34-51.52,9-64.5Z"/><path class="part1 maleupperbody-cls-2" d="M24.8,107.05H60.38L61,0C24.69,0,16.12,17.6,16.12,17.6s-8.62,8.8-15,94.06H16.48s3.33-51.52,9-64.5Z"/><path class="part1 maleupperbody-cls-2" d="M1.65,111.66A7.79,7.79,0,0,0,0,116.47v6.62a7.65,7.65,0,0,0,7.57,7.72,7.65,7.65,0,0,0,7.57-7.72v-4.73l1,2.59a2.29,2.29,0,0,0,4.31-1.53L19.15,116a2.44,2.44,0,0,0-.14-.28h0a13.8,13.8,0,0,0-3.2-4.08H1.65Z"/><path class="part2 maleupperbody-cls-1" d="M119.22,111.66H105a13.86,13.86,0,0,0-3.19,4.08h0a2.44,2.44,0,0,0-.14.28l-1.27,3.4a2.28,2.28,0,0,0,4.3,1.53l1-2.59v4.73a7.57,7.57,0,1,0,15.14,0v-6.62A7.79,7.79,0,0,0,119.22,111.66Z"/></svg>';
    const maleDownbodyHTML = '<svg><path class="part1 maledownbody-cls-1" d="M24.63,133.6a3.49,3.49,0,0,1,.64,0,3.52,3.52,0,0,1,2.29.68A3.47,3.47,0,0,1,29,136.61,4.8,4.8,0,0,1,28,140.14c-.31.41.58,1.59.81,1.83,1.57,1.68,4.37,1.87,6.51,1.89,1,0,2-.05,3-.13.77-.08,1.52-.23,2.28-.38a13.48,13.48,0,0,0,1.67-.52,4.39,4.39,0,0,1,1-.22c-.15-.51-.32-1-.52-1.55v-9.69H24.63Z"/><path class="part2 maledownbody-cls-2" d="M64.36,141.07c-.19.51-.37,1-.52,1.54a4,4,0,0,1,1.2.22,13.48,13.48,0,0,0,1.67.52c.75.15,1.51.3,2.28.38,1,.08,2,.14,3,.13,2.14,0,4.93-.21,6.51-1.89.22-.23,1-1.3.83-1.76l-.1-.07a4.73,4.73,0,0,1-1.05-3.5,3.71,3.71,0,0,1,3.73-3.09,3.19,3.19,0,0,1,.54,0v-4.47H64.36Z"/><path class="maledownbody-cls-3" d="M53.56.1V18.94h5.57l2.72,112.19H84.19l3-123.19A20.77,20.77,0,0,0,88.81,0H53.56Z"/><path class="maledownbody-cls-4" d="M18.3,0a21,21,0,0,0,1.6,7.92l3,123.45H45.27L48,18.94h5.56V.1Z"/><polygon class="maledownbody-cls-5" points="62.97 153.4 62.97 152.85 62.57 152.85 62.57 155.88 107.12 155.88 107.12 152.85 107.12 152.85 107.12 153.4 62.97 153.4"/><path class="maledownbody-cls-6" d="M86.6,135.74c2.45,1.74,12.15,4.74,12.15,4.74a17.16,17.16,0,0,1,1.76.62,3.16,3.16,0,0,1,1.51,3.7c-.57,2.75-7.42,1.88-8.88,1.64a29.53,29.53,0,0,1-11.94-4.85c-.63-.43-1.24-.9-1.84-1.38.19.46-.61,1.53-.83,1.76-1.58,1.68-4.37,1.87-6.51,1.89-1,0-2-.05-3-.13-.77-.08-1.53-.23-2.28-.38a13.48,13.48,0,0,1-1.67-.52,4,4,0,0,0-1.2-.22c-.46,0-.87.19-.87.8v10h44.15v-4.84c0-2.38-1.59-6.06-8.31-8.08,0,0-9.69-3-12.14-4.74a10.72,10.72,0,0,0-4.19-2.14,3.19,3.19,0,0,0-.54,0C83.58,133.61,85.21,134.74,86.6,135.74Z"/><path class="maledownbody-cls-5" d="M93.14,146.44c1.46.24,8.31,1.11,8.88-1.64a3.16,3.16,0,0,0-1.51-3.7,17.16,17.16,0,0,0-1.76-.62s-9.7-3-12.15-4.74c-1.39-1-3-2.13-4.66-2.19a3.71,3.71,0,0,0-3.73,3.09,4.73,4.73,0,0,0,1.05,3.5l.1.07c.6.48,1.21.95,1.84,1.38A29.53,29.53,0,0,0,93.14,146.44Z"/><polygon class="maledownbody-cls-7" points="0.21 153.4 0.21 152.85 0 152.85 0 155.88 44.54 155.88 44.54 152.85 44.34 152.85 44.34 153.4 0.21 153.4"/><path class="maledownbody-cls-8" d="M40.61,143.35c-.76.15-1.51.3-2.28.38-1,.08-2,.14-3,.13-2.14,0-4.94-.21-6.51-1.89-.23-.24-1.12-1.42-.81-1.83A4.8,4.8,0,0,0,29,136.61a3.47,3.47,0,0,0-1.47-2.37,3.52,3.52,0,0,0-2.29-.68,3.43,3.43,0,0,1,2.08.69c2.09,1.49,1.88,4,.43,5.89-.63.51-1.27,1-1.93,1.45a29.58,29.58,0,0,1-11.94,4.85c-1.46.24-8.32,1.11-8.88-1.64a3.18,3.18,0,0,1,1.17-3.49c-4.79,2.09-6,5.17-6,7.25v4.84H44.34v-10c0-.7-.51-.84-1.07-.8a4.39,4.39,0,0,0-1,.22A13.48,13.48,0,0,1,40.61,143.35Z"/><path class="maledownbody-cls-7" d="M5,144.8c.56,2.75,7.42,1.88,8.88,1.64a29.58,29.58,0,0,0,11.94-4.85c.66-.46,1.3-.94,1.93-1.45,1.45-1.89,1.66-4.4-.43-5.89a3.43,3.43,0,0,0-2.08-.69,3.49,3.49,0,0,0-.64,0,10.68,10.68,0,0,0-4.18,2.14C18,137.48,8.3,140.48,8.3,140.48a18,18,0,0,0-1.76.62,1.85,1.85,0,0,0-.34.21A3.18,3.18,0,0,0,5,144.8Z"/></svg>';
    const femaleHeadHTML = '<svg><rect class="part1 femalehead-cls-1" x="30.17" y="105.14" width="15.62" height="18.19"/><path id="_Path_" data-name="&lt;Path&gt;" class="part1 femalehead-cls-1" d="M.55,75.45C3,83,8,82.33,8,82.33L4.52,67S-1.88,67.93.55,75.45Z"/><path id="_Path_2" data-name="&lt;Path&gt;" class="part1 femalehead-cls-1" d="M75.41,75.45C73,83,68,82.33,68,82.33L71.44,67S77.84,67.93,75.41,75.45Z"/><path class="part2 femalehead-cls-2" d="M73,55.15C73,74.35,62.2,112,37.84,112S3,74.35,3,55.15a35,35,0,0,1,70,0Z"/><path class="part1 femalehead-cls-1" d="M37.84,112C13.48,112,3,74.35,3,55.15A34.89,34.89,0,0,1,38,20.38Z"/><path id="_Path_3" data-name="&lt;Path&gt;" class="femalehead-cls-3" d="M14.44,12.68l0,.06h0a28.32,28.32,0,0,0-2.5,11.63c0,.22-3.68,3.56-5.15,6.94-1.17,2.67-3.84,11-4.3,12.34a21.56,21.56,0,0,0-.58,7.41v.1a45,45,0,0,0,1.59,9.64c0,.55,0,1.17,0,1.85,0,.26,0,.52,0,.8s0,.55,0,.84,0,.36,0,.55,0,.56,0,.86c0,.14,0,.29,0,.44v.06c0,.19,0,.39,0,.59s0,.17,0,.26c0,.38,0,.78,0,1.18v.08c0,.09,0,.17,0,.26s0,.17,0,.26,0,.32,0,.47l0,.8c0,.93.06,1.89.1,2.87.07,2.12.17,4.34.27,6.57,0,.83.07,1.66.12,2.49,0,.3,0,.6,0,.89C4.61,89.27,5,95.33,5.59,99c.8,5.31,1.59,10.67,3.27,15.46,1.29,3.72,3.71,4.36,3.71,4.36-.32-1.27-.85-3.58-1.1-4.93A114,114,0,0,1,9.81,98.64c-.05-.93-.09-1.86-.12-2.8,0-.35,0-.71,0-1.06-.08-2.52-.11-5-.11-7.48v0c0-.2,0-.4,0-.6,0-6,.19-11.61.28-16.34.06-2.61.08-4.94.08-6.92,0-1.09,0-2.09,0-3,.86-.37,2.2-.88,3.89-1.42l.72,1,.09.14.08,0,.08.1a1.1,1.1,0,0,1,.09.14l.15,0,.45-.16a3.52,3.52,0,0,0,.45-.18l.84-.42.81-.46c.14-.08.27-.19.4-.28l.39-.29.12-.08-.06-.15c-.06-.18-.12-.37-.2-.56l.95-.24.3.38a1.34,1.34,0,0,1,.11.14l.06,0,.08.1.12.14.14-.06.48-.19a3.15,3.15,0,0,0,.47-.2l.88-.46.73-.48c0,.19.09.39.14.59a1.17,1.17,0,0,0,.05.2,1.25,1.25,0,0,0,.19,0,0,0,0,0,1,0,0c0,.07,0,.14.05.21l.19,0q1.08-.16,2.16-.27c.7-.15,1.4-.27,2.11-.38s1.39-.3,2.09-.42l2.08-.35.22,0a.68.68,0,0,1,0-.14l.69.05,1.28.19c.44.06.88.11,1.31.13l.67,0c.22,0,.45-.06.68-.1l.16,0,0-.19c0-.23,0-.46.09-.68.39,0,.8,0,1.21-.05,0,.24.06.48.1.71l0,.22h.23l0,.2h.21l1.33.1c.44,0,.89.08,1.35.09l.17,0a.84.84,0,0,1,.05-.17c.11-.38.23-.75.34-1.11,1.33.07,2.65.2,4,.36,1.11.27,2.21.58,3.3.92l.23.07q0-.13.06-.24c0-.06,0-.13,0-.19l1.57.31c.54.35,1.09.69,1.65,1s1.14.62,1.73.9c.29.13.59.27.9.38a7.89,7.89,0,0,0,.94.3l.18,0a1,1,0,0,0,.08-.18c.17-.33.33-.66.49-1,4.19,1.2,7,2.39,7.29,2.68a4.44,4.44,0,0,0,1.06-1.21c.08.4.15.8.22,1.21.07.8.1,1.76.12,2.85v.11c0,.12,0,.23,0,.35,0,1.57,0,3.33,0,5.24,0,2.87.12,6.07.22,9.48,0,1.13.07,2.29.1,3.46v.13c0,1.32.07,2.66.1,4,0,.21,0,.43,0,.64,0,3.25.07,6.57,0,9.9,0,.65-.08,2.43-.1,2.94,0,.28-.17,3.26-.28,4.46-.2,2.44-.45,4.83-.82,7.13-.17,1.15-.41,2.27-.6,3.38s-.46,2.17-.74,3.2c-.15.51-.28,1-.42,1.53s2-.8,3.4-4.2c.33-1.1.7-2.23,1-3.39.63-2.33,1.15-4.75,1.63-7.22s.84-5,1.17-7.53c.64-4.92,1.07-9.83,1.44-14.45l0-.39c0-.15,0-.32,0-.49,0-.67.07-1.48.09-2.41s0-1.82,0-2.84c0-.7,0-1.43,0-2.17,0-1.59,0-3.24,0-4.82v-.51c0-.83,0-1.63,0-2.39,0-.23,0-.45,0-.67,0-1.3,0-2.45,0-3.37.66-1.36,1.09-4.92,1-9.48-.12-6.92-1.42-16.16-4.92-23.55-.36-.75-3-3.75-3-4.19,0-3.67-1.9-7.9-4.59-11.72a33.94,33.94,0,0,0-9.45-9.21A30.93,30.93,0,0,0,34.81,0,21.89,21.89,0,0,0,14.44,12.68Z"/></svg>';
    const femaleUpperbodyHTML = '<svg><path class="part2 femaleupperbody-cls-1" d="M24.49,107.05H96.36l-.67-59.89s6.18,18.21,9,64.5H120S118,53.46,105.23,17.91c0,0-8.16-17.91-44.5-17.91S15.81,17.6,15.81,17.6,7.19,26.4.8,111.66H16.17s3.34-51.52,9-64.5Z"/><path class="part1 femaleupperbody-cls-2" d="M24.8,107.05H60.38L61,0C24.69,0,16.12,17.6,16.12,17.6s-8.62,8.8-15,94.06H16.48s3.33-51.52,9-64.5Z"/><path class="part1 femaleupperbody-cls-2" d="M1.65,111.66A7.79,7.79,0,0,0,0,116.47v6.62a7.65,7.65,0,0,0,7.57,7.72,7.65,7.65,0,0,0,7.57-7.72v-4.73l1,2.59a2.29,2.29,0,0,0,4.31-1.53L19.15,116a2.44,2.44,0,0,0-.14-.28h0a13.8,13.8,0,0,0-3.2-4.08H1.65Z"/><path class="part2 femaleupperbody-cls-1" d="M119.22,111.66H105a13.86,13.86,0,0,0-3.19,4.08h0a2.44,2.44,0,0,0-.14.28l-1.27,3.4a2.28,2.28,0,0,0,4.3,1.53l1-2.59v4.73a7.57,7.57,0,1,0,15.14,0v-6.62A7.79,7.79,0,0,0,119.22,111.66Z"/></svg>';
    const femaleDownbodyHTML = '<svg><path id="_Path_" data-name="&lt;Path&gt;" class="part1 femaledownbody-cls-1" d="M25.68,56.27v76.42L13.49,139h0c-5.39,5.33,4,5.65,12.89,3.09a70.58,70.58,0,0,0,15.12-6.73c1.31-.76,2.08-1.27,2.08-1.27V56.31l-17.89.07S25.68,56.3,25.68,56.27Z"/><path id="_Path_2" data-name="&lt;Path&gt;" class="part2 femaledownbody-cls-2" d="M53.06,134.32s.78.51,2,1.26a70.72,70.72,0,0,0,15.15,6.74c8.83,2.55,18.21,2.24,12.94-3L71,133V56.38H53.06Z"/><path class="femaledownbody-cls-3" d="M48.32.1V18.94h3.57l1.17,98.7H71L81,8.94c2.61-1.63,2.6-6.1,2.61-8.94H48.32Z"/><path class="femaledownbody-cls-4" d="M13.07,0c0,2.84,0,7,2.6,8.92l10,108.71,17.91-.15,1.17-98.54h3.56V.1Z"/><path id="_Path_3" data-name="&lt;Path&gt;" class="femaledownbody-cls-5" d="M36.27,148.37a16.71,16.71,0,0,1,1,5.79h4.22c-.39-1.7,1.07-7.34,1.75-9.81.07-.22.12-.41.16-.57C42.35,146.55,38.74,147.72,36.27,148.37Z"/><path id="_Path_4" data-name="&lt;Path&gt;" class="femaledownbody-cls-6" d="M26.39,142.12c-8.87,2.56-18.28,2.24-12.89-3.09h0s-1.47.72-3.38,1.76l-1,.57a32.84,32.84,0,0,0-7.07,5c-3,3.2-4.55,11.56,8.92,8.8h0c1.44-.3,2.81-.6,4.13-.9,11-2.47,17.57-4.89,19.54-5.44h0l1.62-.41c2.47-.65,6.08-1.82,7.09-4.59a4.27,4.27,0,0,0,.18-.61h0a30.19,30.19,0,0,0,.05-9s-.77.51-2.08,1.27A70.58,70.58,0,0,1,26.39,142.12Z"/><path id="_Path_5" data-name="&lt;Path&gt;" class="femaledownbody-cls-5" d="M53.28,144l.18.63c.68,2.51,2.12,8.07,1.74,9.75h4.22a16.44,16.44,0,0,1,1-5.79C57.9,147.92,54.29,146.76,53.28,144Z"/><path id="_Path_6" data-name="&lt;Path&gt;" class="femaledownbody-cls-7" d="M70.26,142.32a70.72,70.72,0,0,1-15.15-6.74c-1.27-.75-2-1.24-2-1.26h0a30.19,30.19,0,0,0,.05,9l0,.15c0,.16.09.32.13.47,1,2.78,4.62,3.94,7.1,4.59L62,149a209.48,209.48,0,0,0,23.67,6.34c13.47,2.76,11.89-5.59,8.92-8.8-1.63-1.76-4.91-3.78-7.56-5.25l0,0c-2.16-1.2-3.86-2-3.86-2l0,.05C88.47,144.56,79.09,144.87,70.26,142.32Z"/></svg>';

    const glyphRef = useRef();

    useEffect(() => {
        const glyph = d3.select(glyphRef.current);

        glyph.append("div").attr("class", "head head-position");
        glyph.append("div").attr("class", "upperbody upperbody-position");
        glyph.append("div").attr("class", "downbody downbody-position");

        d3.select(".head").html(() => (activeGender === 0 ? maleHeadHTML : femaleHeadHTML));
        d3.select(".upperbody").html(() => (activeGender === 0 ? maleUpperbodyHTML : femaleUpperbodyHTML));
        d3.select(".downbody").html(() => (activeGender === 0 ? maleDownbodyHTML : femaleDownbodyHTML));

        const glyphData = [
            {
                component: ".head",
                element: ".head svg",
            },
            {
                component: ".upperbody",
                element: ".upperbody svg",
            }
        ];

        glyphData.map((obj) => {
            const svgSize = d3.select(obj.element).node().getBBox();
            const temp= {
                ...obj,
                size: (svgSize)
            };
            // console.log(temp);
            return temp;
        });

        console.log(glyphData);
        // const headSVGSize = d3.select(".head svg").node().getBBox();
        // const headSize = d3.select(".head").selectAll("*").node().getBBox();
        // const upperbodySVGSize = d3.select(".upperbody svg").node().getBBox();
        // const upperbodySize = d3.select(".upperbody").selectAll("*").node().getBBox();
        // const downbodySVGSize = d3.select(".downbody svg").node().getBBox();
        // const downbodySize = d3.select(".downbody").selectAll("*").node().getBBox();

        // d3.selectAll(".head svg").attr("width", headSVGSize.width * 1.1)
        //     .attr("height", headSVGSize.height * 1.1)
        //     .attr("viewBox", "0 0 " + headSVGSize.width + " " + headSVGSize.height);
        //
        // d3.selectAll(".head").style("width", headSize.width * 1.1 + "px")
        //     .style("height", headSize.height * 1.1 + "px");

        // d3.selectAll(".upperbody svg").attr("width", upperbodySVGSize.width * 1.1)
        //     .attr("height", upperbodySVGSize.height * 1.1)
        //     .attr("viewBox", "0 0 " + upperbodySVGSize.width + " " + upperbodySVGSize.height);
        //
        // d3.selectAll(".upperbody").style("width", upperbodySize.width * 1.1 + "px")
        //     .style("height", upperbodySize.height * 1.1 + "px");
        //
        // d3.selectAll(".downbody svg").attr("width", downbodySVGSize.width * 1.1)
        //     .attr("height", downbodySVGSize.height * 1.1)
        //     .attr("viewBox", "0 0 " + downbodySVGSize.width + " " + downbodySVGSize.height);
        //
        // d3.selectAll(".downbody").style("width", downbodySize.width * 1.1 + "px")
        //     .style("height", downbodySize.height * 1.1 + "px");
    }, [activeGender]);



    return (
        <Row>
            <Col md={4} style={{paddingRight: "4.8rem"}}>
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
          <Col md={4}>
              <div ref={glyphRef} className="glyph"></div>
              <p>"gender " + {activeGender}</p>
              <p>"skin color " + {activeSkinColor}</p>
              <p>"clothing category " + {activeClothingCategory}</p>
              <p>"clothing pattern " + {activeClothingPattern}</p>
              <p>"neckline shape " + {activeNecklineShape}</p>
              {/*<p>"accessory " + {activeAccessory}</p>*/}
              <p>"clothing color " + {activeClothingColor}</p>
          </Col>
          <Col md={4} style={{paddingLeft: "4.8rem"}}>
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