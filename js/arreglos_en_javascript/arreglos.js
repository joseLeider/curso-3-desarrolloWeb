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