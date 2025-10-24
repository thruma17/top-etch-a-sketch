console.clear;

const grid = document.getElementById(`container`);

function createDivs(numOfDivs) {
  for (let i = 0; i < numOfDivs ** 2; i++) {
    const newDiv = document.createElement(`div`);
    newDiv.className = `grid-pixel`;
    grid.appendChild(newDiv);
  }
}

createDivs(16);
