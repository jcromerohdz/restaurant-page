import { navBar } from "./header";
import { menu } from "./menu";
import { contactUs } from "./contact";
import { home } from "./home";
console.log("Import home");

let content = document.getElementById('content');


// console.log(typeof(sectionTag));
// home();
content.appendChild(navBar());
let sectionTag = document.getElementById('sectionTag');

// home(sectionTag);
// content.appendChild(sectionTag);

// content.appendChild(navBar);
// navBar();
// let sectionTag = document.getElementById('sectionTag');
// home(sectionTag);


  // let contentDiv = document.getElementById('content');
  //
  // const homePage = document.getElementById('homePage');
  // console.log(homePage);
  const menuPage =  document.getElementById('menuPage');
  console.log(menuPage);
  // const contactPage =  document.getElementById('contactPage');
  // console.log(contactPage);
  //
  home(sectionTag);
  const homeDisplay = (event) =>{
    alert("Home Page!");
    document.getElementById("sub-content").innerHTML="";
    // console.log(cleanContent2);
    // cleanContent2.innerHTML = "";
    // console.log(cleanContent2);
    // cleanContent.innerHTML = "";
    // home(sectionTag);
  }

  const menuDisplay = (event) =>{
    alert("Menu Page!");
    let cleanContent = document.querySelector(".hero-body");
    console.log(cleanContent);
    cleanContent.innerHTML = "";
    menu(sectionTag);
  }

  const contactDisplay = (event) =>{
    alert("Contact Page!");
    // contentDiv.innerHTML = "";
    // contactUs();
  }

  homePage.addEventListener("click", homeDisplay);
  menuPage.addEventListener("click", menuDisplay);
  contactPage.addEventListener("click", contactDisplay);
