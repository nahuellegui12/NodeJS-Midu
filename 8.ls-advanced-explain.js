// Importa el módulo 'fs/promises' de Node.js para trabajar con operaciones de sistema de archivos de forma asíncrona.
const fs = require('node:fs/promises');

// Obtiene el segundo argumento pasado en la línea de comandos (argv[2]), que se espera que sea la ruta del directorio.
// Si no se proporciona ningún argumento, se asigna el valor por defecto '.' (el directorio actual).
const folder = process.argv[2] ?? '.'

// Imprime un mensaje indicando que se está leyendo el directorio especificado.
console.log(`Leyendo el directorio ${folder}`);

// Utiliza la función readdir del módulo fs para leer el contenido del directorio de forma asíncrona.
// Esta función devuelve una promesa que se resuelve con un array de nombres de archivos en el directorio.
fs.readdir(folder)
    .then(files => {
        // Cuando la promesa se resuelve, itera sobre el array de nombres de archivos y los imprime en la consola.
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        // Si ocurre un error al leer el directorio, imprime un mensaje de error en la consola.
        console.error('Error al leer el directorio', err)
        return;
    })
