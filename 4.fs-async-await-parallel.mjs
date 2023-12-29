// Esto sólo en los modulos nativos
// que no tienen promesas nativas

// const { promosify } = require('node:util');
// const readFilePromise = promosify(fs.readFile);

import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'), //Lee los dos archivos en paralelo y cuando termina de leerlos muestra el resultado
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto', text)
    console.log('segundo texto', secondText)
})