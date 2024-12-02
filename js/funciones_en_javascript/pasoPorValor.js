// Declaramos una variable 'x' de tipo primitivo (número)
let x = 10; 

// Definimos una función que recibe un parámetro 'a'
function cambiarValor(a) {
    // Asignamos un nuevo valor al parámetro 'a'
    a = 25;
    // Esta asignación no afecta la variable original 'x' fuera de la función
}

// Paso por valor

// Llamamos a la función pasando 'x' como argumento
// Aquí se pasa una copia del valor de 'x' (10), no la variable en sí
cambiarValor(x);

// Imprimimos el valor de 'x'
// Como 'x' no fue modificado dentro de la función, sigue siendo 10
console.log(x); // Output: 10

// Intentamos imprimir 'a'
// Esto arroja un error porque 'a' es una variable local a la función y no existe fuera de ella
console.log(a); // Error: a is not defined
