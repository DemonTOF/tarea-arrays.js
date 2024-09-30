// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Tu código aquí
    let primerElemento = pedido.shift() // quita y almacena el primer elemento
    pedido.unshift("bebida")            // añade el elemento "bebida" al inicio del array
    pedido.push(primerElemento)         // añade el elemento "nombreCliente" al final del array
    console.log(pedido)
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0
    // tu código aquí
    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i] % 2 === 0){
            suma = suma + numeros[i]
        }
    }
    return suma
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    // Tu código aquí
    // con (palabra.length - 1) tengo la posicion del ultimo caracter de la cadena y asi obtener ese caracter para compararlo con "a"
    const terminaConA = palabras.every(palabra => palabra[palabra.length - 1] === "a")
    return terminaConA
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    // Tu código aquí
    const newArray = words.reduce((accumulator, currentWord) => {  // uso el metodo .reduce() para poder acumular los valores del array a partir de la derecha de la cadena word
        if(words.indexOf(currentWord) > words.indexOf(word)){      // si la posicion de la cadena que se lee es mayor a la posicion de la cadena word entonces ya estiy posicionado donde estan los elementos a la derecha de la cadena word en el array
            return accumulator.concat(currentWord)
        }else{
            return accumulator
        }
    }, [])
    return newArray
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    // Tu código aquí
    let encontro
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            encontro = matrix[i][j] === "JavaScript"  // Aqui obtengo la condicion de igualdad para tener la posicion de "JavaScript" en el array
            if(encontro){
                return [i,j]
            }
        }
    }
    if(!encontro) return [-1,-1]
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    // Tu código aquí
    let posicionMayor = books.indexOf(Math.max(...books))  // obtengo el valor max del array con Math.max, y con .indexOf obtengo su posicion
    let posicionMenor = books.indexOf(Math.min(...books))  // obtengo el valor min del array con Math.min, y con .indexOf obtengo su posicion
    return [posicionMenor,posicionMayor]
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
