import { navBar } from "./header";

export const menu = () => {
  console.log("Entering Menu");
  let containerDiv = document.getElementById("content");
  const sectionTag = document.createElement("section");
  sectionTag.classList.add("hero", "is-fullheight");

  const headerHero = document.createElement('header');
  headerHero.classList.add('hero-body');
  const textContainer =  document.createElement('div');
  textContainer.classList.add("is-overlay", "has-text-centered", "single-spaced");
  textContainer.style.top= "150px";

  const textTitle = document.createElement('h1');
  textTitle.classList.add("subtitle", "is-3", "has-text-weight-light", "has-text-white");
  const textContent1 = document.createTextNode("Restauran");
  textTitle.appendChild(textContent1);
  textContainer.appendChild(textTitle);

  const textSubtitle = document.createElement('h2');
  textSubtitle.classList.add("title", "is-1", "has-text-white")
  const textContent2 = document.createTextNode("Our Menu");
  textSubtitle.appendChild(textContent2);
  textContainer.appendChild(textSubtitle);

  headerHero.appendChild(textContainer);
  sectionTag.appendChild(navBar());
  sectionTag.appendChild(headerHero);

  containerDiv.appendChild(sectionTag);
};
