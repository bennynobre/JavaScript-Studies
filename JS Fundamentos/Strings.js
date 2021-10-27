const escola = "Cod3r"

console.log(escola.charAt(4)) // a função charAt serve para retornar oque está naquela posição da string
console.log(escola.charCodeAt(3)) // retorna o valor da tabela ascii
console.log(escola.indexOf('3')) // retorna a posição literal da string

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // serve para criar substrings a partir da string principal, com vc dando os parametros

console.log('Escola '.concat(escola).concat("!")) // também se pode concatenar uma string usando o operador +
console.log(escola.replace(3, 'e')) // substitui uma letra por outra
console.log(escola.replace(/\d/, 'e')) // substitui todos os digitos da string pela vogal 'e'
console.log(escola.replace(/\w/g, 'e')) // substitui tudo pela vogal 'e'

console.log('Ana,Maria,Pedro'.split(','))