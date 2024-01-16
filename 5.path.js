const path = require('node:path')

// barra separadora de carpetas segun Sistema Operativo
console.log(path.sep, "path uno")

//Unir rutas con path join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath, "file path")

//Nos devuelve el nombre del fichero
const base = path.basename('/tmp/test/subfolder/test.txt');
console.log(base, "path basename");

//Así le decimos que quite el .txt, o sea, la extencion
const fileBase = path.basename('/tmp/test/subfolder/test.txt', '.txt');
console.log(fileBase, "path basename");

//Nos devuelve la extensión
const extension = path.extname('/tmp/test/subfolder/test.txt');
console.log(extension, "path extension");