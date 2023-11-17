// comentario en línea de código

/*comentario
de varias líneas de código*/

/* Variables

Tipos de datos:
undefined, (no existe un valor asignado, solo el nombre)
null, (no existe)
boolean, (verdadero y falso)
string, (representan cadnas de caracteres)
symbol, no se usa en el curso
number (numero en nuestro codigo)
y objetc objeto que nos va a relacionar estructura

camelcase: La primera letra es minuscula y las que siguen de las siguientes palabras va mayuscula
*/
var miVariable = "freeCodeCamp";
console.log(miVariable);

miVariable = 16;
console.log(miVariable);

miVariable = false;
console.log(miVariable);

var miNombre = "Estefania";

const miNombre = "Estefania"
console.log(miNombre);

/*Ejemplo*/

Var a;
var b = 2;

console.log(a); //undefined
console.log(b); //tiene un valor

a = 10; //de esta forma le estamos asignando un valor a "a"

// "=" es el operador de asignación en JavaScript

/*asignar el valor de una variable a otra variable*/

var a = 5;
var b = a;

console.log(a);
console.log(b);

// 5
// 5

var a = 5;
var b;

b = a;

console.log(a);
console.log(b);

// 5
// 5

/*Inicializar variables*/

var x = 9; //inicializando la variable
// es decir, estoy creando al mismo tiempo que le estoy asignando un valor

var miIdioma = "Español"

/*Variables no inicializadas*/

var a;
var b;

console.log(a); //undefined

a = 56;
console.log(a); //56

/*Mayusculas y Minúsculas*/

var miVariable = 5;

console.log(MIVARIABLE); //reference error.

//case-sensitive (es sensible a diferenciar entre mayusculas y minusculas)

/*Operaciones aritméticas*/

var suma = 7 + 12;

console.log(suma); //19

var resta = 15 - 5
console.log(resta); //10

resta = 5 - 15; // Negativo
console.log(resta); //-10

var producto = 5 * 3;
console.log(producto); //15

producto = 9 * 0;
console.log(producto); //0

var cociente = 20 / 2;
console.log(cociente); //10

cociente = 17 / 31;
console.log(cociente); //0,5361728

/*Decimales*/

var miNumeroDecimal = 23.4;

var peso = 78.34;

/*Multiplicar números decimales*/

var producto = 3.4 * 10.4;
console.log(producto); // 35.36

producto = 2.4 * 4;
console.log(producto); //9.6

/*Incrementar el valor de una variable*/

var librosComprados = 105;
console.log(librosComprados); //inicialmente 105

//me compre un libro más

//opción 1

librosComprados = librosComprados + 1;
console.log(librosComprados); // 106

//opción 2 , solo incrementa en 1

librosComprados++; // forma acortada para incrementar solo 1 unidad
console.log(librosComprados); //107

//reducir el valor de una variable

var numeroDeEstudiantes = 256

//opción 1

numeroDeEstudiantes = numeroDeEstudiantes - 1; //255

//opción 2 , solo reduce en 1

numeroDeEstudiantes--; //254

//Asignación de suma

var a = 23;
a = a + 5; //23+5=28

//mejor opci+on

a = a + 5; //en vez de esto, hariamos lo siguiente

a += 5; //28

//Asignación de resta

var b = 23
b -= 3;

console.log(b); //20

//Asignación multiplicación

var c = 6
c *= 2

console.log(c); //12

//Asignación de división

var d = 20
d /= 2

console.log(d); //10

//Variables con cadenas de caracteres (string)

var nombre = "Alan"; 
var apellido = 'Turing'; //ambas comillas son viable

//Escapar Comillas en cadena

var miCadena = "Soy una cadena de caracteres \"con comillas\""; //alt gr + ?
console.log(miCadena); // Soy una cadena de caracteres "con comillas"

// Comillas simples

var miMeta;
miMeta = "Aprender a programar con \"freeCodeCamp\""; //no
miMeta = 'Aprender a programar con "freeCodeCamp"'; // Asi si
miMeta = "Aprender a programar con 'freeCodeCamp'"; // Asi si

/* Secuencias de escape
Código | Resultado
-------------------
\'       Comilla simple
\"       Comilla doble
\\       Barra invertida
console.log("Estoy aprendiendo // JavaScript"); Estoy aprendiendo / JavaScript
\n       Línea nueva
console.log("Estoy aprendiendo: \n JavaScript");
Estoy aprendiendo:
JavaScript
\r       Retorno de carro
\t       Tabulación
\b       Retroceso
\f       Salto de página
...
*/

//Concatenar cadena de caracteres

var nombreCompleto = "Alan" + "Turing";
console.log(nombreCompleto); //AlanTuring

//opción 1

var nombreCompleto = "Alan " + "Turing";
console.log(nombreCompleto); //Alan Turing

var nombreCompleto = "Alan" + " Turing";
console.log(nombreCompleto); //Alan Turing

//opción 2

var nombreCompleto = "Alan" + " " + "Turing"; //concateno un espacio
console.log(nombreCompleto); //Alan Turing

//Construir cadenas con variables

var verbo = "programar";
var mensaje = "estoy aprendiendo a " + verbo;

console.log(mensaje); //Estoy aprendiendo a programar

var mensaje = "estoy aprendiendo a " + verbo + "con freeCodeCamp";
console.log(mensaje); //Estoy aprendiendo a programar con freeCodeCamp

//Agregar variables a cadenas de caracteres

var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con freeCodeCamp";

console.log(mensajeCompleto); //Estoy aprendiendo a programar

mensajeCompleto += parteFinal;

console.log(mensajeCompleto); //Estoy aprendiendo a programar con freeCodeCamp

//Longitud de una cadena de caracteres

var miCadena;
miCadena = "A";

console.log(miCadena.length); // 1 (correcto ya que contiene 1 solo caracter)
// Los espacios cuentan como cantidad de caracteres.

// Notación de corchetes: primer carácter

var lenguajeDeProgramacion = "JavaScript";

/*
Cadena:    J a v a S c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9
*/

console.log(lenguajeDeProgramacion[0]); //quiero acceder al primer caracter, entonces pongo el "0"
// me va a mostrar entonces en consola la "J"

//Inmutabilidad de cadena de caracteres (no podemos cambiar sus elementos)

var miCadena = "Jola, Mundo";
console.log(miCadena);

miCadena[0] = "H"; //Error

miCadena = "Hola, Mundo"; // Puedo cambiar toda la cadena completa

// Notación de corchetes para acceder a cualquier caracter de la cadena de caracteres

var miCadena = "JavaScrip"
console.log(miCadena [0]); // J
console.log(miCadena [1]); // a
console.log(miCadena [2]); // v

...

// Notación de corchetes: último carácter

var miCadena;

/*El último índice siempre es longitud -1 porque comenzamos a contar desde 0.

miCadena.lenght para "JavasScript" es 10.
El último índice es 9.
*/

console.log(miCadena.[miCadena.length - 1]) // t

// Notación de corchetes: de derecha a izquierda

var miCadena;
var n;

/* El penultimo indice es longitud -2 porque comenzamos a contar desde 0.

miCadena.lenght es 10. El penultimo indice es 8.

Cadena:    J a v a S c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9
*/

miCadena = "JavaScript";

console.log(miCadena[miCadena.length - 2]); // p
console.log(miCadena[miCadena.length - 3]); // i
console.log(miCadena[miCadena.length - 4]); // r

miCadena = "JavaScript";
n = 4;

console.log(miCadena - n); // r

//Palabras en blanco

var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

/* Concatena las cadenas para crear una cadena que muestre un mensaje. Puedes cambiar los valores de las variables.
Por ejemplo: 
El perro negró corrio rápidamente a la tienda.
La bicicleta pequeña voló a la tienda lentamente.
*/

var palabrasEnBlanco = "El " + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda.";

console.log(palabrasEnBlanco); // El perro negró corrio rápidamente a la tienda.

// práctica: 

var miSustantivo = "bicicleta";
var miAdjetivo = "pequeña";
var miVerbo = "voló";
var miAdverbio = "lentamente";

var palabrasEnBlanco = "La " + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " a la tienda " + miAdverbio + ".";

console.log(palabrasEnBlanco); //La  bicicleta pequeña voló a la tienda lentamente.

// Arreglos (Arrays)

var miArreglo = ["John", 24];
console.log(miArreglo); // ["John", 24]

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes); // ["Nora", "Gino", "Emily", "Juan"]

//Arreglos anidados

var listaDeEstudiantes = [["Nora", 97],["Gino", 78]]
console.log(listaDeEstudiantes); // ["Nora", 97],["Gino", 78]

//Acceder a los elementos de un arreglo

/*
Arreglo:    [10, 20, 30]
Índices:      0   1   2
*/

console.log(miArreglo[0]); // 10
console.log(miArreglo[1]); // 20
console.log(miArreglo[2]); // 30

var suma = miArreglo[0] + miArreglo[1] + miArreglo [2];
console.log(suma); // 60

var miArreglo = [10, 20, 30]

miArreglo[0] = 40; //le digo a JavaScript que en el indice 0 quiero que ahora diga 40 en vez de 10.

console.log(miArreglo); // 40, 20, 30

//Acceder a arreglos multidimensionales (arreglos anidados)

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
Arreglos:           [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:                 0          1          2
Índices internos:     0  1  2    0  1  2    0  1  2
*/

console.log(miArreglo[0]); // [1, 2, 3]
console.log(miArreglo[1]); // [4, 5, 6]
console.log(miArreglo[2]); // [7, 8, 9]

//Si quiero acceder al arreglo 6

console.log(miArreglo[1][2]) // 6

//Si quiero acceder al arreglo 8

console.log(miArreglo[2][1]) // 8

//.push() (sirve para añadir un elemento al final de un arreglo)

var estaciones;

estaciones = ["Invierno", "Otoño", "Primavera"];

estaciones.push("Verano");

console.log(estaciones); // ["Invierno", "Otoño", "Primavera", "Verano"]

//.pop() (sirve para remover el ultimo elemento del arreglo)

estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];

estaciones.pop();

console.log(estaciones); // ["Invierno", "Otoño", "Primavera"];
// a su vez retorna el elemento eliminado

var estaciones;
var estación;

estación = estaciones.pop() // (parentesis vacios para llamar al método)

console.log(estaciones); // ["Invierno", "Otoño", "Primavera"]
console.log(estacion); // Verano

//.shift() (remover el primer elemento del arreglo)

var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift();

console.log(estaciones); // ["Otoño", "Primavera", "Verano"]

// .unshift() (agregar un elemento al principio de un arreglo)

var estaciones = ["Invierno", "Otoño", "Primavera"];

estaciones.unshift("Verano");

console.log(estaciones); //["Verano", "Invierno", "Otoño", "Primavera"]

// Lista de compras (arreglos anidado)

var miListaDeCompras = [["Cereal", 3], ["Leche", 2], ["Galletitas", 4], ["Pan", 5], ["Gaseosa", 7], ["pollo", 7]];

console.log("voy a comprar " + " unidades de     .")

