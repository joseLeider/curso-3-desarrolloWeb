let a = 3, b = 2;

let z = a + b;


// Incremento


// Pre-incremento (el operador ++ antes de la variable)
z = ++a; // a se incrementa primero (a = 4), luego su valor se asigna a z
console.log(a); // Imprime 4 (el nuevo valor de a)
console.log(z); // Imprime 4 (el valor asignado a z)


// Post-incremento (el operador ++ despues de la variable)
z = b++; // b se asigna primero a z (z = 2), luego b se incrementa (b = 3)
console.log(b); // Imprime 3 (el nuevo valor de b después del incremento)
console.log(z); // Imprime 2 (el valor de b antes del incremento)



// Decremento


// Pre-decremento
z = --a; // a se decrementa primero (a = 3), luego su valor se asigna a z
console.log(a); // Imprime 3 (el nuevo valor de a)
console.log(z); // Imprime 3 (el valor asignado a z)

// Post-decremento
z = b--; // b se asigna primero a z (z = 3), luego b se decrementa (b = 2)
console.log(b); // Imprime 2 (el nuevo valor de b después del decremento)
console.log(z); // Imprime 3 (el valor de b antes del decremento)