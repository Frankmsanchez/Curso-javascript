//Utilizando la manera de importar archivos de ES6
import { suma,multiplica} from "./controller.js";
// impotacion de libreria chalk
import chalk from 'chalk';


console.log(suma(1,2));

//aqui utilizamos la libreria chalk para cmabiar el color mostrado por consola a verde
console.log(chalk.green(multiplica(4,5)));

