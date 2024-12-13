// "use strict"; fomenta mejores prácticas, reduce errores y ayuda a escribir un código más robusto. Se recomienda activarlo en la mayoría de los casos.

"use strict"; // Todo el archivo está en modo estricto.

let x = 10;
console.log(x);

miFuncion();

function miFuncion(){
    y = 12; // y no esta definida, el modo estricto obliga definir las variables
    console.log(y);
}

function myFunction() {
    "use strict";
    // Solo esta función está en modo estricto.
    let z = 10;
}

myFunction();