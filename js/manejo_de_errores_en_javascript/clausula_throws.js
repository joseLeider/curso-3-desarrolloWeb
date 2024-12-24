'use strict'

let resultado = -4;

/* 
    Una excepción es un error que ocurre durante la ejecución de un programa y que interrumpe el flujo normal del código. Se pueden generar de dos formas:
    Automáticamente: Cuando el programa encuentra un error inesperado, como una división por cero, intentar acceder a una variable no definida, o errores de sintaxis.
    Manualmente (throw): Cuando tú decides generar una excepción, sirve para validar datos y generar errores si son inválidos.
*/

try {
    // x = 10;
    // Verifica si la variable resultado no es un número. Si no es númerico devuelve true y lanza la excepción con el mensaje.
    if(isNaN(resultado)) throw 'No es un número';
    // else if(resultado >= 0) throw 'Valor positivo';
    // else if(resultado < 0) throw 'Valor negativo';
    console.log('El resultado es: ', resultado);
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}finally{
    console.log('Termina revisión de errores');
}