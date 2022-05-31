const container = document.getElementById("container");

drawGrid();

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) =>
    document.getElementById(e.target.id).classList.toggle("mouseover")
  );
});

const resize = document.getElementById("gridSize");

resize.addEventListener("click", () => {
  let side = parseInt(prompt("Enter squares per side (max 100): ", "64"));
  document
    .querySelectorAll(".box")
    .forEach((box) => box.parentNode.removeChild(box));
  console.log(side);
});

function drawGrid(numBoxes = 256) {
  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", `box${i}`);
    container.appendChild(box);
  }
}
