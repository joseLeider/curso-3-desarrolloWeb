//! Funciones como objetos
// Las funciones en JavaScript son tratadas como objetos porque tienen propiedades y métodos, como arguments y toString().
// arguments: Es un objeto similar a un array que contiene los valores pasados a la función. Ayuda a manejar argumentos dinámicos.
// toString(): Convierte la función a texto para inspeccionar su código o documentar dinámicamente.


function miFuncion(a,b) {
    // 'arguments.length' muestra cuántos argumentos se pasaron a la función.
    console.log(arguments.length);
    return a**b;
}

resultado = miFuncion(4,3);
console.log(resultado);

// 'toString()' convierte la definición de la función a texto.
let miFuncionTexto = miFuncion.toString();
// Imprime la representación en texto de la función 'miFuncion'.
console.log(miFuncionTexto);