//! Funciones que mandan a llamar asi mismas
// Son funciones autoejecutables. Se definen y se llaman al mismo tiempo. Están envueltas en paréntesis para ejecutarse inmediatamente.
// Estan diseñadas para ejecutarse solo una vez en el momento en que se definen.
// No se reutilizan como las funciones anónimas o de expresión, que pueden ser llamadas múltiples veces.

(function (a,b) {
    console.log('Ejecutando la función: ', + (a+b));
})(8,6);