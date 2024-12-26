// const funcionFlecha = () => {
//     console.log('Saludos desde mi función flecha');
// }

// const funcionFlecha = () => console.log('Saludos desde la función flecha');

// funcionFlecha();

// const saludar = () => {
//     return 'Saludos desde mi función flecha';
// }

const saludar = () => 'Saludos desde mi función flecha';

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Ana', apellido: 'Vera'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');

// const funcionConVariosParametros = (num1, num2) => num1 + num2;

const funcionConVariosParametros = (num1, num2) => {
    let resultado = num1 + num2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(3,5));