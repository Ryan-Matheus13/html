let tela = document.getElementById('tela')

let calculo = {
    valor: 0,
    valor: 0,
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
    document.getElementById('').addEventListener('click', inserirNumero)
}