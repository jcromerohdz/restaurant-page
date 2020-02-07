export const contactUs = () => {
  const textContainer =  document.createElement('div');
  textContainer.classList.add("columns", "is-overlay", "has-text-centered", "single-spaced");
  textContainer.style.top= "150px";

  const textTitle = document.createElement('h1');
  textTitle.classList.add("subtitle", "is-3", "has-text-weight-light", "has-text-black");
  const textContent1 = document.createTextNode("Contact Us!");
  textTitle.appendChild(textContent1);

  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('field', 'column', 'is-half', 'is-offset-3');
  const labelTag = document.createElement('label');
  const labelTagText = document.createTextNode("Please Provide you Email to join our newsletter");
  const brTag = document.createElement('br');
  labelTag.classList.add("title", "is-3", "has-text-weight-semibold", "has-text-black")
  labelTag.appendChild(labelTagText);
  fieldDiv.appendChild(brTag);
  fieldDiv.appendChild(textTitle);
  fieldDiv.appendChild(labelTag);
  const controlDiv = document.createElement('div');
  controlDiv.classList.add('control');
  const inputEmailTag = document.createElement('input');
  inputEmailTag.classList.add('input');
  controlDiv.appendChild(inputEmailTag);

  fieldDiv.appendChild(controlDiv);

  textContainer.appendChild(fieldDiv);

  return textContainer;
};
