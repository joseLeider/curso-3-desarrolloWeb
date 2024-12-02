//! Declaracion función de tipo flecha

// ¿Qué es una función flecha? Es una sintaxis más corta para declarar funciones.
// No necesita la palabra clave function.
// Si el cuerpo tiene una sola línea, no requiere {} ni return.

// ¿Para qué sirve? Simplifica el código, haciéndolo más legible.
// Ideal para funciones cortas y expresiones simples.

// Si no usas const (o let o var), la función flecha no se almacena en una variable ni se puede acceder después de su declaración.
const resto = (a,b) => a % b;
resultado = resto(7,3);
console.log(resultado);