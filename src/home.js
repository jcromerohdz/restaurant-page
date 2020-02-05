import { navBar } from "./header";
import { bodyContent } from "./body";
import { footerContent } from "./footer";
console.log("loading home...");
export const homeT = () => {
  console.log("Entering Home");
  let containerDiv = document.getElementById("content");
  const sectionTag = document.createElement("section");
  sectionTag.classList.add("hero", "is-fullheight");
  // console.log(typeof(sectionTag));

  sectionTag.appendChild(navBar());
  sectionTag.appendChild(bodyContent());
  sectionTag.appendChild(footerContent());
  containerDiv.appendChild(sectionTag);
  // containerDiv.innerHTML = sectionTag;
  // console.log(containerDiv);

  //   console.log(containerDiv);
  console.log("Exiting Home");
  return containerDiv
};

// export default {homeT};


// document.addEventListener("DOMContentLoaded", () => {
//   home();
// });
