const btnGerar = document.querySelector('#btnGerar');

btnGerar.addEventListener("click", () => {
  const inAutor = document.querySelector('#inAutor');
  const resultado = document.querySelector('#resultado');

  const autor = inAutor.value;

  const nomeFatiado = autor.split(' ');
  
  const ultimoNome = nomeFatiado[nomeFatiado.length - 1];
  
  let nome;
  let referencia = ultimoNome.toUpperCase() + ","; // aqui entrará o resultado final.
  
  for(let i = 0; i < nomeFatiado.length ; i++){
    // para evitar que a inicial do ultimo nome apareça.
    if (i === nomeFatiado.length - 1) {
      break;
    }
    nome = nomeFatiado[i];
    referencia += nome[0].toUpperCase() + ".";
  }
  
  resultado.textContent = referencia;

})