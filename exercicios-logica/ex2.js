// Função diz se a imiagem está em modo paisagem ou não.

const isPaisagem = (largura, altura) => largura > altura;

// console.log(isPaisagem(1000, 500) || "Não está em paisagem.");

console.log(isPaisagem(1000, 500) ? "Está em paisagem" : "Não está em paisagem.");