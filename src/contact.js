import { navBar } from "./header";

export let contact = () => {
  let containerDiv = document.getElementById("content");
  const sectionTag = document.createElement("section");
  sectionTag.classList.add("hero", "is-fullheight");
  sectionTag.appendChild(navBar());
  
  containerDiv.appendChild(sectionTag);
}
