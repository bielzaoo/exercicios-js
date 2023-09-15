const btnAdd = document.querySelector('#btnAdd');
const btnListar = document.querySelector('#btnListar');

let noticias = [];

btnAdd.addEventListener("click", () => {
    const inNoticia = document.querySelector('#inNoticia');
    const noticiasCadastradas = document.querySelector('#noticiasCadastradas');    

    const noticia = inNoticia.value;

    if (!noticia) {
        alert("Digite uma notícia!");
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);
    noticiasCadastradas.textContent = `Notícias Cadastradas: ${noticias.length}`;
})
btnListar.addEventListener("click", () => {
    const resultado = document.querySelector('#resultado');

    const qtdNoticias = Number(prompt("Deseja lista quantas notícias?"));

    if (!qtdNoticias) {
        alert("Digite apenas numeros acima de zero.");
        return;
    }

    let j = noticias.length - 1;
    resultado.textContent = `${qtdNoticias} Últimas Notícias\n`
    resultado.textContent += '----------------------------------------\n'
    for(let i = 0; i < qtdNoticias; i++){
        resultado.textContent += `${j}) ${noticias[j]}\n`;
        j--;   
    }
})