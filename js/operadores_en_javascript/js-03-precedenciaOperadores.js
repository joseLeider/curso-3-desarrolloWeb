let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);

/* 
La precedencia de operadores sigue un orden y en este caso se aplico de la siguiente manera:

 Paréntesis ( )
 Multiplicación *, División / y Módulo % (de izquierda a derecha)
 Suma + y Resta - (de izquierda a derecha). 
*/