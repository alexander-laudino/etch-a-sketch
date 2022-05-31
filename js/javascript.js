const container = document.getElementById("container");

const resizeColor = document.getElementById("gridSizeColor");
const resize = document.getElementById("gridSize");

drawGrid();

let boxes = document.querySelectorAll(".box");

addListeners(boxes);

resizeColor.addEventListener("click", () => {
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
  addListenersColor(boxes);
});

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

function addListenersColor(boxes = NodeList) {
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      document.getElementById(e.target.id).style.backgroundColor =
        getRandomColor();
    });
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
