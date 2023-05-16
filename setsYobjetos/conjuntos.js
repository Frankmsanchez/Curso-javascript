//Declaro un array y lo convierto a un set o conjunto
PrimArray= ["Kris","vale","Fer","yorle","Frank"];
PrimerSet = new Set(PrimArray) 
console.log(PrimerSet);

//Agrego mi nombre neuavmente con el metodo add e imprimo el resultado es el mismo que el original
PrimerSet.add("Frank");
console.log(PrimerSet);

//Modifico el set a añadiendo la palabra javascript
PrimerSet.add("Javascript")
console.log(PrimerSet);

