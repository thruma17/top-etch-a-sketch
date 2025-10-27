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

//

function clearGrid() {
  grid.innerHTML = ``;
}

function setupGrid(currentSize) {
  clearGrid();
  for (let i = 0; i < currentSize ** 2; i++) {
    const newPixel = document.createElement(`div`);
    newPixel.id = `grid-pixel`;
    newPixel.className = `grid-pixel`;
    const pixel = newPixel;
    pixel.style.flex = `0 0 ${(100 / currentSize).toFixed(3)}%`;
    grid.appendChild(pixel);
    penBtn.addEventListener(`click`, () => {
      pixel.onmouseleave = function () {
        pixel.style.backgroundColor = `black`;
      };
    });
    pencilBtn.addEventListener(`click`, () => {
      pixel.onmouseleave = function () {
        pixel.style.backgroundColor = `gray`;
      };
    });
    rainbowBtn.addEventListener(`click`, () => {
      pixel.onmouseleave = function () {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        pixel.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      };
    });
    eraserBtn.addEventListener(`click`, () => {
      pixel.onmouseleave = function () {
        pixel.style.backgroundColor = `white`;
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

clearBtn.onclick = () => setupGrid(currentSize);
densityBtn.addEventListener(`click`, changeGrid);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
