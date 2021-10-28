// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

///////////////////////////////////////////////////////////////////////////////////////////
// Destructuring em arrays

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Não é bom utilizar o caso acima em trabalho profissional pois é um código de dificil leitura.

////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring em Objeto

function rand({min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({})) // aqui ele gera numeros randomicos entre 0 e 1000
//console.log(rand()) // não é possivel passar um objeto vazio

////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring in array 2

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // seria apenas o valor minimo e o maximo ele assumiria o valor 1000
console.log(rand([, 10])) // aqui ele assumiria o valor minimo 0 e o maximo 10
console.log(rand([])) // aqui ele assumiria os valores padrões 0 e 1000
// console.log(rand()) // um vetor vazio gera error porque não se pode desestruturar elementos de algo nulo