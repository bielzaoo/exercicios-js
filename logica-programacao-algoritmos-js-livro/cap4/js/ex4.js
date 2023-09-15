const btnCriar = document.querySelector("#btnCriar");

btnCriar.addEventListener("click", (e) => {
    const inNumLinhas = document.querySelector("#inNumLinhas");
    const resultado = document.querySelector("#resultado");

    const numLinhas = inNumLinhas.value;

    if (!numLinhas || Number.isNaN(numLinhas)) {
        resultado.textContent = 'Digite apenas números';
        return;
    }

    for(let i = 0; i < numLinhas; i++){
        for(let j = 0; j < i; j++){
            resultado.textContent += '*';
        }
        resultado.textContent += '\n';
    }
});