const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
//readFileSync es la forma sincrona de leer el archivo
//readFile es la forma asincrona de leer el archivo
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto:', text);

console.log('----> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)