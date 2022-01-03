var agora = new Date()
var ano = agora.getFullYear()
var imagem = document.querySelector('img#imagem')
var divimagem = document.querySelector('div#imagem')
var res = document.querySelector('div#res')

function verificar(){
    anodenasc = Number(document.querySelector('input#anodenasc').value)
    var sexorad = document.getElementsByName('radsex')
    var sexo = ''

    if(typeof anodenasc != 'number' || anodenasc > ano || anodenasc < 1900){
        alert('ERRO! Digite um ano de nascimento válido.')
    }else {
        var idade = ano - anodenasc
        if(sexorad[0].checked){
            sexo = 'm'
        }else if (sexorad[1].checked){
            sexo = 'f'
        }
        divimagem.getElementsByClassName.display = 'block'
            imagem.style.display = 'inline'
        if(idade <= 14 && sexo == 'm'){
            imagem.setAttribute('src', 'imagens/crianca-m.png')
            res.innerHTML = `Detectamos homem com ${idade} anos.`
        }else if(idade <= 14 && sexo == 'f'){
            imagem.setAttribute('src', 'imagens/crianca-f.png')
            res.innerHTML = `Detectamos mulher com ${idade} anos.`
        }else if(idade <= 49 && sexo == 'm'){
            res.innerHTML = `Detectamos homem com ${idade} anos.`
            imagem.setAttribute('src', 'imagens/jovem-m.png')
        }else if(idade <=49 && sexo == 'f'){
            res.innerHTML = `Detectamos mulher com ${idade} anos.`
            imagem.setAttribute('src', 'imagens/jovem-f.png')
        }else if(sexo == 'm'){
            res.innerHTML = `Detectamos homem com ${idade} anos.`
            imagem.setAttribute('src', 'imagens/idoso.png')
        }else if(sexo == 'f'){
            res.innerHTML = `Detectamos mulher com ${idade} anos.`
            imagem.setAttribute('src', 'imagens/idosa.png')
        }
    }
}