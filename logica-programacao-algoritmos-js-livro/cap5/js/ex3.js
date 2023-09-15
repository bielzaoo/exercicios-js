const btnAdd = document.querySelector('#btnAdd');
const btnListar = document.querySelector('#btnListar');
const btnSegundaFase = document.querySelector('#btnSegundaFase');

// Está lista guradará os candidatos.
// será uma lista de objetos.
let candidatos = [];

// adicionar candidatos
btnAdd.addEventListener("click", () => {
    const inCandidato = document.querySelector('#inCandidato');
    const inAcertos = document.querySelector('#inAcertos');
    const resultdado = document.querySelector('#resultado');

    const nomeCandidato = inCandidato.value;
    const acertos = Number(inAcertos.value);
    
    if (!nomeCandidato) {
        alert("Digite um nome!");
        inCandidato.focus();
        return;
    }

    // verifica se o usuario digitou algo que não seja um numero.
    if (!inAcertos.value || Number.isNaN(acertos)) {
        alert('Digite apenas números!');
        inAcertos.focus();
        return;
    }

    candidatos.push({nome: nomeCandidato, acertos: acertos});

    listarCandidatos();    
})

function listarCandidatos(){
    const resultado = document.querySelector('#resultado');
    
    if (!candidatos.length) {
        alert("Não há candidatos");
        return;
    }
    candidatos.sort((a,b) => a.acertos - b.acertos);

    resultado.textContent = '';
    for(let candidato of candidatos){
        resultado.textContent += `${candidato.nome} - ${candidato.acertos}\n`;;    
    }

}
// listar candidatos
btnListar.addEventListener('click', listarCandidatos);

// mostrar aprovados
btnSegundaFase.addEventListener("click", () => {
    const resultdado = document.querySelector('#resultado');
    const acertosAprovacao = Number(prompt("Número de acertos para aprovação?"));
    let temAprovados = false;

    resultdado.textContent = "";
    for(let candidato of candidatos){
        if (candidato.acertos >= acertosAprovacao ) {
            resultdado.textContent += `${candidato.nome} - ${candidato.acertos} [APROVADO]\n`;;    
            temAprovados = true;
        }
    }

    if (!temAprovados) {
        resultdado.textContent = "Nãoo há aprovados.\n";

    }
})