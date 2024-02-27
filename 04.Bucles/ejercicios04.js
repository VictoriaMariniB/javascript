function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
//cobntador ++ al valor q ya tiene le suma uno
//cobntador=contador+=1/contador=contador+1
//++contador
let contador = 0
 for( let i= 0; i < phrase.length; i++){
    if(phrase[i] === 'a'||phrase[i] === 'e'||phrase[i] === 'i'||phrase[i] === 'o'||phrase[i] === 'u'){
        contador++
    }
 }
 return contador
}

function primerDivisible(inicioDivisor, dividendo) {
// Encuentra el primer número divisible por 'inicioDivisor' a partir de un número dado utilizando un bucle while
// Tu código:👇
// dividendo%inicio divisor === 0
while (inicioDivisor <= dividendo ) {
 if( dividendo % inicioDivisor === 0){
    return inicioDivisor
 }
  inicioDivisor++;
}

}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= x);
return `El número X es: ${x}`
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let suma = 0
for (let i = 0; i <= num; i++) {
     suma += i; 
    }return suma
  }


function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
// 10 de decimal a binario 10/2 --> 5 y resto 0 . 5/2-- y y resto 1. 2/2
let binarioReverse = num.split('').reverse()
let decimal = 0;
for (let i = 0; i < binarioReverse.length; i++) {
    decimal += parseInt(binarioReverse[i]*2)**i;
} return decimal
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇

}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return "no es primo";
      }
    }
    return "es primo";
  }

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let cadenaInvertida = cadena.split('').reverse()
let unirArreglo = cadenaInvertida.join("")
return unirArreglo
} 
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}