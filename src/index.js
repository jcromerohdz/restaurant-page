import { navBar } from "./header";
import { bodyContent } from "./body";
import { menu } from "./menu";
import { contactUs } from "./contact";
import { home } from "./home";


let content = document.getElementById('content');
const headerHero = document.createElement('header');
headerHero.classList.add('hero-body');
headerHero.id = "sub-content";

content.appendChild(navBar());
let sectionTag = document.getElementById('sectionTag');
sectionTag.appendChild(headerHero);

const homePage = document.getElementById('homePage');
const menuPage =  document.getElementById('menuPage');
const contactPage =  document.getElementById('contactPage');

home(sectionTag);

const clearContent = () =>{
  let cleanContent = document.getElementById("sub-content");
  cleanContent.innerHTML = "";
  return cleanContent;
}

const homeDisplay = (event) =>{
  clearContent();
  sectionTag.childNodes[1].appendChild(bodyContent());
}

const menuDisplay = (event) =>{
  clearContent();
  sectionTag.childNodes[1].appendChild(menu());
}

const contactDisplay = (event) =>{
  // alert("Contact Page!");
  clearContent();
  sectionTag.childNodes[1].appendChild(contactUs());
}


homePage.addEventListener("click", homeDisplay);
menuPage.addEventListener("click", menuDisplay);
contactPage.addEventListener("click", contactDisplay);
