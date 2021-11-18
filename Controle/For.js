let contador = 1
while (contador <= 10) {
    console.log(`Contador: ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i: ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`)
}

////////////////////////////////////////////////////////////////////////////////////////////
// Exemplo: For/in

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) {
    console.log(`Nota: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} : ${pessoa[atributo]}`)
}