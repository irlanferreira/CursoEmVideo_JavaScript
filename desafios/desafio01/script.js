var display = document.querySelector('div#display')
var agora = new Date()
var hora = agora.getHours()
var horario = `Agora são ${hora}:${agora.getMinutes()}.` 
display.innerHTML = horario
var imagem = document.querySelector('img#imagem')
if(hora >= 12 && hora <=17){
    imagem.setAttribute('src', 'imagens/tarde.png')
    document.body.style.background = '#CD7D3E'
}else if(hora >=18 || hora <=4){
    document.body.style.background = '#3C4F58'
    imagem.setAttribute('src', 'imagens/noite.png')
}