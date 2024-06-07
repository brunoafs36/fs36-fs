//console.log('Script via body'), document.getElementById('n1')
;
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const conteudoDIV = document.querySelector('.resultado');

function soma() {
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    exibirResultado(resultado) 
}

function subtrair() {
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    exibirResultado(resultado) 
}

function Multiplicação() {
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    exibirResultado(resultado) 
}

function Divisão() {
    let resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
    exibirResultado(resultado) 
}

function exibirResultado(result) {
    conteudoDIV.style.display = 'flex'
    conteudoDIV.innerHTML = 'resultado: ' + result;
}

function Limpar()  {
    conteudoDIV.style.display = 'none'
    conteudoDIV.innerHTML = 'Resultado'
}



