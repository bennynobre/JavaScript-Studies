console.log('a =', a)
var a = 2
console.log('a =', a)

///////////////////////////////
// Através do içamento a variavel a sobe o escopo da função ficando como o exemplo abaixo
/*
var a
console.log('a =', a)
a = 2
console.log('a =', a)
*/

///////////////////////////////////////////////////////////////////////////////////////////
// Hoisting in let

console.log('b =', b)
let b = 2
console.log('b =', b)

// O que acontece aqui é que o let não é hoisted, ele não é atribuido antes da declaração, ele é atribuido após a declaração