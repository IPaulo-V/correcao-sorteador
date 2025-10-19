function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let ate = parseInt(document.getElementById('ate').value);
    let de = parseInt(document.getElementById('de').value);

    let sorteados = [];
    
    for(let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de,ate);
        sorteados.push(numero);
    }
    alert(sorteados);
}
function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}