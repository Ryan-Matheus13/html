let tela = document.getElementById('tela')

let calculo = {
    valor1: 0,
    valor2: 0,
    valorSalvo: null,
    operacao: null
}

window.addEventListener('load', function(){
    atribuirEventos()
})

function inserirNumero(){
    if(isNaN(tela.value)) {
        tela.value = event.target.textContent
    }else {
        if(tela.value == 0) {
            tela.value = event.target.textContent
        }else {
            tela.value += event.target.textContent
        }
    }
}

function atribuirEventos() {
    document.getElementById('btnValor9').addEventListener('click', inserirNumero)
    document.getElementById('btnValor8').addEventListener('click', inserirNumero)
    document.getElementById('btnValor7').addEventListener('click', inserirNumero)
    document.getElementById('btnValor6').addEventListener('click', inserirNumero)
    document.getElementById('btnValor5').addEventListener('click', inserirNumero)
    document.getElementById('btnValor4').addEventListener('click', inserirNumero)
    document.getElementById('btnValor3').addEventListener('click', inserirNumero)
    document.getElementById('btnValor2').addEventListener('click', inserirNumero)
    document.getElementById('btnValor1').addEventListener('click', inserirNumero)
    document.getElementById('btnValor0').addEventListener('click', inserirNumero)
    document.getElementById('apagar').addEventListener('click', limparDados)
    document.getElementById('adicao').addEventListener('click', clicarOperador)
    document.getElementById('subtracao').addEventListener('click', clicarOperador)
    document.getElementById('multiplicacao').addEventListener('click', clicarOperador)
    document.getElementById('divisao').addEventListener('click', clicarOperador)
    document.getElementById('limpar').addEventListener('click', limpar)
    document.getElementById('potencia').addEventListener('click', clicarOperador)
    document.getElementById('virgula').addEventListener('click', inserirPonto)
    document.getElementById('igual').addEventListener('click', clicarResultado)
}

function soma(valor1, valor2) {
    return valor1 + valor2
}

function subtracao(valor1, valor2) {
    return valor1 - valor2
}

function multiplicacao(valor1, valor2) {
    return valor1 * valor2
}

function divisao(valor1, valor2) {
    return valor1 / valor2
}

function potencia(valor1, valor2) {
    return valor1 ** valor2
}

function limparDados(){
    tela.value = '0'

    calculo.valor1 = 0
    calculo.valor2 = 0
    calculo.valorSalvo = null
    calculo.operacao = null
}

function limpar(){
    tela.value = '0'
}

function inserirPonto(){
    if(tela.value === "" || isNaN(tela.value)){
        tela.value = "0."
    }else if(!tela.value.includes(".")){
        tela.value = tela.value + "."
    }
}

function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.operacao = soma
    } else if(operador == "-"){
        calculo.operacao = subtracao
    } else if(operador == "x"){
        calculo.operacao = multiplicacao
    } else if(operador == "÷") {
        calculo.operacao = divisao
    } else {
        calculo.operacao = potencia
    }
}

function clicarOperador() {
    if(!isNaN(tela.value)){
        calculo.valor1 = Number(tela.value);
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    tela.value = operador;
}

function clicarResultado() {
    if(!isNaN(tela.value) && calculo.operacao != null){
        let resultado = calculo.operacao(calculo.valorSalvo, Number(tela.value));

        tela.value = resultado;
        calculo.valorSalvo = resultado;

        calculo.operacao = null;
    }
}

function clicarOperador() {
    if(!isNaN(tela.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(tela.value);
        }else if(calculo.operacao != null){
            calculo.valorSalvo = calculo.operacao(calculo.valorSalvo, Number(tela.value));
        }
    }

    let operador = event.target.textContent;
    atribuirOperacao(operador);
    tela.value = operador;
}