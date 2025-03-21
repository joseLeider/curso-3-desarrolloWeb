console.log('aplicación Calculadora');

function sumar(){
    // Obtiene el formulario por su ID
    const forma = document.getElementById('forma');

    // Obtiene los elementos input del formulario por su atributo "name"
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    // Extrae los valores de los elementos input, los convierte a enteros y los suma
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    // Verifica si el resultado no es un número y asigna un mensaje de error
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }

    // Actualiza el resultado en el elemento con ID 'resultado'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;

    // Muestra el resultado en la consola
    console.log(`Resultado: ${resultado}`);
}
