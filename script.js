function createGridFloatClear(numSquares){
    for (let i = 0; i < numSquares; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.classList.add('grid');
        
        gridRow.style.height = `${960/numSquares}px`;
        
        for (let j = 0; j < numSquares; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.classList.add('grid');

            gridItem.style.height = `${960/numSquares}px`;
            gridItem.style.width = `${960/numSquares}px`;

            gridRow.appendChild(gridItem);
        }

        const gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(gridRow);
    }
}

createGridFloatClear(16);