document.addEventListener("DOMContentLoaded", function(){
    createContainer(32);
    console.log("hi");
})

function createContainer(size){
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}