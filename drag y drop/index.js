const secciones = document.querySelectorAll(".seccion");

const parrafos = document.querySelectorAll(".parrafo")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.info("empiezo de arrastre");
        console.log("Estoy arrastrando el un parrafo" + parrafo.innerText);

        parrafo.classList.add("dragging");

        event.dataTransfer.setData("id", parrafo.id);

        const elementoFantasma = document.querySelector(".imagen");
        event.dataTransfer.setDragImage(elementoFantasma, 0, 0);
    })
    parrafo.addEventListener("dragend", () => {
        console.info("Fin del arrastre");
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();

        event.dataTransfer.dropEffect = "copy";
    })

    seccion.addEventListener("drop", event => {
        console.info("Drop")
        const idparrafo = event.dataTransfer.getData("id");
        console.log(`Párrafo id:  ${idparrafo}`);
        const parrafo = document.getElementById(idparrafo)

        if (seccion.classList.contains('papelera')) {
            parrafo.remove()
        } else {

            seccion.appendChild(parrafo);
        }
    })
})

    const papelera = document.querySelector("#papelera");

    papelera.addEventListener("drop", e =>{
        const idparrafo = e.dataTranfer.getData("id");
        console.log(`parrafo id: ${idparrafo}`);
        const parrafo = document.getElementById(idparrafo);
        parrafo.remove;
    })