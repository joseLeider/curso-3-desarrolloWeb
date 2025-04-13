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
    cargarIngresos();// Llama a la función que muestra la lista de ingresos en pantalla
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
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto); // Muestra el presupuesto
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso); //Muestra el % de egresos
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos()); // Muestra el total de ingresos
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos()); // Muestra el total de egresos
}

// Función que da formato de moneda en dólares estadounidenses
const formatoMoneda = (valor) => {
    // Convierte el número a formato de moneda (USD) con 2 decimales
    return valor.toLocaleString('en-US', {
        style: 'currency',           // Estilo de formato: moneda
        currency: 'USD',             // Tipo de moneda: dólar estadounidense
        minimumFractionDigits: 2     // Mínimo de 2 cifras decimales
    });
}
// Función que da formato de porcentaje con 2 decimales
const formatoPorcentaje = (valor) => {
    // Convierte el número a formato de porcentaje con 2 cifras decimales
    return valor.toLocaleString('en-US', {
        style: 'percent',            // Estilo de formato: porcentaje
        minimumFractionDigits: 2     // Mínimo de 2 cifras decimales
    });
}

// Función para cargar y mostrar todos los ingresos en el HTML
const cargarIngresos = () => {
    let ingresosHTML = ''; // Variable para acumular el HTML de cada ingreso
    for(let ingreso of ingresos){ // Recorre cada objeto 'ingreso' del arreglo 'ingresos'
        ingresosHTML += crearIngresoHTML(ingreso); // Agrega el HTML generado para cada ingreso
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML; // Inserta el HTML en el contenedor con id 'lista-ingresos'
}

// Función que crea el HTML para un solo ingreso
const crearIngresoHTML = (ingreso)=> {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos"> <!-- Contenedor principal del ingreso -->
            <div class="elemento_descripcion">${ingreso.descripcion}</div> <!-- Muestra la descripción del ingreso -->
            <div class="derecha limpiarEstilos"> <!-- Contenedor del valor y botón -->
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div> <!-- Muestra el valor formateado como moneda -->
                <div class="elemento_eliminar"> <!-- Contenedor del botón de eliminar -->
                    <button class="elemento_eliminar--btn"> <!-- Botón de eliminar -->
                        <ion-icon name="close-circle-outline"></ion-icon> <!-- Icono del botón -->
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML; // Devuelve el HTML generado
}
