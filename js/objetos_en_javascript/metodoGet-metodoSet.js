// El getter (get) es una propiedad especial que actúa como una función dentro de un objeto, pero se accede como si fuera una propiedad.
// Su propósito es calcular y devolver un valor dinámicamente al momento de accederlo, sin necesidad de llamarlo como una función.
let persona = {
    nombre: 'Pablo',
    apellido: 'Ruiz',
    email: 'ruiz@gmail.com',
    edad: 45,
    // Definimos un getter para calcular el nombre completo
    get nombreCompleto(){ // Agregando un metodo en el objeto
        // El getter devuelve una combinación dinámica de 'nombre' y 'apellido'
        return this.nombre + ' ' + this.apellido;
    }
}
// Imprimimos la propiedad 'nombreCompleto' del objeto
console.log(persona.nombreCompleto); 
// Output: 'Pablo Ruiz'
// Aunque 'nombreCompleto' es un método, se accede como si fuera una propiedad normal, sin paréntesis ().