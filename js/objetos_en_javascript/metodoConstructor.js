// Metodo constructor: Es una función especial utilizada para inicializar un objeto. En este caso, Persona es el constructor.
// Permite crear múltiples objetos del mismo tipo (en este caso, personas) con propiedades personalizadas.
// Evita escribir manualmente cada objeto, ya que el constructor lo hace dinámicamente según los parámetros dados.

// Definimos una función constructor para crear objetos de tipo 'Persona'
function Persona(nombre, apellido, email){
    // 'this' asigna valores a las propiedades del objeto que se está creando
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email; // Propiedad 'email', inicializada con el parámetro 'email'
    // Agregar metodo al metodo constructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido; 
    }
}

// Creamos un nuevo objeto 'padre' usando la función constructor
let padre = new Persona('Juan', 'Perez', 'perez@gmail.com');
console.log(padre);

// Creamos otro objeto 'madre' con diferentes valores
let madre = new Persona('Sofía', 'Ruiz', 'ruiz@gmail.com');
console.log(madre);

// Modificamos la propiedad 'nombre' del objeto 'padre'
padre.nombre = 'Fernando';

// Revisamos el valor retornado del metodo agregado al metodo constructor
console.log(padre.nombreCompleto());

// 'madre' no se ve afectado, ya que es un objeto independiente
console.log(madre);


// Distintas formas de crear objetos en javascript

let miObjeto1 = new Object();
let miObjeto2 = {}; // Recomendable

let miCadena1 = new String('Hola');
let miCadena2 = 'Hello';

let miNumero1 = new Number(7);
let miNumero2 = 4;

let miBoolean1 = new Boolean(false);
let miBoolean2 = true;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function(){};