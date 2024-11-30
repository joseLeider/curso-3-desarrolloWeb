// El propósito del break en ese ciclo for es terminar la ejecución del ciclo inmediatamente cuando se cumple una condición específica.

for (let contador = 0;  contador <= 10; contador ++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break;
    }
}

console.log("Fin del ciclo for");