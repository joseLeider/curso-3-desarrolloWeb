// Tipos primitivos: Son datos básicos como number, string, boolean, etc. que almacenan un valor simple y directo.

/* Paso por valor: Es la forma en que se manejan los tipos primitivos cuando se pasan como argumentos a una función.
Se pasa una copia del valor, no el valor original, por lo que los cambios dentro de la función no afectan la variable original.*/

/* Paso por referencia: Ocurre cuando se pasa la dirección de memoria de un objeto (como arreglos u objetos) a una función.
Esto significa que cualquier cambio realizado en la función afecta directamente al objeto original, porque ambos comparten la misma referencia.*/



// Creamos un objeto 'persona' con propiedades 'nombre' y 'apellido'
const persona = {
    nombre: 'Julian',
    apellido: 'Suarez'
};


// Definimos una función que recibe un objeto como argumento
function cambiarValorObjeto(pers) {
    // Modificamos las propiedades del objeto recibido
    pers.nombre = 'Carlos';
    pers.apellido = 'Diaz';
    // Estos cambios afectan directamente al objeto original
}


// Llamamos a la función pasando el objeto 'persona'
// Aquí se pasa la referencia al objeto, no una copia
cambiarValorObjeto(persona);


// Imprimimos el objeto 'persona'
// Las propiedades se han actualizado porque el objeto original fue modificado
console.log(persona); 
// Output: { nombre: 'Carlos', apellido: 'Diaz' }
