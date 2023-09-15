const btnCateg = document.querySelector('#btnCateg');
const inIdade = document.querySelector('#inIdade');

btnCateg.addEventListener('click', categorizar);
inIdade.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) categorizar();
})

function categorizar() {
  const inNome = document.querySelector('#inNome');
  const resultado = document.querySelector('#resultado');
  
  const nome = inNome.value;
  const idade = Number(inIdade.value);
  
  if (!nome) {
    alert("Digite uma nome!");
    inNome.focus();
    return;
  }

  if (!idade) {
    alert("Digite uma idade válida!!");
    inIdade.focus();
    return;
  }

  const underline = retornaTracos(nome);
  const categoria = categorizarAluno(idade);

  resultado.textContent = `${nome}\n` + `${underline}\n` + `Categoria: ${categoria}`;
}

function categorizarAluno(idade) {
  if (idade > 18) {
    return "Adulto";
  } else if(idade >= 13 && idade <= 18){
    return "Juvenil";
  } else {
    return "infantil";
  }
}

function retornaTracos(nome) {
  let underline = '';

  for(let i = 0; i < nome.length; i++){
    underline += nome[i] === ' ' ? " " : '-';
  }

  return underline;
}
