import { navBar } from "./header";
import { bodyContent } from "./body";
import { footerContent } from "./footer";

const home = () => {
  let containerDiv = document.getElementById("content");
  const sectionTag = document.createElement("section");
  sectionTag.classList.add("hero", "is-fullheight");
  console.log(typeof(sectionTag));

  sectionTag.appendChild(navBar());
  sectionTag.appendChild(bodyContent());
  sectionTag.appendChild(footerContent());
  containerDiv.appendChild(sectionTag);
  // containerDiv.innerHTML = sectionTag;
  // console.log(containerDiv);

  //   console.log(containerDiv);
};


document.addEventListener("DOMContentLoaded", () => {
  // code here
  home();
});
