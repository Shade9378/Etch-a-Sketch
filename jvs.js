const container = document.querySelector("#container");

function createGrid(input) {
    for (let row = 0; row < input; row += 1){
        for (let column = 0; column < input; column += 1) {
            const divGrid = document.createElement("div");
            container.appendChild(divGrid);

            divGrid.addEventListener("mouseover", () => {
                divGrid.style.backgroundColor = "blue";
            })

            divGrid.style.width = 960/input + "px";
            divGrid.style.height = 960/input + "px";
        }
    }
}

function clear() {
    while (container.lastElementChild){
        container.removeChild(container.lastElementChild);
    }
}

function clearArt() {
    clear();
    createGrid(16);
}

const btt1 = document.querySelector(".btt1");
btt1.addEventListener("click", () => {
    clear();
    let input = prompt("Insert number of grids")
    if (input <= 100) {
        createGrid(input);
    }
    else {
        alert("Nope, can't do that");
    }
})

const btt2 = document.querySelector(".btt2");
btt2.addEventListener("click", clearArt);

createGrid(16);