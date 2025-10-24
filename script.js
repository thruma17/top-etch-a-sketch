console.clear();

let size = 16;

const grid = document.getElementById(`container`);

function createGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size ** 2; i++) {
    const pixel = document.createElement(`div`);
    pixel.className = `grid-pixel`;
    pixel.style.flex = `0 0 ${(100 / size).toFixed(2)}%`;
    grid.appendChild(pixel);
    grid.addEventListener("click", () => {
      pixel.onmouseleave = function () {
        this.style.backgroundColor = `black`;
      };
    });
  }
}

createGrid(size);

const cleanButton = document.getElementById("btn-reset");
cleanButton.addEventListener("click", function () {
  createGrid(size);
});
