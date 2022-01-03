numerosarray = []
var numero = document.getElementById('numero')
var select = document.getElementById('select')
var res = document.getElementById('res')
function adicionar(){
    //Verificação do input
    if(numero.value.length == 0 || Number(numero.value) < 1 || Number(numero.value) > 100){
        alert('[ERRO!] Verifique o valor digitado.')
    }else if(nalista(Number(numero.value), numerosarray)){
        alert('[Erro!] O número digitado já foi inserido.')
    }else{
         //Adicionando valor ao array
         numerosarray.push(Number(numero.value))
         //Exibindo adição no select
         let option = document.createElement('option')
         option.innerHTML = `Número ${Number(numero.value)} adicionado.`
         select.appendChild(option)
         numero.focus()
    }
}
function finalizar(){
    //Verificando length do array
    if(numerosarray.length == 0){
        alert('Você precisa inserir ao menos um valor antes de finalizar.')
    }else{
        //Exibindo resposta
        res.innerHTML = ''
        res.innerHTML += `<p>No total, foram cadastrados ${totalnum(numerosarray)} numeros.</p>`
        res.innerHTML += `<p>O maior número inserido foi ${maior(numerosarray)}`
        res.innerHTML += `<p>O menor número inserido foi ${menor(numerosarray)}`
        res.innerHTML += `<p>A soma de todos os números inserido foi ${soma(numerosarray)}`
        res.innerHTML += `<p>A média dos números inseridos é ${media(numerosarray).toFixed(2)}`
    }
}
function limpar(){
    res.innerHTML = ''
    select.innerHTML = ''
    numerosarray = []
}