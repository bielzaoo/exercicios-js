// Função retorna o maior número.

function maiorNum(x, y) {
    return x > y ? x : y;
}

// versão arrow function
const maior2 = (x,y) => x > y ? x : y;

console.log(maior2(14,8));