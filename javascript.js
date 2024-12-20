const mainBody = document.querySelector("#grid-container");

// generate grid
let gridSize_n = 20;

function generateGrid(gridSize_n) {
    for(let i = 0; i < gridSize_n; i+=1) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-grid-container");
        mainBody.appendChild(colDiv);

        for(let j = 0; j < gridSize_n; j+=1) {
            const newDiv = document.createElement("div");
            //newDiv.setAttribute("style", "border: 1px solid black; height : 25px; width : 25px;");
            newDiv.setAttribute("style", "border: 1px solid hsl(0deg 0% 40%);");
            newDiv.classList.add("row-grid-container");
            newDiv.addEventListener("mousemove",  markGrid);
            colDiv.appendChild(newDiv);
        }
    }
    return 0;
};

generateGrid(gridSize_n);

// Track mouse button state
let mouseButtonStatus = 0; // Track mouse Satus

document.addEventListener("mousedown" , handleMouseDown);
document.addEventListener("mouseup" , handleMouseUp );

function handleMouseDown (event) {
    mouseButtonStatus = 1;
    if(event.target.classList.contains("row-grid-container") 
        || event.target.classList.contains("col-grid-container")) {
            event.preventDefault(); // prevent dragging of grid squares
    }
};

function handleMouseUp (event) {
    mouseButtonStatus = 0;
};

// handle the gridColoring
function markGrid(event) {
    if (mouseButtonStatus) event.target.style.background = gridColor;
};

// Set function for reset button
const resetButton = document.querySelector("#grid-reset-button");

resetButton.addEventListener("click", resetGrid);

function resetGrid(event) { 
    const gridSquareALl = document.querySelectorAll(".row-grid-container")
    gridSquareALl.forEach(ele => ele.style.background = "white");
};

// handleSlider
const gridSizeSlider = document.querySelector("#set-grid-size");
const gridSize_display = document.querySelector("#display-grid-size");

gridSizeSlider.addEventListener("input", handleSlider);
gridSizeSlider.addEventListener("change", handleSliderSet);

function handleSlider(event) {
    gridSize_n = event.target.value;
    gridSize_display.value = gridSize_n;

};

function handleSliderSet(event) {
    while(mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    }
    generateGrid(gridSize_n);
};

// handle valueChangeGridSize
gridSize_display.addEventListener("change", handleGridSizeInput)
function handleGridSizeInput(event) {
    gridSize_n = gridSize_display.value;
    gridSizeSlider.value = gridSize_n;

    while(mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    }
    generateGrid(gridSize_n);
};

// track colorPicker
let gridColor = "#000000"
const colorPicker = document.querySelector("#grid-color");

colorPicker.addEventListener("input", handleColorPick);

function handleColorPick (event) {
    gridColor = event.target.value;
    console.log(gridColor);
};