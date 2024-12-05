let persona1 = {
    nombre: 'Juan',
    apellido: 'Sanchez',
    nombreCompleto:function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel; 
    }
}

let persona2 = {
    nombre: 'Juliana',
    apellido: 'Triana'
}

// Metodo Call
// Permite usar un método definido en un objeto (persona1) para trabajar con las propiedades de otro objeto (persona2).
// Es útil cuando queremos reutilizar métodos de un objeto en otro objeto que no tiene definido ese método.

// Invocamos el método 'nombreCompleto' desde persona1
console.log(persona1.nombreCompleto()); 
// Output: 'Juan Sanchez' (usa los valores de persona1)

// Usamos 'call' para invocar el método de persona1 con los datos de persona2
console.log(persona1.nombreCompleto.call(persona2)); 
// Output: 'Juliana Triana' (usa los valores de persona2 como 'this')

// Argumentos definidos para el objeto
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '2228354646')); 