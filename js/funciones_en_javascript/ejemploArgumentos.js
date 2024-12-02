let resultado = sumarTodo(5, 6, 7, 12, 8);
console.log(resultado);

function sumarTodo() {
    let suma = 0;
    // Iteramos sobre todos los argumentos pasados a la función.
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; // Sumamos el valor de cada argumento al total.
    }
    return suma;
}