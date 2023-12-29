// Esto sólo en los modulos nativos
// que no tienen promesas nativas

// const { promosify } = require('node:util');
// const readFilePromise = promosify(fs.readFile);

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...');
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto', text)
console.log('----> HAcer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto', secondText)