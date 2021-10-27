let valor // não incializada
console.log(valor) // retorna um valor undefined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // caso tente acessar uma variavel nula gera erro

const produto = {}
console.log(produto.peco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)