//Se declara el array y luego se le agrega un elemento con push
const compra =["leche","huevos","arroz","azucar","Atun"];
compra.push("Aceite de  Girasol")
console.log(compra);

//Este metodo elimina el ultimo elemento de un array
compra.pop()
console.log(compra);

//nuevo Array lista de peliculas favoritas

const pelisFavoritas = [
    {
        titulo:"The avengers",
        Director:"joss whedon",
        Fecha:new Date("2012-04-11")
    },

    {
        titulo:"Harry Potter y la Piedra Filosofal",
        Director:"Chris Columbus",
        Fecha:new Date("2001-11-16")
    },

    {
        titulo:"Viaje al centro de la Tierra",
        Director:"Eric Brevig",
        Fecha:new Date ("2008-07-11")
    }
]

//Esta lista contiene las peliculas posteriores al 1 enero de 2010
pelisnuevas = pelisFavoritas.filter(pelicula => pelicula.Fecha > new Date("2010-1-1"));

console.log(pelisnuevas);

//Lista nueva que toma las lista de driectores de la lista original.
directores = pelisFavoritas.map(direct => direct.Director);

console.log(directores);

//nueva lista que contenga los titulos de las lista original
titulos = pelisFavoritas.map(title => title.titulo)
console.log(titulos);

//nueva lista que concatene la lista de directores y la lista de los títulos utilizando concat.
newList = directores.concat(titulos)

console.log(newList);

//nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
nuevoListprop = [...directores,...titulos]

console.log(nuevoListprop);
