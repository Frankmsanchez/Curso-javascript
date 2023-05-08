numero = 10;
let resultado = 1;
let i = 2;
while (true) {
    if (i >= numero) {
        break;
    }
    resultado *= i;
    i++;
    console.log(resultado);
}