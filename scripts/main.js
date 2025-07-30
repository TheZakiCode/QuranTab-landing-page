import {clickLabelEvent, observeElements} from "./utils.js";

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");




// labelElements.forEach((item) => clickLabelEvent()); ======> /* الطريقه الأولي */
labelElements.forEach(clickLabelEvent); /*الطريقة الثانيه  */
observeElements(sectionElements);

