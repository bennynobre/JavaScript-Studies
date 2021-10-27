// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // caso passe apenas 1 numero ele vai somar um numero com um undefined e não vai gerar resultado


// função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3))