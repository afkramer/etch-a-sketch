const gridSize = 960;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.height = `${gridSize}px`;
gridContainer.style.width = `${gridSize}px`;

createGrid(16);

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

    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    gridItems.forEach(item => item.addEventListener('mouseenter', changeColor));
}


function changeColor(e){
    const classes = Array.from(e.target.classList);
    if (classes[2] === undefined){
        e.target.classList.add('hovered-1');
    } else {
        // The first two classes are 'grid-item' and 'grid', as defined above
        // The third class would be the option to style after hovering
        const hoveredClass = classes[2];
        const timesHovered = parseInt(hoveredClass.slice(-1));
        if (timesHovered < 9){
            e.target.classList.remove(hoveredClass);
            e.target.classList.add(`hovered-${timesHovered + 1}`);
        }
    }
}

function resetGrid(){
    let numSquares = window.prompt("How many squares should each side have?\r\nEnter a number between 1 and 100.", 16);
    // Only reset the grid if the user hasn't canceled
    if (numSquares !== null && numSquares !== ''){
        numSquares = parseInt(numSquares);
        if (Number.isNaN(numSquares)){
            alert("That was not a number. Setting default size of 16");
            numSquares = 16;
        } else if (numSquares > 100){
            alert("The highest value possible is 100. Setting grid size of 100.");
            numSquares = 100;
        }

        const gridRows = document.querySelectorAll('.grid-row');
        gridRows.forEach(gridRow => gridContainer.removeChild(gridRow));
        createGrid(numSquares);
    }
}