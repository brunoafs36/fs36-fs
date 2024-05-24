let nome = 'Bruno Araújo';


//sem parametro faz sempre a mesma coisa
/*function converterMaiuscula() {
    return nome.toUpperCase();
    }
*/

//com parametro a função é reciclável, evita repetição de código
function converterMaiuscula(texto) {
    return texto.toUpperCase();
}

console.log(converterMaiuscula('Alex'))

