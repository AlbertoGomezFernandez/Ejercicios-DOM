/* Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". */

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


const divContainer = document.querySelector("[data-function='printHere']");
const newUl = document.createElement("ul");


places.forEach((place) => {
  const newLi = document.createElement("li");
  newLi.innerHTML = place;
  newUl.appendChild(newLi);
});

divContainer.appendChild(newUl);

