const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed é usado para controlar a quantidade de casas decimais
console.log(media.toString(2)) // toString converte um numero para string e podemos transformar em binario
console.log(typeof media)

/*
    console.log(7 / 0) o resultado de uma operação por zero retorna um valor "Infinity"
    console.log("10" / 2) se dividir um numero em formato de string também retorna um valor numerico
    console.log("Show!" * 2) Uma string comum dividida por um numero retorna um valor chamado NaN (Not a number)
    console.log(0.1 + 0.7) não retorna 0.8 cravado por conta da linguagem 
*/