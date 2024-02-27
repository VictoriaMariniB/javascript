// En los siguientes ejercicios deberás reemplazar el valor null
// por el correspondiente.

// Crea una variable de tipo string. // cadena de texto
const nuevoString = null;
// Crea una variable de tipo number.
const nuevoNumero = null;

// Crea una variable de tipo boolean.
const nuevoBoolean = null;

// Resuelve el siguiente problema matemático.
const nuevaResta = null - 7 === 3;

// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = null * 4 === 40;

// Resuelve el siguiente problema matemático.
const nuevoModulo = 21 % 5 === null;


function primerCaracter(string){
    //Por parametros se pasa una cadena de texto. Tienes que devolver el primer carácter!
    //Tu código:👇
 return string[0]// leonardo, viki, leo
}

function ultimoCaracter(string){
    //Por parámetros se pasa una cadena de texto. Tienes que devolver el primer carácter!
    //Tu código: 👇
 return string[string.length - 1]
}

function longitudDeCadena(string){
    //En este ejercicio tendrás que devolver la longitud de la cadena que se pasa por parámetros!
    //tu código: 👇
return string.length
}
// mayusc variable.toUpperCase() 
function enMayusculas(string){
    //Pasado el string por parámetros tendrás que devolver el mismo contenido del string
    //pero todo en mayúsculas
    //tu código: 👇

}

function enMinusculas(string){
    //Pasado el string por parámetros tendrás que devolver el mismo contenido del string
    //pero todo en minúsculas
    //tu código: 👇

}

function enlistandoNombres(args){
    //En el siguiente ejercicio se pasará por parámetros una cadena la cual contiene varios nombres
    //Ejemplo: Martin, Leonardo, Diego, Franco, Natalia
    //Tendrás que buscar un método el cual sirva para separarlos y crear una lista solo con los nombres!
    //Tu código: 👇

}

function typeOF(params){
    //Por parametros se pasan distintos tipos de datos, con esta funcion tendras que devolver distintos el tipo de dato que es.
    //Tu código:👇

}

module.exports = {
    nuevoString,
    nuevoBoolean,
    nuevoNumero,
    nuevaMultiplicacion,
    nuevoModulo,
    nuevaResta,
    ultimoCaracter,
    primerCaracter,  
    longitudDeCadena,
    enMayusculas,
    enMinusculas,
    enlistandoNombres,
    primerCaracter,
    typeOF,
}