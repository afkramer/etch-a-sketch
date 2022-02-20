const gridSize = 960;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.height = `${gridSize}px`;
gridContainer.style.width = `${gridSize}px`;

createGridCSSGrid(100);

function createGridCSSGrid(numSquares){
    let gridTemplateCols = "";
    for (let i = 0; i < numSquares; i++){    
        gridTemplateCols += "auto ";
        for (let j = 0; j < numSquares; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.classList.add('grid');

            gridItem.style.height = `${gridSize/numSquares}px`;
            gridItem.style.width = `${gridSize/numSquares}px`;

            gridContainer.appendChild(gridItem);
        }
    }
    gridContainer.style.gridTemplateColumns = gridTemplateCols;
}