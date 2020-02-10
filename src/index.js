import navBar from './header';
import bodyContent from './body';
import menu from './menu';
import contactUs from './contact';
import home from './home';


const content = document.getElementById('content');
const headerHero = document.createElement('header');
headerHero.classList.add('hero-body');
headerHero.id = 'sub-content';

content.appendChild(navBar());
const sectionTag = document.getElementById('sectionTag');
sectionTag.appendChild(headerHero);

const homePage = document.getElementById('homePage');
const menuPage = document.getElementById('menuPage');
const contactPage = document.getElementById('contactPage');

home(sectionTag);

const clearContent = () => {
  const cleanContent = document.getElementById('sub-content');
  cleanContent.innerHTML = '';
  return cleanContent;
};

const homeDisplay = () => {
  clearContent();
  sectionTag.childNodes[1].appendChild(bodyContent());
};

const menuDisplay = () => {
  clearContent();
  sectionTag.childNodes[1].appendChild(menu());
};

const contactDisplay = () => {
  clearContent();
  sectionTag.childNodes[1].appendChild(contactUs());
};


homePage.addEventListener('click', homeDisplay);
menuPage.addEventListener('click', menuDisplay);
contactPage.addEventListener('click', contactDisplay);
