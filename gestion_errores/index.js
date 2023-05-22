const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    transports: [
        new winston.transports.File({ filename: 'error.log' })
    ]
});

function errorCustom(mensaje) {
    logger.error(mensaje);
    throw new Error(mensaje);
}

try {
    errorCustom("Este es mi mensaje de error personalizado.");
} catch (error) {
    console.error(`Algo salido mal el error es: ${error.mensaje}`);
}
