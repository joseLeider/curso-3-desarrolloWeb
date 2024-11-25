// Declaraciones para crear variables

// var: Declara variables con alcance de función, permite redeclaraciones lo cual podria traer problemas.
// let: Declara variables con alcance de bloque, evita redeclaraciones y es más seguro que var.
// const: Declara constantes con alcance de bloque, su valor no puede cambiar (pero los objetos pueden ser modificados).

// Declaracion de una variable con var
var edad;
edad = 25;
console.log(edad);

// Se puede volver a declarar la variable 'edad' con alcance global lo cual traeria problemas.
var edad = 37;
console.log(edad);

// Declaracion de una variable con let
let nombre;
nombre = "Juan";
console.log(nombre);

// No se puede volver a declarar la variable 'nombre' con alcance de bloque.
let nombre = "Alfonso";
console.log(nombre);

// Declaracion de una variable con const
const apellido = "Rios";
apellido = "berrio"; // No se puede reasignar a una constante