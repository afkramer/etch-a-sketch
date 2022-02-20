const gridSize = 960;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.height = `${gridSize}px`;
gridContainer.style.width = `${gridSize}px`;

createGrid(100);

function createGrid(numSquares){
    for (let i = 0; i < numSquares; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.classList.add('grid');
        
        for (let j = 0; j < numSquares; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.classList.add('grid');

            gridRow.appendChild(gridItem);
        }

        gridContainer.appendChild(gridRow);
    }
}