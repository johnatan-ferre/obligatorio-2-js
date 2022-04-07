//Manejo del DOM y Eventos.

let nuevoLibro = document.getElementById("libro");

let btnAdd = document.getElementById("add");
let lista = document.getElementById("lista");

function addLibro(libro) {
    let li = document.createElement("li");
    li.addEventListener("click", () => {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through"
        }
    })
    li.textContent = (libro);
    lista.appendChild(li);
}

btnAdd.addEventListener("click", () => {
    let libro = nuevoLibro.value;
    addLibro(libro);
    nuevoLibro.value = "";
})

nuevoLibro.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        let libro = nuevoLibro.value;
        addLibro(libro);
        nuevoLibro.value = "";
    }
})