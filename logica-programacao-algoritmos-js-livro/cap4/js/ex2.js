const btnMostrar = document.querySelector("#btnMostrar");

btnMostrar.addEventListener('click', (e) => {
    const inNumChichilasInicial = document.querySelector('#inNumChinchilas');
    const inAno = document.querySelector('#inAno');
    const resultado = document.querySelector('#resultado');

    const numInicialChinchilas = Number(inNumChichilasInicial.value);
    const ano = Number(inAno.value);

    let numChinchilas;  // acumulador.

    if (!numInicialChinchilas || Number.isNaN(numInicialChinchilas)) {
        resultado.textContent = 'Digite apenas números.';
        inNumChichilasInicial.focus();
        return;
    }

    if (!ano || Number.isNaN(ano)) {
        resultado.textContent = 'Digite apenas números.';
        inAno.focus();
        return;
    }

    while (!(numInicialChinchilas >= 2)) {
        resultado.textContent = "Número inicial de chinchiilas deve ser >= 2.";
        inNumChichilasInicial.focus(); 
        return;
    }

    // resultado.textContent = '';
    numChinchilas = numInicialChinchilas;
    for(let i = 1; i <= ano; i++ ){
        resultado.textContent += `${i}° Ano: ${numChinchilas} Chinchiilas\n`;
        numChinchilas *= 3;
    }

})