const parent = document.querySelector(".container");
const gridValue = document.querySelector("#grid-value");
const gridInput = document.querySelector("#grid-input");
const clearBtn = document.querySelector(".clear-btn");

gridInput.addEventListener("change", (e) => {
  gridValue.textContent = e.target.value;
});

function createGrid(input) {
  let inputValue = parseInt(input);
  let gridNum = inputValue * inputValue;
  let gridSize = 500 / inputValue;

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
      let color = randomColorGenerator();
      square.style.backgroundColor = color;
    });
  });
}

function randomColorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

gridInput.addEventListener("input", (e) => {
  parent.replaceChildren();
  createGrid(e.target.value);
});

clearBtn.addEventListener("click", () => {
  parent.replaceChildren();
  gridValue.textContent = "";
});
