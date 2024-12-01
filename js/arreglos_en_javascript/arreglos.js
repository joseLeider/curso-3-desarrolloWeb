// Un arreglo es una estructura de datos que almacena una colección de valores, organizados en un orden especifico
// Puede contener diferente tipos de datos: números, cadenas, objetos, etc.
// Es dinámico, se puede agregar, eliminar o modificar elementos.

const colores = ['amarillo', 'azul', 'rojo', 'verde'];
console.log(colores);

// Acceder a los elementos del arreglo
console.log(colores[0]);
console.log(colores[3]);

// Recorrer los elementos del arreglo
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
    
}

// Modificar el valor de un elemento del arreglo
colores[2] = 'negro';
console.log(colores[2]);

// Agregar un nuevo elemento al arreglo
colores.push('Naranja');
console.log(colores);


// Otras formas de agregar elementos a un arreglo


// Muestra el número de elementos actuales en el arreglo
console.log(colores.length);
// Agrega el color "Cafe" al final del arreglo, aprovechando que colores.length siempre apunta al siguiente índice disponible.
colores[colores.length] = 'Cafe';
// Imprime el arreglo actualizado: ["Rojo", "Verde", "Azul", "Cafe"].
console.log(colores);


// No recomendable asignar directamente a un índice fuera de rango crea huecos con valores undefined en el arreglo. 

// Asigna "Morado" al índice 7. Esto crea un espacio vacío (undefined) en el índice 6.
colores[7] = 'Morado';
console.log(colores);


// Preguntar si es un array

// Método estático recomendado para comprobar si una variable es un arreglo. Por lo general, es más seguro.
// Funciona de manera confiable incluso si se utiliza en diferentes entornos (por ejemplo, iframes).
console.log(Array.isArray(colores)); // Pregunta si "colores" es un arreglo utilizando Array.isArray

// Comprueba si el objeto pertenece a la clase Array en el entorno actual.
// Puede fallar si se utiliza en diferentes contextos de ejecución (como iframes).
console.log(colores instanceof Array); // Pregunta si "colores" es una instancia de Array