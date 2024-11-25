// Tipo de datos string
var nombre = "Felipe";
console.log(typeof nombre);

// Variable dinamica, es posible cambiar los valores y los tipos de datos de una variable
nombre = 10;
// typeof nos refleja el tipo de dato actual de la varible
console.log(typeof nombre);


// Tipo de dato numerico
var numero = 1000;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre : "Adriano",
    apellido : "ruiz",
    telefono : 45313668
}
console.log(typeof objeto);

// Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// Tipo undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);

// Tipo de dato object: null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

// Tipo de dato object: array
var autos = ['BMW', 'Audi', 'Volvo']
console.log(autos);
console.log(typeof autos);

// Tipo de dato string:  empty string
var z = '';
console.log(z);
console.log(typeof z);