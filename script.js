const gridSize = 960;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.height = `${gridSize}px`;
gridContainer.style.width = `${gridSize}px`;

createGridInlineBlock(16);

function createGridInlineBlock(numSquares){
    for (let i = 0; i < numSquares; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.classList.add('grid');
        
        gridRow.style.height = `${gridSize/numSquares}px`;
        
        for (let j = 0; j < numSquares; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.classList.add('grid');

            gridItem.style.height = `${gridSize/numSquares}px`;
            gridItem.style.width = `${gridSize/numSquares}px`;

            gridRow.appendChild(gridItem);
        }

        gridContainer.appendChild(gridRow);
    }
}