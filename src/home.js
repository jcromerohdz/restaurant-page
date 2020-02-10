import bodyContent from './body';
import footerContent from './footer';

const home = (sectionTag) => {
  const containerDiv = document.getElementById('content');
  sectionTag.childNodes[1].appendChild(bodyContent());
  sectionTag.appendChild(footerContent());
  containerDiv.appendChild(sectionTag);
  return containerDiv;
};

export default home;
