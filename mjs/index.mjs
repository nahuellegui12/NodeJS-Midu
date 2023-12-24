//.js -> por defecto utiliza CommonJS
//.mjs -> para utilizar ECMAScript modules
//.cjs -> para utilizar CommonJS

import {sum, mul, res} from "./sum.mjs";

console.log(sum(2,3));
console.log(mul(2,3));
console.log(res(2,3));