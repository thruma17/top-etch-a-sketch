console.clear();

// defaults

const DEFAULT_TOOL = `pen`;
const DEFAULT_SIZE = 16;

let currentTool = DEFAULT_TOOL;
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

// functions

function setCurrentTool(newTool) {
  chooseTool(newTool);
  currentTool = newTool;
}

function setupGrid(currentSize) {
  grid.innerHTML = ``;
  for (let i = 0; i < currentSize ** 2; i++) {
    const newPixel = document.createElement(`div`);
    newPixel.id = `grid-pixel`;
    newPixel.className = `grid-pixel`;
    newPixel.style.flex = `0 0 ${(100 / currentSize).toFixed(3)}%`;
    grid.appendChild(newPixel);
    newPixel.addEventListener("mouseleave", draw);
  }
}

function clearGrid() {
  grid.innerHTML = ``;
  setupGrid(currentSize);
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

function chooseTool(newTool) {
  switch (currentTool) {
    case `pen`:
      penBtn.classList.remove(`active`);
      break;
    case `pencil`:
      pencilBtn.classList.remove(`active`);
      break;
    case `rainbow`:
      rainbowBtn.classList.remove(`active`);
      break;
    case `eraser`:
      eraserBtn.classList.remove(`active`);
      break;
  }

  switch (newTool) {
    case `pen`:
      penBtn.classList.add(`active`);
      break;
    case `pencil`:
      pencilBtn.classList.add(`active`);
      break;
    case `rainbow`:
      rainbowBtn.classList.add(`active`);
      break;
    case `eraser`:
      eraserBtn.classList.add(`active`);
      break;
  }
}

function draw(e) {
  if (e.type === "mouseleave" && !drawing) return;
  switch (currentTool) {
    case `pen`:
      e.target.style.backgroundColor = `black`;
      e.target.style.opacity = 1;
      break;
    case `pencil`:
      e.target.style.backgroundColor = `black`;
      if (e.target.style.opacity <= 0.9) {
        e.target.style.opacity = +e.target.style.opacity + 0.1;
      } else if (
        (e.target.style.opacity =
          1 && e.target.style.backgroundColor === `black`)
      ) {
        e.target.style.opacity = 1;
      }
      break;
    case `rainbow`:
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      e.target.style.opacity = 1;
      break;
    case `eraser`:
      e.target.style.backgroundColor = `white`;
      e.target.style.opacity = 0;
      break;
  }
}

// start

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
  chooseTool(DEFAULT_TOOL);
};

// event listeners

penBtn.onclick = () => setCurrentTool("pen");
pencilBtn.onclick = () => setCurrentTool("pencil");
rainbowBtn.onclick = () => setCurrentTool("rainbow");
eraserBtn.onclick = () => setCurrentTool("eraser");
clearBtn.onclick = () => clearGrid();
densityBtn.addEventListener(`click`, changeGrid);

// play/pause

let drawing = false;
grid.onclick = () => (drawing = true);
grid.ondblclick = () => (drawing = false);
grid.onmouseleave = () => (drawing = false);
