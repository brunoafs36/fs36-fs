//console.log('Script via body'), document.getElementById('n1')

function soma() {
    // Pegar os números do inputs do HTML e converter para Float, pois será possível fazer o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = numero1 + numero2



    //console.log(numero1, numero2);
    console.log(resultado);

    //Pegando o elemento HTML e colocando na variavel conteudo DIV
    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    // Pegando o conteudoDIV acessando a prop innerHTML e inserindo o valor calculo, a variavel
    conteudoDIV.innerHTML = resultado
}

function subtrair() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = numero1 - numero2

    console.log(resultado);

    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado
}

function Multiplicação() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = numero1 * numero2

    console.log(resultado);

    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado
}

function Divisão() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = numero1 / numero2

    console.log(resultado);

    let conteudoDIV = document.getElementsByClassName('resultado')[0];

    conteudoDIV.innerHTML = resultado
}




