const mainBody = document.querySelector("#grid-container");

let gridSize_n = 20;

function generateGrid(gridSize_n) {
    for(let i = 0; i < gridSize_n; i+=1) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-grid-container");
        mainBody.appendChild(colDiv);

        for(let j = 0; j < gridSize_n; j+=1) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("style", "border: 1px solid black; height : 25px; width : 25px;");
            newDiv.classList.add("row-grid-container");
            newDiv.addEventListener("mouseover",  markGrid);
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
}

function handleMouseUp (event) {
    mouseButtonStatus = 0;
}

function markGrid(event) {
    if (mouseButtonStatus) event.target.style.background = "black";
}

// Set function for reset button
const resetButton = document.querySelector("#grid-reset-button");
resetButton.addEventListener("click", resetGrid);

function resetGrid(event) { 
    while(mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    }
    generateGrid(gridSize_n);
}

// handleSlider
const gridSizeSlider = document.querySelector("#set-grid-size");
const gridSize_display = document.querySelector("#display-grid-size");

gridSizeSlider.addEventListener("input", handleSlider);
gridSizeSlider.addEventListener("change", resetGrid);

function handleSlider(event) {
    gridSize_n = event.target.value;
    gridSize_display.textContent = gridSize_n;

}