function nalista(n, narrey){
    if(narrey.indexOf(n) != -1){
        return true
    }else
    return false
}
function totalnum(narrey){
    return narrey.length
}
function maior(narrey){
    let maior = 0
    for(pos in narrey){
        if(narrey[pos] > maior){
            maior = narrey[pos]
        }
    }
    return maior
}
function menor(narrey){
    let menor = narrey[0]
    for(pos in narrey){
        if (narrey[pos] < menor){
            menor = narrey[pos]
        }
    }
    return menor
}
function soma(narrey){
    let soma = 0
    for(pos in narrey){
        soma += narrey[pos]
    }
    return soma
}
function media(narrey){
    return soma(narrey) / narrey.length
}