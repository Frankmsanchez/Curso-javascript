// variable con altura en centimetros numero entero 
alt_cent = 157
console.log(alt_cent);

//variable con altura en metros  
alt_metros = 1.57
console.log(alt_metros);

//varaible con el peso en kilogramos tipo flotante
peso_kg = 40.3
console.log(peso_kg);

//variable que contiene altura en metros redondeada hacia arriba

alt_redondeada = Math.ceil(alt_metros)
console.log(alt_redondeada);

//variable que contenga el peso en kilogramos redondeado hacia abajo
peso_redondeado = Math.floor(peso_kg)
console.log(peso_redondeado);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
numero_max = Number.MAX_SAFE_INTEGER;
Suma_maxima = numero_max + 1;

comparacion = (numero_max === Suma_maxima);

console.log(comparacion);