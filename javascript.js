const mainBody = document.querySelector("#main-container");

const ROW_SIZE = 20;
const COL_SIZE = 20;

function generateGrid(row_size, col_size) {
    for(let i = 0; i < col_size; i+=1) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-grid-container");
        mainBody.appendChild(colDiv);

        for(let j = 0; j < row_size; j+=1) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("style", "border: 1px solid black; height : 25px; width : 25px;");
            newDiv.addEventListener("mouseover",  markGrid);
            colDiv.appendChild(newDiv);
        }
    
    }
    return 0;
};

generateGrid(ROW_SIZE,COL_SIZE);

// Track mouse button state
let mouseButtonStatus = 0; // Track mouse Satus

document.addEventListener("mousedown" , handleMouseDown);
document.addEventListener("mouseup" , handleMouseUp );

function handleMouseDown (event) {
    mouseButtonStatus = 1;
    event.preventDefault(); // prevent dragging of elements
}

function handleMouseUp (event) {
    mouseButtonStatus = 0;
}

function markGrid(event) {
    if (mouseButtonStatus) event.target.style.background = "black";
}

const resetButton = document.querySelector("#grid-reset-button");
resetButton.addEventListener("click", resetGrid);

function resetGrid(event) { 
    while(mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    }
    generateGrid(ROW_SIZE,COL_SIZE);
}