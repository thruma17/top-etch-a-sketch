console.clear();

// defaults

const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

// variables

const toolButtons = document.querySelectorAll(".toolButtons");
const penBtn = document.getElementById(`penBtn`);
const pencilBtn = document.getElementById(`pencilBtn`);
const rainbowBtn = document.getElementById(`rainbowBtn`);
const eraserBtn = document.getElementById(`eraserBtn`);
const clearBtn = document.getElementById(`clearBtn`);
const densityBtn = document.getElementById(`densityBtn`);
const grid = document.getElementById(`container`);

// settings functions

function setCurrentSize(newSize) {
  currentSize = newSize;
}

//

clearBtn.onclick = () => setupGrid(currentSize);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//

function clearGrid() {
  grid.innerHTML = ``;
}

function setupGrid(currentSize) {
  clearGrid();
  for (let i = 0; i < currentSize ** 2; i++) {
    const pixel = document.createElement(`div`);
    pixel.className = `grid-pixel`;
    pixel.style.flex = `0 0 ${(100 / currentSize).toFixed(3)}%`;
    grid.appendChild(pixel);
    eraserBtn.addEventListener(`click`, () => {
      pixel.onmouseleave = function () {
        this.style.backgroundColor = `white`;
      };
    });
    grid.addEventListener(`click`, () => {
      pixel.onmouseleave = function () {
        this.style.backgroundColor = `black`;
      };
    });
  }
}

function changeGrid() {
  customSize = prompt(`Choose a number between 2 and 64`, `16`);
  if (customSize > 1 && customSize < 65) {
    setupGrid(customSize);
    currentSize = customSize;
  } else {
    alert(`Invalid number, creating default pixel density`);
    setupGrid(currentSize);
  }
}

// start

setupGrid(DEFAULT_SIZE);

// event listeners

densityBtn.addEventListener(`click`, changeGrid);
