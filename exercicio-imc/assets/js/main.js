const form = document.querySelector('.form');

form.addEventListener('submit', function (evento){ 
    evento.preventDefault();
    const entradaPeso = evento.target.querySelector('#peso'); 
    const entradaAltura = evento.target.querySelector('#altura');

    const peso = Number(entradaPeso.value);
    const altura = Number(entradaAltura.value);

    if (!peso) {
        setResutlado("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResutlado("Altura inválida", false);
        return;
    }

    const imc = calcIMC(peso, altura);
    const classificacao = getClassif(imc);
    const msg = `Seu IMC é ${imc} (${classificacao})`;
    
    setResutlado(msg, true);
});

// diz a classifcacção em relação ao IMC
function getClassif(imc) {
    const classif = [ 'Abaixo do peso', 'Peso normal', 'sobrepeso', 'Obesidade grau 1',
'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) 
        return classif[5];

    if (imc >= 34.9) 
        return classif[4];
    
    if (imc >= 29.9) 
        return classif[3];
    
    if (imc >= 24.9) 
        return classif[2];

    if (imc >=18.5) 
        return classif[1];

    if (imc < 18.5) 
        return classif[0];
    
}

// função calcula imc
function calcIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

//função cria parágrafo
function criaParagrafo() {
    const pg = document.createElement('p');
    return pg
}

// função comfigura resultado.
function setResutlado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    const pg = criaParagrafo();

    resultado.innerHTML = '';

    if (isValid) {
        pg.classList.add('paragrafo-resultado')
    } else {
        pg.classList.add('deu-ruim')
    }

    pg.innerHTML = msg
    resultado.appendChild(pg);
}