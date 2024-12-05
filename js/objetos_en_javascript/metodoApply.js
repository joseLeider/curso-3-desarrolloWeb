let persona1 = {
    nombre: 'Juan',
    apellido: 'Sanchez',
    // En el método nombreCompleto del objeto persona1, los argumentos titulo y tel son parámetros adicionales que complementan el resultado devuelto por la función. 
    nombreCompleto:function(titulo, tel){
       return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel; 
       // titulo: Representa un título o prefijo para el nombre (por ejemplo, "Sr.", "Dr.", etc.).
       // tel: Representa un número de teléfono asociado con la persona.
       
       // La función utiliza this para acceder a las propiedades nombre y apellido del objeto actual y construye un string que incluye el título, el nombre completo, y el número de teléfono.
    }
}

let persona2 = {
    nombre: 'Juliana',
    apellido: 'Triana'
}


// Metodo Apply


// Invocamos el método 'nombreCompleto' desde persona1
console.log(persona1.nombreCompleto('Profesor', '11458664')); 

// Usando `call` (argumentos separados)
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '2228354646')); 

// Definimos un arreglo con valores, para pasarlo como argumento
let arreglo = ['Ingeniero', '345486486'];

// Usamos 'apply' para invocar el método de persona1 con los datos de persona2 y el arreglo
// Usando `apply` (argumentos como array)
console.log(persona1.nombreCompleto.apply(persona2, arreglo));


// La diferencia principal entre call y apply radica en cómo se pasan los argumentos a la función.