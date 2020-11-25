let num = [5, 8, 9, 5, 1, 4, 7, 3]
num.push(2)      //num.push(7) "vai criar um ultimo indice e adicionar o valor 7"
num.sort()       //num.sort() "colaca os numeros em ordem crecente"
console.log(num) // apresentção do vetor                   
console.log(`O vetor tem ${num.length} posições`)        //num.length "Visualização do cumprimento do vetor"
console.log(`O primeiro valor é ${num[0]}`)              // num[3]=6  "adicionar valor (6) no indice 3"
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 7 eta na posição ${pos}`)                      
}
