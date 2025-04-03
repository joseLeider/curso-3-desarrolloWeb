// La clase Ingreso hereda de la clase Dato
class Ingreso extends Dato {  

    // Se define una propiedad estática para contar los ingresos creados
    static contadorIngresos = 0; 

    // Constructor de la clase Ingreso
    constructor(descripcion, valor) {  
        // Llama al constructor de la clase padre (Dato) usando "super"
        super(descripcion, valor);  

        // Incrementa el contador de ingresos y asigna un ID único a cada instancia
        this._id = ++Ingreso.contadorIngresos;  
    }

    // Método getter para obtener el ID del ingreso
    get id() {  
        return this._id;  
    }
}