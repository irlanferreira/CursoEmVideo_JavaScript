function contar(){

    //Criação das variáveis
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    //Verificação do passo
    if(passo <=0){
        alert('[ERRO!] Verifique o valor do passo e tente novamente.')
    }else if(inicio <= fim){
        var resposta = ''
        //Contagem crescente
        for(c = inicio;c <= fim;c += passo){
            resposta += `${c} 👉` 
        }
        }else{
            var resposta=''
            //Contagem decrescente
            for(c=inicio;c>=fim;c -= passo){
                resposta += `${c} 👉`
            }
        }
    //Exibição da resposta
    document.getElementById('contando').style.display = 'block'
    resposta += "🏁"
    res.innerHTML = resposta
    
}