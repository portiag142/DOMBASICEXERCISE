const Portillos = document.getElementById(`portillos`);
console.log(portillos);
const images = document.getElementsByTagName('img');
console.log(images);
const center = document.getElementsByTagName('center');
console.log(centered);
const genosEast = document.querySelector(`div`);
console.dir(genosEast);

const pTags = document.querySelectorAll(`p`);
console.dir(pTags);


const h1 = document.querySelectorAll(`h1`);
console.dir(h1);

console.log(h1.innerText);

h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

console.log(h1.innerText);


const others = document.getElementById(`others`);


const others = document.getElementById('others');
console.dir(others);

others.innerHTML = <h3>`Other Favorites`</h3>;


const aTag = document.getElementByTagName(`a`);
console.dir(aTag);
console.log(aTag.href);

aTag.innerHTML = 'https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/';
console.log(aTag.href);

h1.classList.add(`text-color`, `background`);
console.log(h1.classList);

h1.classList.remove(`background`);
console.log(h1.classList)

const h4 = document.createElement(`h4`);


h4.innerText = `CHICAGO: A great place to eat!`;

const body = document.querySelector(`body`);
body.prepend(h4);

const h5 = document.createElement(`h5`);


h5.innertext = 'See you in the Windy City Sometime!';

aTag.insertAdjacentElement(`afterend`, h5);

const li = document.getElementsByTagName(`li`)
const jBeef = li[0];
jBeef.remove()
