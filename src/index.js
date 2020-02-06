import { home } from "./home";
import { menu } from "./menu";
import { contactUs } from "./contact";
console.log("Import home");


  home();
  let contentDiv = document.getElementById('content');

  const homePage = document.getElementById('homePage');
  console.log(homePage);
  const menuPage =  document.getElementById('menuPage');
  console.log(menuPage);
  const contactPage =  document.getElementById('contactPage');
  console.log(contactPage);

  const homeDisplay = (event) =>{
    contentDiv.innerHTML = "";
    home();
  }

  const menuDisplay = (event) =>{
    alert("Menu Page!");
    contentDiv.innerHTML = "";
    menu();
  }

  const contactDisplay = (event) =>{
    alert("Contact Page!");
    contentDiv.innerHTML = "";
    contactUs();

  }

  homePage.addEventListener("click", homeDisplay);
  menuPage.addEventListener("click", menuDisplay);
  contactPage.addEventListener("click", contactDisplay);
