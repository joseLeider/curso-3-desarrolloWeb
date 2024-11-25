//! Se instala la extensión Quokka Statusbar Buttons ya que es un complemento que añade botones en la barra de estado para controlar Quokka.js (iniciar, detener, configurar) de forma más rápida y visual.

// La concatenación se realiza de izquierda a derecha

var nombre = 'Esteban';
var apellido = 'Pelaez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Rios';
console.log(nombreCompleto2);

// Si encuentra en primer lugar una cadena, se concatena lo demas como cadena
var x = nombre + 2 + 4;
console.log(x);

// Si encuentra en primer lugar una cadena, pero posteriormente entre parentesis una operación, entonces se realiza la operacion primero como prioridad y luego se concatena.
x = nombre + (2 + 4);
console.log(x);

// Si encuentra en primer lugar numeros se suma los valores y se concatena luego las cadenas
x = 2 + 4 + nombre;
console.log(x);