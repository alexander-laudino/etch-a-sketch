const container = document.getElementById("container");

const resize = document.getElementById("gridSize");

let boxes = document.querySelectorAll(".box");

resize.addEventListener("click", () => {
  let side = parseInt(prompt("Enter squares per side (max 100): ", "64"));
  document
    .querySelectorAll(".box")
    .forEach((box) => box.parentNode.removeChild(box));
  let numBoxes = side * side;
  let gridSide = `repeat(${side}, auto)`;
  container.style.gridTemplateColumns = gridSide;
  container.style.gridTemplateRows = gridSide;
  drawGrid(numBoxes);
  boxes = document.querySelectorAll(".box");
  addListeners(boxes);
});

function drawGrid(numBoxes = 256) {
  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", `box${i}`);
    container.appendChild(box);
  }
}

function addListeners(boxes = NodeList) {
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) =>
      document.getElementById(e.target.id).classList.toggle("mouseover")
    );
  });
}

drawGrid();

addListeners(boxes);
