const container = document.querySelector('.container');
let slider = document.querySelector(".slider")
let valueDisplay = document.querySelector(".valueDisplay");



//function to make grid
function makeGrid(sliderValue) {
    //clear grid
    while (container.firstChild)
        container.removeChild(container.firstChild);

    let value = slider.value;
    valueDisplay.textContent = `${value} x ${value}`;

    //creates grid with (value x value) squares
    for (let i = 0; i < value; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        for (let j = 0; j < value; j++) {
            let square = document.createElement('div')
            square.classList.add('square');
            square.addEventListener('mouseover', makeBlack);
            gridRow.appendChild(square);
        }
        container.appendChild(gridRow);
    }
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', makeBlack));
}
//make initial grid
makeGrid();
valueDisplay.textContent = `${slider.value} x ${slider.value}`;

//run makeGrid function when slider changes value
slider.addEventListener('change', makeGrid);


function makeBlack(e) {
    e.target.style.backgroundColor = 'black';
}

//button runs makeGrid function to clear grid
let clearButton = document.querySelector('button');
clearButton.addEventListener('click', makeGrid);

