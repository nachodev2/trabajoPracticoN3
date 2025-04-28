/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

//Funcion que analiza una cadena de texto

function cadenaTexto (cadena){
    if(cadena === cadena.toUpperCase()) {
        return `La cadena esta formada solo por MAYUSCULAS.`;
    }else if(cadena === cadena.toLowerCase()) {
        return `La cadena esta formada solo por MINUSCULAS.`;
    }else{
        return `La cadena esta formada por una combinacion de MAYUSCULAS y MINUSCULAS`
    }
}

const textoIngresado = prompt('Ingresa una cadena de texto');

const resultado = cadenaTexto(textoIngresado);

document.writeln(`<p>${resultado}</p>`)