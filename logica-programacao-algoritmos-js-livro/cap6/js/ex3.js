const btnVerificar = document.querySelector('#btnVerificar');

btnVerificar.addEventListener('click', () => {
  const inFrase = document.querySelector('#inFrase');
  const resultado = document.querySelector('#resultado');

  const frase = inFrase.value;

  if (!frase) {
    alert('Insira uma palarva ou frase!');
    inFrase.focus();
    return;
  }

  let frase2 = frase.replace(/ /g, '');
  
  let tmp = '';
  
  for(let i = frase2.length - 1; i >= 0; i--){
    tmp += frase2[i];
  }
  
  if (tmp === frase2) {
    resultado.textContent = `${frase.toUpperCase()} é um Palíndromo`;
  } else {
    resultado.textContent = `${frase.toUpperCase()} não é um Palíndromo`;
  }
})