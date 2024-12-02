//! Declaración clásica
function restar(a,b) {
    return a - b;
}

resultado = restar(3,4);
console.log(resultado);



/* Una función de tipo expresión es cuando defines una función  escrita como expresión y la asignas a una variable o constante en lugar de nombrarla directamente. */


//! Declaración función de tipo expresión
let sumar = function (a, b) {return a + b};

resultado = sumar(3,4);
console.log(resultado);





/* En una función de tipo expresión, puedes optar por no darle un nombre (anónima) o sí asignarle un nombre (nombrada). */

// Anónima
// No tiene nombre propio; solo se accede a través de la variable.
const multiplicar = function(a, b) {
    return a * b;
}

// Nombrada
// Tiene un nombre propio además de la variable a la que está asignada. Esto puede ser útil para depuración o llamadas internas dentro de la función.
// Aquí, divisionInterna solo se puede usar dentro de la misma función; fuera de ella, se usa sumar.
const division = function divisionInterna(a, b) { 
    return a / b;
}


// Diferencia clave
// Anónima: no tiene un identificador propio.
// Nombrada: tiene un identificador que puedes usar dentro de su alcance.
// En la mayoría de los casos, las funciones de tipo expresión son anónimas porque el nombre no suele ser necesario.
  