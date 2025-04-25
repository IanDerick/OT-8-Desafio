console.log("Desafio 1:");

let myvar = 10;
let soma = 15 + 8;
soma += 1;
soma *= 3;
console.log(soma);

let unisenai = true;
let comida = ['arroz', 'feijão', 'ovo'];
console.log(comida[1]);

if (soma === myvar) {
    console.log("As variaveis são iguais");
} else {
    console.log("As variaveis NÃO são iguais");
}

if (myvar <= soma) {
    console.log("'myvar' é menor que 'soma'");
} else {
    console.log("'myvar' é maior que 'soma'");
}

function divisao(num1, num2) {
    return num1 / num2;
}

console.log(divisao(10, 2));
