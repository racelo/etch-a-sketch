const parent = document.querySelector(".container");

const gridBtn = document.querySelector(".grid-size");
const gridValue = document.querySelector("#grid-value");
const gridInput = document.querySelector("#grid-input");

gridInput.addEventListener("change", (event) => {
  gridValue.textContent = event.target.value;
});

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

gridInput.addEventListener("input", (e) => {
  let inputValue = parseInt(e.target.value);
  let gridNum = inputValue * inputValue;
  let gridSize = 500 / inputValue;

  // Alternative methods of emptying the parent container
  // parent.innerHTML = "";
  // while (parent.firstChild) {
  //   parent.removeChild(parent.firstChild);
  // }

  // remove() was introduced in 2011
  // while (parent.firstChild) {
  //   parent.firstChild.remove();
  // }

  // replaceChildren was introduced in 2021
  parent.replaceChildren();

  for (let i = 1; i <= gridNum; i++) {
    let divSquare = document.createElement("div");
    divSquare.className = "square";
    divSquare.style.width = `${gridSize}px`;
    divSquare.style.height = `${gridSize}px`;
    parent.appendChild(divSquare);
  }

  const squares = document.querySelectorAll("div.square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let color = randomColor();
      square.style.backgroundColor = color;
    });
  });
});
