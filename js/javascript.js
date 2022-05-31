const container = document.getElementById("container");

let numBoxes = 16 * 16;

for (let i = 0; i < numBoxes; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", `box${i}`);
  container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => console.log(e.target));
});
