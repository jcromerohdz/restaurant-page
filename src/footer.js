const footerContent = () => {
  const mainHero = document.createElement('main');
  mainHero.classList.add('hero-foo', 'center');
  mainHero.style.padding = '2rem';

  const divGrid = document.createElement('div');
  divGrid.id = 'grid';
  divGrid.style.width = '768px';

  const divA = document.createElement('div');
  divA.id = 'a';
  divA.classList.add('center-column');
  const pContent = document.createElement('p');
  pContent.classList.add('has-text-centered', 'has-text-black', 'title', 'is-1');
  const textContent = document.createTextNode('Our dishes ');
  pContent.appendChild(textContent);
  divA.appendChild(pContent);

  const divB = document.createElement('div');
  divB.id = 'b';
  const pContentOne = document.createElement('p');
  const imgPictureOne = document.createElement('img');
  imgPictureOne.src = 'https://i.pinimg.com/originals/01/de/63/01de637694afffdb842ae6439859a3f2.jpg';
  pContentOne.appendChild(imgPictureOne);
  divB.appendChild(pContentOne);

  const divC = document.createElement('div');
  divC.id = 'c';
  const pContentTwo = document.createElement('p');
  const imgPictureTwo = document.createElement('img');
  imgPictureTwo.src = 'https://www.thespruceeats.com/thmb/iWn8EpeHjiiX1EyNdQsxvhS0GVs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomahawk-rib-eye-steak-2313425-Hero-5b5725cb46e0fb0037e009ab.jpg';
  pContentTwo.appendChild(imgPictureTwo);
  divC.appendChild(pContentTwo);

  const divD = document.createElement('div');
  divD.id = 'd';
  const pContentThree = document.createElement('p');
  const imgPictureThree = document.createElement('img');
  imgPictureThree.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwX0odKHuX1qezoCUYQvSg7df4k9xLAoq_J-3xJ1Q-Ps9TRtuBg&s';
  pContentThree.appendChild(imgPictureThree);
  divD.appendChild(pContentThree);

  const divE = document.createElement('div');
  divE.id = 'e';
  const pContentFour = document.createElement('p');
  const imgPictureFour = document.createElement('img');
  imgPictureFour.src = 'https://i.pinimg.com/originals/04/50/d4/0450d4249202309efc191d0235bba39e.jpg';
  pContentFour.appendChild(imgPictureFour);
  divE.appendChild(pContentFour);

  divGrid.appendChild(divA);
  divGrid.appendChild(divB);
  divGrid.appendChild(divC);
  divGrid.appendChild(divD);
  divGrid.appendChild(divE);
  mainHero.appendChild(divGrid);

  return mainHero;
};

export default footerContent;
