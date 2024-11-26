let a = 3, b = 2, c = "3";

let z = a == c; // Compara el valor sin importar el tipo de dato
console.log(z); // true

z = a === c; // Compara los valores y su tipo de dato
console.log(z); // false