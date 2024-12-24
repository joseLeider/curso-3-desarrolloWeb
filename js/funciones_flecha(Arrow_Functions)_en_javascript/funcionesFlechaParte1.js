// Una función es un bloque de código reutilizable que realiza una tarea específica. 
// Puede definirse de varias formas y ser llamada en cualquier momento.

// Función clásica: Se declara usando la palabra clave "function". 
// Permite el hoisting, por lo que puede ser llamada antes de su declaración.
function funcionClasica() {
    console.log('Saludos desde la función clásica');
}

// Función anónima: No tiene nombre propio. 
// Se asigna normalmente a una variable o se pasa como argumento. 
// No permite el hoisting, por lo que debe ser declarada antes de llamarla.
let funcionAnonima = function () {
    console.log('Saludos desde la función anónima');
}

// Función de flecha (arrow function): Es una sintaxis más compacta introducida en ES6. 
// No permite el hoisting y no tiene su propio `this`, 
// lo que la hace ideal para funciones de callback y contextos específicos.
const funcionFlecha = () => {
    console.log('Saludos desde la función flecha');
}

/*
    Las funciones anónimas y flecha se comportan como expresiones, no estan declaradas directamente ya que son asignadadas
    a una variable o utilizadas como valores dentro de una expresión. No se levantan al inicio del código.
    Solo se puede acceder después de que se evalúa la expresión en la que se definen.
    Una función como expresión forma parte de algo más, como una asignación a una variable, un objeto, un argumento, etc.
*/

funcionClasica(); // Se puede mandar a llamar a la función antes de haberla definido
funcionAnonima(); // Solo se puede mandar a llamar la función despues de haberla definido
funcionFlecha(); // Solo se puede mandar a llamar la función despues de haberla definido

/* 
    El hoisting en JavaScript es un comportamiento del lenguaje que mueve las declaraciones de variables, funciones y clases a la parte superior de su alcance, antes de que se ejecute el código. 
    Esto permite usarlas antes de que se declaren.
*/