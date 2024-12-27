funcion1();
funcion2();

function funcion1(){
    console.log('funcion 1');
}

function funcion2(){
    console.log('funcion 2');
}

/*
    Un callback es una función que se pasa como argumento a otra función y que se ejecuta después de que esta última termine su tarea.
    Es útil para ejecutar código después de que una tarea específica haya terminado, especialmente en procesos asincrónicos,
    es decir tareas que se ejecutan en segundo plano, permitiendo que el programa siga funcionando sin esperar a que terminen.
    
    Ejemplo práctico:
    Si estás cargando datos de una API, un callback asegura que se procese esa información solo cuando la carga esté completa
*/

// Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje); // Muestra el mensaje recibido en la consola
}

// Función que realiza la suma y utiliza un callback
function sumar(num1, num2, imprimir){
    let resultado = num1 + num2; // Suma los números "num1" y "num2" y guarda el resultado
    imprimir(`Resultado: ${resultado}`); // Llama al callback "imprimir" con el mensaje del resultado
}

// Llamada a la función "sumar" con números y el callback "imprimir"
sumar(7, 2, imprimir); // Realiza la suma de 7 y 2, luego llama a "imprimir" con el resultado