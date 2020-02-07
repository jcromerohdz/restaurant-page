export const navBar = () => {
  const sectionTag = document.createElement("section");
  sectionTag.classList.add("hero", "is-fullheight");
  sectionTag.id = "sectionTag";
  const divHeroHead = document.createElement('div');
  divHeroHead.classList.add('hero-head');
  let divNav = document.createElement("div");
  divNav.classList.add("columns", "is-mobile", "is-marginless", "heading", "has-text-weight-bold", "subtitle", "is-6");
  divNav.id="navBar";

  const divLeft = document.createElement("div");
  divLeft.classList.add("column", "left");
  const pNavItem1 = document.createElement("p");
  pNavItem1.classList.add("navbar-item", "has-text-black");
  const pNavItemContent1 = document.createTextNode("La Delicia!");
  pNavItem1.id="homePage";
  pNavItem1.appendChild(pNavItemContent1);
  divLeft.appendChild(pNavItem1);

  const divCenter = document.createElement("div");
  divCenter.classList.add("column", "center");
  const pNavItem2 = document.createElement("p");
  pNavItem2.classList.add("navbar-item", "has-text-black");
  const pNavItemContent2 = document.createTextNode("Menu");
  pNavItem2.id = "menuPage"
  pNavItem2.appendChild(pNavItemContent2);
  divCenter.appendChild(pNavItem2);

  const pNavItem3 = document.createElement("p");
  pNavItem3.classList.add("navbar-item", "has-text-black");
  const pNavItemContent3 = document.createTextNode("Contact Us");
  pNavItem3.appendChild(pNavItemContent3);
  pNavItem3.id = "contactPage";
  divCenter.appendChild(pNavItem3);

  const divRight = document.createElement("div");
  divRight.classList.add("column", "right");
  const pNavItem5 = document.createElement("p");
  pNavItem5.classList.add("navbar-item", "has-text-white");
  divRight.appendChild(pNavItem5);

  const pNavItem6 = document.createElement("p");
  pNavItem6.classList.add("navbar-item", "has-text-white");
  divRight.appendChild(pNavItem6);

  divNav.appendChild(divLeft);
  divNav.appendChild(divCenter);
  divNav.appendChild(divRight);
  divHeroHead.appendChild(divNav);

  sectionTag.appendChild(divHeroHead);

  return sectionTag;
};
