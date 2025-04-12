// Creamos un arreglo de objetos 'Ingreso', con descripción y valor
const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500)
];

// Creamos un arreglo de objetos 'Egreso', con descripción y valor
const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

// Función principal que se ejecuta al cargar la app
let cargarApp = () => {
    cargarCabecero(); // Llama a la función que actualiza el encabezado (presupuesto, ingresos y egresos)
}

// Calcula el total de todos los ingresos
let totalIngresos = () => {
    let totalIngreso = 0; // Inicializa la suma de ingresos
    for(let ingreso of ingresos){         // Recorre cada objeto ingreso
        totalIngreso += ingreso.valor;    // Suma el valor del ingreso al total
    }
    return totalIngreso; // Devuelve la suma total
}

// Calcula el total de todos los egresos
let totalEgresos = () => {
    let totalEgreso = 0; // Inicializa la suma de egresos
    for(let egreso of egresos){          // Recorre cada objeto egreso
        totalEgreso += egreso.valor;     // Suma el valor del egreso al total
    }
    return totalEgreso; // Devuelve la suma total
}

// Actualiza los elementos HTML con el resumen financiero
let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos(); // Calcula el presupuesto restante
    let porcentajeEgreso = totalEgresos() / totalIngresos(); // Calcula el porcentaje gastado
    document.getElementById('presupuesto').innerHTML = presupuesto;        // Muestra el presupuesto
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;    // Muestra el porcentaje de egresos
    document.getElementById('ingresos').innerHTML = totalIngresos();       // Muestra el total de ingresos
    document.getElementById('egresos').innerHTML = totalEgresos();         // Muestra el total de egresos
}
