function calcular(){
    var numero = document.getElementById('numero').value
    var tabuada = document.getElementById('tabuada')
    if (!$.isNumeric(numero)){
        alert('[ERRO!] O valor não pode estar vazio.')
        
    }else{
        numero = Number(numero)
        tabuada.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text += `${numero} x ${c} = ${numero * c}`
            tabuada.appendChild(item)
        }
    }
}