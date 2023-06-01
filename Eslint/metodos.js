
let nombre = "Frank";
let apellido = "Mora";
//metodo de concatenacion de strings
Estudiante = `${nombre} ${apellido}`;
console.log(Estudiante);

// funcion toUppercase muestra todo el texto mayuscula
EstudianteMayus = Estudiante.toUpperCase();

console.log(EstudianteMayus);

//funcion tolowercase muestra todo el texto minuscula
EstudianteMinus = Estudiante.toLowerCase();

console.log(EstudianteMinus);

// funcion lenght da la longitud de toda la cadena de texto
Est_lengh = Estudiante.length;

console.log(Est_lengh);

//La variale contiene la primera letra de la cadena nombre
inicia_con = nombre[0];

console.log(inicia_con);

//la variable contiene la ultima letra de apellido
terminaEn = apellido[3]

console.log(terminaEn);
//eliminar esapcios en una cadena usando replace y expresiones regulares
sin_esapcios = Estudiante.replace(/\s+/g, '');

console.log(sin_esapcios);

//funcion includes que idica si nombre esta contenido en la variable estudiante
estaContenido = Estudiante.includes(nombre);

console.log(estaContenido);



