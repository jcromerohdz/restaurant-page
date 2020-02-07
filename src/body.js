export let bodyContent = () => {
    // const headerHero = document.createElement('header');
    // headerHero.classList.add('hero-body');
    // headerHero.id = "sub-content";
    const textContainer =  document.createElement('div');
    textContainer.classList.add("is-overlay", "has-text-centered", "single-spaced");
    textContainer.style.top= "150px";

    const textTitle = document.createElement('h1');
    textTitle.classList.add("subtitle", "is-3", "has-text-weight-light", "has-text-white");
    const textContent1 = document.createTextNode("Restaurant");
    textTitle.appendChild(textContent1);
    textContainer.appendChild(textTitle);

    const textSubtitle = document.createElement('h2');
    textSubtitle.classList.add("title", "is-1", "has-text-white")
    const textContent2 = document.createTextNode("La Delicia");
    textSubtitle.appendChild(textContent2);
    textContainer.appendChild(textSubtitle);

    // headerHero.appendChild(textContainer);

    return textContainer;
};
