const btnGerar = document.getElementById("btnGerar");
const inNome = document.getElementById("inNome");

btnGerar.addEventListener("click", gerarSenha);
inNome.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    gerarSenha();
  }
})

function gerarSenha() {
  const resultado = document.getElementById("resultado");
  const nome = inNome.value;


  if (!validarNome(nome)) {
    alert("Nome inválido! Digite nome completo.");
    inNome.focus();
    return;
  } 

  const sobrenome = obterSobrenome(nome);
  const qtdVogais = contarVogais(nome);
  
  resultado.textContent = "Senha Inicial: " + sobrenome + qtdVogais;
}

function contarVogais(nome) {
  const vogais = nome.match(/[aeiou]/g);
  const qtdVogais = vogais.length;

  return qtdVogais < 10 ? "0" + qtdVogais : qtdVogais;
}

function obterSobrenome(nome) {
  let ultimoSpace = nome.lastIndexOf(" ");
  return nome.substring(ultimoSpace + 1).toLowerCase();
}

function validarNome(nome) {
  const nomeSpliit = nome.split(" ");
  
  let notMenorQue2 = true; // uma flag. se houver um nome menor que duas letras.
                          // retorna false. O exercicio pediu para retornar false.

  if (nomeSpliit.length < 2) {
    return false;
  }

  for(let i = 0; i < nomeSpliit.length; i++){
    let n = nomeSpliit[i];
    if (n.length < 2) notMenorQue2 = false;
  
  }

  return notMenorQue2;
}
