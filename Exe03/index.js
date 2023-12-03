/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const newUl = document.createElement("ul");

countries.forEach((country) => {
  const newLi = document.createElement("li");
  newLi.innerHTML = country;
  newUl.appendChild(newLi);
}
);
document.body.appendChild(newUl);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector(".fn-remove-me").remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divCars = document.querySelector("[data-function='printHere']");
const ulElement = document.createElement("ul");

cars.forEach((car) => {
  const liElement = document.createElement('li');
  liElement.textContent = car;
  ulElement.appendChild(liElement);
});

divCars.appendChild(ulElement);

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; */

const countriesPicsum = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];



countriesPicsum.forEach((country) => {

  const newDiv = document.createElement('div');

  const h4Element = document.createElement('h4');
  h4Element.innerHTML = country.title;

  const imgElement = document.createElement('img');
  imgElement.src = country.imgUrl;

  newDiv.appendChild(h4Element);
  newDiv.appendChild(imgElement);

  document.body.appendChild(newDiv);
});

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */

const buttonElement = document.createElement("button");
buttonElement.innerHTML = "Eliminar ultimo elemento";
document.body.appendChild(buttonElement);

const divH4 = document.querySelectorAll("body div:not(:first-of-type)");

const removeLastDivElement = () => {
  divH4[divH4.length - 1].remove();
};

buttonElement.addEventListener("click", removeLastDivElement);


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */


divH4.forEach((div) => {
  const divButton = document.createElement("button");
  divButton.innerHTML = "Eliminar div";
  div.appendChild(divButton);
});

const divButtons = document.querySelectorAll("div button");

const removeDiv = (e) => {
  const removableDiv = e.srcElement.parentElement;
  console.log(removableDiv);
  removableDiv.remove();
};

divButtons.forEach((button) => {
  button.addEventListener("click", removeDiv);
});


