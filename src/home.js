import { bodyContent } from "./body";
import { footerContent } from "./footer";

export const home = (sectionTag) => {
  let containerDiv = document.getElementById("content");
  sectionTag.childNodes[1].appendChild(bodyContent());
  sectionTag.appendChild(footerContent());
  containerDiv.appendChild(sectionTag);
  return containerDiv
};
