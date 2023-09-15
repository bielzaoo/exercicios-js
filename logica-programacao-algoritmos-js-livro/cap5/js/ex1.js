const btnAdd = document.querySelector("#btnAdd");
const btnListar = document.querySelector('#btnListar');
const btnMontar = document.querySelector('#btnMontar');

let clubes = [];

btnAdd.addEventListener("click", () => {
    const inClube = document.querySelector('#inClube');
    const resultado = document.querySelector('#resultado');

    let clube = inClube.value;

    if (!clube) {
        alert('Por favor, digite um nome de clube válido!');
        return;
    }

    clubes.push(clube);

    resultado.textContent = `Clube "${clube}" adcionado com sucesso!`;
})

btnListar.addEventListener('click', () => {
    const resultado = document.querySelector('#resultado');

    if (!clubes) {
        alert("ERROR: Você ainda não adicionou um clube a lista.");
        return;
    }

    resultado.textContent = '';

    for(let i in clubes){
        resultado.textContent += `${Number(i)+1} - ${clubes[i]}` + "\n";
    }
})

btnMontar.addEventListener('click', () => {
    let i;
    let j = clubes.length - 1;

    resultado.textContent = '';

    if (!(clubes.length % 2 == 0)) {
        alert('O número de clubes deve esr par.');
        return;
    }

    for(i = 0; i < clubes.length / 2; i++){
        resultado.textContent += `${clubes[i]} x ${clubes[j]}\n`;
        j--;
    }
})