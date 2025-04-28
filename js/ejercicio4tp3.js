/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/


//Funcion que determina si el numero es par o impar

function parOImpar(num){
    if(num % 2 === 0){
        return `El numero ${num} es PAR`;
    }else{
        return `El numero ${num} es IMPAR`;
    }
}

//Prompt para ingresar el numero

let numeroIngresado = parseInt(prompt('Ingresa un numero entero.'));

//llamar a la funcion y mostrar el resultaod

let resultado = parOImpar(numeroIngresado);

document.writeln(`<p>${resultado}</p>`)