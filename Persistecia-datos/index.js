let nombre = "Frank";
let apellido = "Mora";

const datospersonales={
nombre,apellido
}
//sessionstorage codigo 
sessionStorage.setItem("Datos",JSON.stringify(datospersonales))

console.log(JSON.parse(sessionStorage.getItem("Datos")))

//codigo de local storage
localStorage.setItem("Datos",JSON.stringify(datospersonales))

console.log(JSON.parse(localStorage.getItem("Datos")))

//codigo para las cookies
let fecha = new Date()
let tiempoExpiracion = 2*60*1000;
let fechaexpiracion = new Date(fecha.getTime()+ tiempoExpiracion) 

document.cookie = "datospersonales={nombre:Frank,Apellido:Mora};expires="+ fechaexpiracion.toUTCString;

