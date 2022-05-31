const container = document.getElementById("container");

let numBoxes = 16 * 16;

for (let i = 0; i < numBoxes; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");
