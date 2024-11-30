/*El continue se utiliza en los ciclos para saltar el resto del código en la iteración actual y pasar inmediatamente a la siguiente iteración.*/

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue; // El continue salta el resto del cuerpo del ciclo y pasa directamente a la siguiente iteración.
        console.log(contador); // Por lo tanto, console.log(contador) después de continue nunca se ejecuta.
    }
    // Solo se imprimen los números pares, porque los impares son "omitidos" debido al continue.
    console.log(contador);
}