// Es una estructura de control que repite un bloque de código mientras una condición específica sea verdadera.
// Se usa cuando no se sabe cuantas veces se debera ejecutar el ciclo.
// Es importante asegurarse de que la condición eventualmente se vuelva falsa para evitar ciclos infinitos.

let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador ++;
}

console.log("Fin ciclo while");