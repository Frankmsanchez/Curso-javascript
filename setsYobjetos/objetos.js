//objeto con datos personales
const DatosPersolaes ={
    nombre:"Frank",
    apellido:"Mora",
    edad:23,
    altura:1.58,
    "EresDesarrollador":true
};

//variable que contenga edads del objeto anterior
obtenerEdad = DatosPersolaes.edad;
console.log(obtenerEdad);

const nuevoObejeto=[
    DatosPersolaes,
    amigo1 = {
        nombre:"Esteban",
        apellido:"monge",
        edad:20,
        altura:1.65,
        "Eres desarrollador":false
    },
    amigo2 ={
        nombre:"kristin",
        apellido:"marin",
        edad:16,
        altura:1.55,
        "Eres desarrollador":false
    }
]
//funcion que orderna los datos tomando la edad  de mayor a menor
mayorAmenor = nuevoObejeto.sort((a,b)=> a.edad + b.edad )

console.log(mayorAmenor);




