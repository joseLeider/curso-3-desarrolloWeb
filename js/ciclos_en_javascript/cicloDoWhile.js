/*Es una estructura de control que ejecuta un bloque de código al menos una vez, incluso si la condición es falsa desde 
el principio y luego repite mientras una condición sea verdadera */

let contador = 0;

do {
    console.log(contador);
    contador ++;
} while (contador < 3);

console.log("Fin ciclo do while");