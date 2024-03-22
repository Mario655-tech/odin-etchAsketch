const container = document.querySelector("#container");
const button = document.createElement("button")
button.classList.add("btn")
button.textContent = "Create Grid"
let row;
let box;
container.appendChild(button)

function createGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for (let j = 0; j < columns; j++) {
            box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
}

button.addEventListener("click", () => {
    removeRows()
    container.appendChild(button)
    let input = prompt("Size")
    createGrid(input, input)
    color()
})

function removeRows() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}



