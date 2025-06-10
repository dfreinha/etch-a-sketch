const grid = document.getElementById('grid');
const changeButton = document.getElementById('changeButton');
const containerSize = 960;

function createGrid(gridSize) {
    grid.innerHTML = ''; // Remove existing cells
    const cellSize = containerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) { // loop builds grid using variable cell size based on input given
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;

      cell.addEventListener('mouseenter', () => { // event to change color when mouse enters cells
        cell.style.backgroundColor = '#cd57ff';
      });

      cell.addEventListener('mouseout', () => { // event to change color when mouse exit cells
        cell.style.backgroundColor = '#4433ff';
      });

      grid.appendChild(cell);
    }
  }
  changeButton.addEventListener('click', () => {
    let input = prompt('Enter number of squares per side (max 100):');
    let gridSize = parseInt(input); // insure integer for grid size decimal truncated

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) { // checks in value is a positive  and <= 100 
      createGrid(gridSize);
    } else {
      alert('Please enter a valid number between 1 and 100.'); // redo note
    }
  });

  // Initial grid
  createGrid(16);


