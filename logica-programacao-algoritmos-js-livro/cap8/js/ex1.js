/* 
  Essa versão náo é a que foi pedida no livro..
  O livro pedia que editasse um exemplo abordado no livro
  e adicionasse uma contador de visitas.
  
  Eu resolvi ao inves de editar o exemplo, criar um simples
  contador de visitas.
*/

const btnEnviar = document.querySelector('#btnEnviar');
let contador = localStorage.getItem("contador");

btnEnviar.addEventListener("click", () => {
  const inNome = document.querySelector('#inNome');
  const saudacao = document.querySelector('#saudacao');
  const contagem = document.querySelector('#contagem');
  
  const nome = inNome.value;

  contador++;
  localStorage.setItem("contador", contador);
  console.log(contador);
  saudacao.innerHTML = "Bem Vindo " + nome;

  contagem.innerHTML = `Essa é sua ${contador} visita ao site.`;
})
