// En esta parte creamos el eobjeto con su respetivo constructor 
class Estudiante{
    #nombre;
    #asignaturas;

    constructor(nombre,asignaturas){
        this.#nombre = nombre
        this.#asignaturas = asignaturas
    }
// En esta otra creamos el metodo obtener datos que retorna un mensaje con el nombre y asignatura
    obtenDatos(){
        return `Hola soy ${this.#nombre} y curso ${this.#asignaturas} en open bootcamp`
    }
}

// Aqui se crea una nueva insatancia de el estudiante con sus respectivos parametros
const Estudiante_2 = new Estudiante("Frank",["javascript","HTML","CSS"]);


// Por ultimo se llama el metodo obtener datos para obtener el valor de las variables y se pasa por consola su valor
datos= Estudiante_2.obtenDatos();
console.log(datos);