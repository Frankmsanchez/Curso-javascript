//funcion sin parametros que devuelve true
function cierto(){
    return true
}
console.log(cierto());

//Una funcion asincrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function Asincrona(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Hola soy una promesa");
            resolve();
        },5000);
    });
}

async function imprimir(){
    await Asincrona();
}
imprimir();

//Una funcion generadora de indices pares automaticos por cada vez que se llama la funcion
function* generarid(){
    let valor = 0;

    while(true){
        yield valor;
        valor += 2;
    }
}

const nuevaID = generarid();
console.log(nuevaID.next().value);

console.log(nuevaID.next().value);

console.log(nuevaID.next().value);

console.log(nuevaID.next().value);

console.log(nuevaID.next().value);