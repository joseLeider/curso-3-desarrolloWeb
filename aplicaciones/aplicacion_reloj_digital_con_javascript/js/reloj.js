// Definimos una función de flecha llamada mostrarReloj
const mostrarReloj = () => {
    // Creamos un objeto Date para obtener la fecha y hora actual
    let fecha = new Date();
    
    // Obtenemos la hora actual
    let hr = fecha.getHours();
    
    // Obtenemos los minutos actuales
    let min = fecha.getMinutes();
    
    // Obtenemos los segundos actuales
    let seg = fecha.getSeconds();
    
    // Insertamos la hora en el elemento con id 'hora' en formato HH:MM:SS
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
}

// Llamamos a mostrarReloj cada 1000 ms (1 segundo) para actualizar la hora en pantalla
setInterval(mostrarReloj, 1000);
