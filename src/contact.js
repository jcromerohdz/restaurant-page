export const contactUs = () => {
  const textContainer =  document.createElement('div');
  textContainer.classList.add("columns", "is-overlay", "has-text-centered", "single-spaced");
  textContainer.style.top= "150px";


  const textTitle = document.createElement('h1');
  textTitle.classList.add("subtitle", "is-3", "has-text-weight-light", "has-text-white");
  const textContent1 = document.createTextNode("Contact Us!");
  textTitle.appendChild(textContent1);
  // textContainer.appendChild(textTitle);



  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('field', 'column', 'is-half', 'is-offset-3');
  const labelTag = document.createElement('label');
  const labelTagText = document.createTextNode("Email");
  labelTag.classList.add("title", "is-3", "has-text-weight-light", "has-text-white")
  labelTag.appendChild(labelTagText);
  fieldDiv.appendChild(textTitle);
  fieldDiv.appendChild(labelTag);
  const controlDiv = document.createElement('div');
  controlDiv.classList.add('control');
  const inputEmailTag = document.createElement('input');
  inputEmailTag.classList.add('input');
  controlDiv.appendChild(inputEmailTag);

  fieldDiv.appendChild(controlDiv);


  const fieldDiv2 = document.createElement('div');
  fieldDiv2.classList.add('field', 'column', 'is-half', 'is-offset-3');
  const labelTag2 = document.createElement('label');
  const labelTagText2 = document.createTextNode("Message");
  labelTag2.classList.add("title", "is-3", "has-text-weight-light", "has-text-white")
  labelTag2.appendChild(labelTagText2);
  fieldDiv2.appendChild(labelTag2);
  console.log("HELP");
  const controlDiv2 = document.createElement('div');
  controlDiv2.classList.add('control');
  const inputMessageTag = document.createElement('textarea');
  inputMessageTag.classList.add('textarea');
  controlDiv2.appendChild(inputMessageTag);
//   <div class="field">
//   <label class="label">Message</label>
//   <div class="control">
//     <textarea class="textarea" placeholder="Textarea"></textarea>
//   </div>
// </div>

  // const fieldDiv2 = document.createElement('div');
  // fieldDiv2.classList.add('field');
  // const labelTag2 = document.createElement('label');
  // labelTag2.document.createTextNode("Message");
  // fieldDiv2.appendChild(labelTag2);
  // const controlDiv2 = documen.createElement('div');
  // controlDiv2.classlist.add('control');
  // const textareaTag = document.createElement('textarea');
  // textareaTag.classList.add('textarea');
  // controlDiv2.appendChild(textareaTag);
  // fieldDiv2.appendChild(controlDiv2);

  textContainer.appendChild(fieldDiv);
  textContainer.appendChild(fieldDiv2);
  // textContainer.appendChild(fieldDiv2);

  return textContainer;
};
