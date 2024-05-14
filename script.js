const btnCalcular = document.getElementById('btnCalcular')
const btnReset = document.getElementById('btnReset')
let valorConhecido = document.getElementById('valorConhecido');
let referencia = document.getElementById('referencia');
let valorX = document.getElementById('valorX');

// Função onde faz o calculo da regra de 3
function produtoRef(valc, cem, ref, x) {
    x.value = (valc * cem) / ref
}

// Função para receber os inputs que serão resetados
function resetar(...inputs) {
    inputs.forEach(input => {
        input.value = "";
    });
}

// Adiciona um ouvinte no evento 'Click' para executar a func de calcular o valor de X
btnCalcular.addEventListener("click", function () {
    const referencia = parseFloat(document.getElementById('referencia').value);
    const cemPorCento = parseFloat(document.getElementById('cemPorCento').value);
    const valorConhecido = parseFloat(document.getElementById('valorConhecido').value);
    let valorX = document.getElementById('valorX');

    produtoRef(valorConhecido, cemPorCento, referencia, valorX);
})

// Adiciona um ouvinte no evento de click para executar a func de resetar
btnReset.addEventListener("click", function () {
    resetar(referencia, valorConhecido, valorX)
})

