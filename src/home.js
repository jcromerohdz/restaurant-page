import { navBar } from "./header";

const home = () => {
  let containerDiv = document.getElementById("content");
  const sectionTag = document.createElement("section");
  sectionTag.classList.add("hero", "is-fullheight");
  console.log(typeof(sectionTag));

  //   console.log(sectionTag.setAttribute("class", "hero is-fullheight"));
  //   console.log(navBar());
  sectionTag.appendChild(navBar());

  containerDiv.appendChild(sectionTag);
  // containerDiv.innerHTML = sectionTag;
  // console.log(containerDiv);

  //   console.log(containerDiv);
};

document.addEventListener("DOMContentLoaded", () => {
  // code here
  home();
});
