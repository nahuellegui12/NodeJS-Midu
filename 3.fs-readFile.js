const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
//readFileSync es la forma sincrona de leer el archivo
//readFile es la forma asincrona de leer el archivo
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //<------- Ejecutas este callback cuando termines de leer el archivo
    console.log('primer texto:', text);
});

console.log('----> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:', text);
});