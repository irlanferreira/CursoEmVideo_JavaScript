let num = [6, 3, 8, 5]
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições.`)
res = ''
/* for(c=0;c<num.length;c++){
    console.log(`A posição ${c} tem o valor ${num[c]}.`)
} */
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
console.log(num.indexOf(8))