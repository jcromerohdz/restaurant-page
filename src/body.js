export let bodyContent = () => {

    const textContainer =  document.createElement('div');
    textContainer.classList.add("is-overlay", "has-text-centered", "single-spaced");
    textContainer.style.top= "150px";

    const textTitle = document.createElement('h1');
    textTitle.classList.add("subtitle", "is-3", "has-text-weight-light", "has-text-black");
    const textContent1 = document.createTextNode("Restaurant");
    textTitle.appendChild(textContent1);
    textContainer.appendChild(textTitle);

    const textSubtitle = document.createElement('h2');
    textSubtitle.classList.add("title", "is-1", "has-text-black")
    const textContent2 = document.createTextNode("La Delicia");
    textSubtitle.appendChild(textContent2);
    textContainer.appendChild(textSubtitle);

    return textContainer;
};
