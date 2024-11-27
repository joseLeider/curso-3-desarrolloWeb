// Un operador ternario es un operador condicional que evalúa una expresión y devuelve un valor verdadero o falso.
// El operador ternario es una forma de escribir un condicional if/else de forma abreviada.
// Es el unico operador en javaScript que tiene 3 operandos.
// ExpresionCondicional ? valorVerdadero : valorFalso
// Evalua la condicion booleana si es true o false, si es true ejecuta la expresión despues de (?) y si es falsa ejecuta la expresión después de (:)

let resultado = 1 > 2 ? "Verdadero" : "Falso";
console.log(resultado);

let numero = 70;
resultado = (numero % 2 == 0) ? "Numero Par" : "Numero Impar";
console.log(resultado);