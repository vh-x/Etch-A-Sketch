const rand = (num) => Math.floor(Math.random() * (num + 1));
const randColor = () =>
  `rgb(${200 + rand(55)}, ${200 + rand(55)}, ${200 + rand(55)})`;
const draw = (e) => e.target.classList.add("fill");
const clear = () =>
  document
    .querySelectorAll(".grid")
    .forEach((grid) => grid.classList.remove("fill"));

document.getElementById("clear").addEventListener("click", clear);

class canvas {
  constructor(height = 32, width = height) {
    height = height > 48 ? 48 : height;
    width = width > 48 ? 48 : width;
    const container = document.createElement("div");
    let mousedown = false;
    container.classList = "container";
    container.addEventListener("mousedown", (e) => e.preventDefault());
    container.addEventListener("mousedown", () => (mousedown = true));
    container.addEventListener("mouseup", () => (mousedown = false));
    for (let i = 0; i < height; i++) {
      const row = document.createElement("div");
      row.classList = "row";
      row.style.display = "flex";
      container.appendChild(row);
      for (let j = 0; j < width; j++) {
        const div = document.createElement("div");
        div.classList = "grid";
        div.addEventListener("mouseover", (e) => mousedown && draw(e));
        container.addEventListener("mousedown", (e) => draw(e));
        row.appendChild(div);
      }
    }
    return container;
  }
}

const set = (height, width) => {
  document.querySelector(".container")?.remove();
  document.body.append(new canvas(height, width));
};

document.getElementById("set").addEventListener("click", () => {
  set(
    document.getElementById("height").value,
    document.getElementById("width").value
  );
});

set();
