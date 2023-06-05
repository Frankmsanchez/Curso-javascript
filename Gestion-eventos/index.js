const boton = document.getElementById("Btn")

boton.addEventListener("click",()=> alert("click en el boton"));

$("#Btn").on("click",()=> console.log("Hola, estoy utilizando jQuery"))