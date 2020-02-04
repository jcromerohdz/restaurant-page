export let footerContent = () => {
    const mainHero = document.createElement('main');
    mainHero.classList.add('hero-foo', 'center');
    mainHero.style.padding = "2rem";

    const divGrid = document.createElement('div');
    divGrid.id = "grid";
    divGrid.style.width = "768px";

    const divA = document.createElement('div');
    divA.id = "a";
    divA.classList.add("center-column");
    const pContent = document.createElement('p');
    pContent.classList.add("has-text-centered", "has-text-white", "title", "is-1");
    const textContent = document.createTextNode("Our dishes please even the most demanding palate");
    pContent.appendChild(textContent);
    divA.appendChild(pContent)

    const divB = document.createElement('div');
    divB.id = "b";
    const pContentOne = document.createElement('p');
    const imgPictureOne = document.createElement('img');
    imgPictureOne.src="https://upload.wikimedia.org/wikipedia/commons/3/30/London_broil.jpg";
    pContentOne.appendChild(imgPictureOne);
    divB.appendChild(pContentOne);

    const divC = document.createElement('div');
    divC.id = "c";
    const pContentTwo = document.createElement('p');
    const imgPictureTwo = document.createElement('img');
    imgPictureTwo.src="https://www.thespruceeats.com/thmb/iWn8EpeHjiiX1EyNdQsxvhS0GVs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomahawk-rib-eye-steak-2313425-Hero-5b5725cb46e0fb0037e009ab.jpg";
    pContentTwo.appendChild(imgPictureTwo);
    divC.appendChild(pContentTwo);

    const divD = document.createElement('div');
    divD.id = "d";
    const pContentThree = document.createElement('p');
    const imgPictureThree = document.createElement('img');
    imgPictureThree.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwX0odKHuX1qezoCUYQvSg7df4k9xLAoq_J-3xJ1Q-Ps9TRtuBg&s";
    pContentThree.appendChild(imgPictureThree);
    divD.appendChild(pContentThree);

    const divE = document.createElement('div');
    divE.id = "e";
    const pContentFour = document.createElement('p');
    const imgPictureFour = document.createElement('img');
    imgPictureFour.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwX0odKHuX1qezoCUYQvSg7df4k9xLAoq_J-3xJ1Q-Ps9TRtuBg&s";
    pContentFour.appendChild(imgPictureFour);
    divE.appendChild(pContentFour);

    divGrid.appendChild(divA);
    divGrid.appendChild(divB);
    divGrid.appendChild(divC);
    divGrid.appendChild(divD);
    divGrid.appendChild(divE);
    mainHero.appendChild(divGrid);

    console.log(mainHero.appendChild(divGrid));
  // <!-- Footer -->
  // <!-- <main class="hero-foo center" style="padding: 2rem;">
  //     <div id="grid" style="width: 768px;">
  //       <div id="a" class="center-column">
  //         <p class="has-text-centered has-text-white title is-1">
  //           Our dishes please even the most demanding palate
  //         </p>
  //       </div>
  //       <div id="b"><p><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/London_broil.jpg" alt=""></p></div>
  //       <div id="c"><p><img src="https://www.thespruceeats.com/thmb/iWn8EpeHjiiX1EyNdQsxvhS0GVs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomahawk-rib-eye-steak-2313425-Hero-5b5725cb46e0fb0037e009ab.jpg" alt=""></p></div>
  //       <div id="d"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwX0odKHuX1qezoCUYQvSg7df4k9xLAoq_J-3xJ1Q-Ps9TRtuBg&s" alt=""></p></div>
  //       <div id="e"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZDYnYO1E7THiCumw-klF8y0zP7rly-7Qgkw-qYVD8zVmxVik&s" alt=""></p></div>
  //     </div>
  //   </main>
  return mainHero
}
