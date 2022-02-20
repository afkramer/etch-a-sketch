const gridSize = 960;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.height = `${gridSize}px`;
gridContainer.style.width = `${gridSize}px`;

createGrid(16);

const gridItems = Array.from(document.querySelectorAll('.grid-item'));
gridItems.forEach(item => item.addEventListener('mouseenter', changeColor));

function changeColor(e){
    const classes = Array.from(e.target.classList);
    if (classes[2] === undefined){
        e.target.classList.add('hovered-1');
    } else {
        const hoveredClass = classes[2];
        const timesHovered = parseInt(hoveredClass.slice(-1));
        console.log(hoveredClass.slice(-1));
        if (timesHovered < 9){
            e.target.classList.remove(hoveredClass);
            e.target.classList.add(`hovered-${timesHovered + 1}`);
        }
    }
}

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