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
    cargarEgresos();
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
                        <!-- Icono que al hacer clic ejecuta la función eliminarIngreso con el id del ingreso -->
                        <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML; // Devuelve el HTML generado
}

// Función para eliminar un ingreso por su ID
const eliminarIngreso = (id) => {
    // Busca el índice del ingreso con el ID recibido
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    
    // Elimina el ingreso de la lista usando el índice
    ingresos.splice(indiceEliminar, 1);
    
    // Actualiza los datos del cabecero (resumen de ingresos/gastos)
    cargarCabecero();
    
    // Vuelve a cargar la lista de ingresos actualizada
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for(let egreso of egresos){ 
        egresosHTML += crearEgresoHTML(egreso); 
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=> {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id)=> {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

// Funcion para agregar un nuevo Ingreso o Egreso
let agregarDato = () => {
    // Obtiene el formulario con nombre 'forma'
    let forma = document.forms['forma'];
    // Obtiene el campo 'tipo' del formulario (ingreso o egreso)
    let tipo = forma['tipo'];
    // Obtiene el campo 'descripcion' del formulario
    let descripcion = forma['descripcion'];
    // Obtiene el campo 'valor' del formulario
    let valor = forma['valor'];

    // Verifica que la descripción y el valor no estén vacíos
    if(descripcion.value !== '' && valor.value !== ''){
        
        if(tipo.value === 'ingreso'){// Si el tipo es ingreso
            //Crea un nuevo ingreso y lo agrega al arreglo 'ingresos', convierte el valor a numero con el operador unario +
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            // Actualiza la parte superior (cabecero) de la vista
            cargarCabecero();
            // Muestra la lista de ingresos
            cargarIngresos();
        }else if(tipo.value === 'egreso'){// Si el tipo es egreso
            //Crea un nuevo egreso y lo agrega al arreglo 'egresos', convierte el valor a numero mediante la funcion Number
            egresos.push(new Egreso(descripcion.value, Number(valor.value)));
            // Actualiza la parte superior (cabecero) de la vista
            cargarCabecero();
            // Muestra la lista de egresos
            cargarEgresos();
        }


    }
}