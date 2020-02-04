export let navBar = () => {
  const divHeroHead = document.createElement('div');
  divHeroHead.classList.add('hero-head');
  let divNav = document.createElement("div");
  divNav.classList.add("columns", "is-mobile", "is-marginless", "heading", "has-text-weight-bold", "subtitle", "is-6");

  const divLeft = document.createElement("div");
  divLeft.classList.add("column", "left");
  const pNavItem1 = document.createElement("p");
  pNavItem1.classList.add("navbar-item", "has-text-white");
  const pNavItemContent1 = document.createTextNode("La Delicia!");
  pNavItem1.appendChild(pNavItemContent1);
  divLeft.appendChild(pNavItem1);

  const divCenter = document.createElement("div");
  divCenter.classList.add("column", "center");
  const pNavItem2 = document.createElement("p");
  pNavItem2.classList.add("navbar-item", "has-text-white");
  const pNavItemContent2 = document.createTextNode("Menu");
  pNavItem2.appendChild(pNavItemContent2);
  divCenter.appendChild(pNavItem2);

  const pNavItem3 = document.createElement("p");
  pNavItem3.classList.add("navbar-item", "has-text-white");
  const pNavItemContent3 = document.createTextNode("Contact Us");
  pNavItem3.appendChild(pNavItemContent3);
  divCenter.appendChild(pNavItem3);

  const pNavItem4 = document.createElement("p");
  pNavItem4.classList.add("navbar-item", "has-text-white");
  const pNavItemContent4 = document.createTextNode("Orders");
  pNavItem4.appendChild(pNavItemContent4);
  divCenter.appendChild(pNavItem4);

  const divRight = document.createElement("div");
  divRight.classList.add("column", "right");
  const pNavItem5 = document.createElement("p");
  pNavItem5.classList.add("navbar-item", "has-text-white");
  const pNavItemContent5 = document.createTextNode("Sign up");
  pNavItem5.appendChild(pNavItemContent5);
  divRight.appendChild(pNavItem5);


  const pNavItem6 = document.createElement("p");
  pNavItem6.classList.add("navbar-item", "has-text-white");
  const pNavItemContent6 = document.createTextNode("Sign in");
  pNavItem6.appendChild(pNavItemContent6);
  divRight.appendChild(pNavItem6);

  divNav.appendChild(divLeft);
  divNav.appendChild(divCenter);
  divNav.appendChild(divRight);
  divHeroHead.appendChild(divNav);
  return divHeroHead;
};