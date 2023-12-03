// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDivWithP = document.createElement("div");
const pInDiv = document.createElement("p");
newDivWithP.appendChild(pInDiv);
document.body.appendChild(newDivWithP);

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
  loop con javascript. */

const divWithSixP = document.createElement("div");

for (let i = 0; i < 6; i++) {
  let newP = document.createElement("p");
  divWithSixP.appendChild(newP);
}

document.body.appendChild(divWithSixP);

/* 1.4 Inserta dinamicamente con javascript en un html una p con el
  texto 'Soy dinámico!'. */

const pWithText = document.createElement("p");
pWithText.innerHTML = "Soy dinámico!";

document.body.appendChild(pWithText);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Instert = document.querySelector(".fn-insert-here");
h2Instert.innerHTML = 'Wubba Lubba dub dub';

/* 1.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newUl = document.createElement("ul");

apps.forEach(app => {
  let newLi = document.createElement("li");
  newLi.innerHTML = app;
  newUl.appendChild(newLi);
});

document.body.appendChild(newUl);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const nodesRemoved = document.querySelectorAll(".fn-remove-me");

nodesRemoved.forEach((node) => node.remove());

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
  Recuerda que no solo puedes insertar elementos con .appendChild. */

const newPinDiv = document.createElement("p");
newPinDiv.innerText = 'Voy en medio!';

const allDivs = document.querySelectorAll("div");
const emptyDiv1 = allDivs[0];
const emptyDiv2 = allDivs[1];
const containerDiv2 = emptyDiv2.parentNode;

containerDiv2.insertBefore(newPinDiv, emptyDiv2);

/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
  .fn-insert-here */


const allDivWithClassInsert = document.querySelectorAll("div.fn-insert-here");

allDivWithClassInsert.forEach((div) => {
  const newP = document.createElement("p");
  newP.innerHTML = 'Voy dentro!';
  div.appendChild(newP);
}
);