let squares = 16;

const container = document.querySelector('#container');
container.style.height = '500px';
container.style.width = '500px';

let button = document.querySelector('.button');
button.addEventListener("click", function (event) {

    squares = prompt('Enter the number of squares:');
    while (squares > 100) {
        squares = prompt('Enter a number greater than 16:');
    }

    tmpRows = document.querySelectorAll('.row');

    tmpRows.forEach((element) => {
        container.removeChild(element);
    });

    drawGrid(squares);
    selectSquare();
});

drawGrid(squares);
selectSquare();

function drawGrid(rows, columns) {
    console.log(container.style.height);

    for (let i = 0; i < squares; i++) {
        // Create 'row' that will be a flexbox to hold each square in the grid
        let grid = document.createElement('div')
        grid.classList.add('row');

        let square;
        for (let j = 0; j < squares; j++) {
            // Create each square within each row
            square = document.createElement('div');
            square.classList.add('square');

            square.style.height = container.style.height.replace("px", "") / squares + 'px';
            square.style.width = container.style.width.replace("px", "") / squares + 'px';
            square.innerHTML = "";
            grid.appendChild(square);
        }

        container.appendChild(grid);
    }
}

function selectSquare() {
    let mouseOver = document.querySelectorAll('.square');
    mouseOver.forEach((mouseOver) => {
        mouseOver.addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = generateRandomColor();
        });
    });
}

function generateRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;

    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);

    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}