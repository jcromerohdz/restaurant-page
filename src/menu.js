export const menu = () => {
  const textContainer =  document.createElement('div');
  textContainer.classList.add("is-overlay", "has-text-centered", "single-spaced");
  textContainer.style.top= "150px";


  const textTitle = document.createElement('h1');
  textTitle.classList.add("subtitle", "is-3", "has-text-weight-light", "has-text-black");
  const textContent1 = document.createTextNode("Menu");
  textTitle.appendChild(textContent1);
  textContainer.appendChild(textTitle);

  const menutItem1 = document.createElement('p');
  menutItem1.classList.add("title", "is-2", "has-text-black");
  const menuItemContent1 = document.createTextNode("Top Sirloin: $25.00");
  menutItem1.appendChild(menuItemContent1);
  textContainer.appendChild(menutItem1);

  const menutItem2 = document.createElement('p');
  menutItem2.classList.add("title", "is-2", "has-text-black");
  const menuItemContent2 = document.createTextNode("Tomahawk: $34.00");
  menutItem2.appendChild(menuItemContent2);
  textContainer.appendChild(menutItem2);

  const menutItem3 = document.createElement('p');
  menutItem3.classList.add("title", "is-2", "has-text-black");
  const menuItemContent3 = document.createTextNode("Chicken Breast: $25.00");
  menutItem3.appendChild(menuItemContent3);
  textContainer.appendChild(menutItem3);

  const menutItem4 = document.createElement('p');
  menutItem4.classList.add("title", "is-2", "has-text-black");
  const menuItemContent4 = document.createTextNode("Shrimps and Mashrooms: $30.00");
  menutItem4.appendChild(menuItemContent4);
  textContainer.appendChild(menutItem4);

  return textContainer;
};
