const container = document.querySelector(".container");
let divSquare = "";

for (let i = 0; i < 100; i++) {
  divSquare = document.createElement("div");
  divSquare.className = "square";
  // divSquare.setAttribute("class", "square");
  // divSquare.classList.add("square");
  container.appendChild(divSquare);
}

const squares = document.querySelectorAll("div.square");

// squares.forEach((square) => {
//   square.addEventListener("click", () => {
//     square.style.backgroundColor = "green";
//   });
// });

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    // square.style.backgroundColor = "green";
    let color = randomColor();
    square.style.backgroundColor = color;
  });
});
