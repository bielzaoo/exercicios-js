const btnRepetir = document.querySelector('#btnRepetir');

btnRepetir.addEventListener('click', (e) => {
    const inFruta = document.querySelector('#inFruta');
    const inNum = document.querySelector('#inNum');
    const resultado = document.querySelector('#resultado');

    const num = inNum.value;
    const fruta = inFruta.value;

    if (!num || Number.isNaN(num)) {
        resultado.textContent = 'Digite apenas números, exceto o zero.';
        return;
    }
    
    for (let i = 1; i < num; i++) {
        resultado.textContent += fruta + '*';
    }
    resultado.textContent += fruta;

})