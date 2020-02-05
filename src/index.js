import { homeT } from "./home";
console.log("Import home");
console.log(homeT);

homeT();
// document.addEventListener("DOMContentLoaded", () => {
//   home();
//   console.log("somenting")
// });

const navBarHeader = document.getElementById('navBar');
console.log(navBarHeader);

// export let test = () =>{
//
// };



const contentDisplay = (event) =>{
  console.log(event.target.textContent);

}


//navBarHeader.addEventListener(click, contentDisplay);
