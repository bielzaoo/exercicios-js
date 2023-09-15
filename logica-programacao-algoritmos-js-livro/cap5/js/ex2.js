const btnAdd = document.querySelector('#btnAdd');
const btnVerificar = document.querySelector('#btnVerificar');

let numeros = [];

btnAdd.addEventListener("click", () => {
    const inNum = document.querySelector('#inNum');
    const resultado = document.querySelector('#resultado');
    
    const num = Number(inNum.value);

    // verificar se o usuário realmente digitou um número.
    if (!(typeof(num) === 'number')) {
        alert("Digite apenas números.");
        inNum.focus();
        return;
    }

    // verifica se o número já foi escolhido
    for(let numero of numeros){
        if (num === numero) {
            alert("Número ja escolhido!")
            return;
        }
    }

    numeros.push(num)
    resultado.textContent = `Números: ${numeros.join()}`;
})

btnVerificar.addEventListener("click", () => {
    const resultado = document.querySelector('#resultado');
    let numerosOrdenados = numeros.slice();  // faz uma cópia do array original
    
    numerosOrdenados.sort((a,b) => a - b); // ordena o arrya que foi copiado.

    for(let i = 0; i < numeros.length; i++){
        if (!(numeros[i] === numerosOrdenados[i])) {
            resultado.textContent = "Atenção... Números não estão em ordem crescente";
            return;
        }
    }
    resultado.textContent = "Os Números estão em ordem crescente";

})

