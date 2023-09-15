const btnCalc = document.querySelector('#btnCalc');
const temConvenio = document.querySelector('#temConvenio');
const naoTemConvenio = document.querySelector('#naoTemConvenio');
const convenios = document.querySelector('#convenios');;

temConvenio.addEventListener("change", (e) => {
  convenios.classList = temConvenio ? "exibir" : "oculta";
})

naoTemConvenio.addEventListener("change", (e) => {
  convenios.classList = temConvenio ? "oculta" : "exibir";
})

btnCalc.addEventListener("click", () => {
  const inValor = document.querySelector('#inValor');
  const convenioOpcoes = document.querySelector('#convenioOpcoes');
  const outDescont = document.querySelector('#outDesconto');
  const resultado = document.querySelector('#resultado');

  const valor = inValor.value;
  const conveSelecionado = convenioOpcoes.selectedIndex;
  let desconto;

  if(naoTemConvenio.checked){
    desconto = calcularDesconto(valor, 10);
  } else if (conveSelecionado === 0) {
    desconto = calcularDesconto(valor, 20);
  } else if(conveSelecionado === 1){
    desconto = calcularDesconto(valor, 50);
  } else {
    desconto = calcularDesconto(valor, 10);
  }

  let total = valor - desconto;
  outDescont.textContent = `Deseconto R$: ${desconto.toFixed(2)}`;
  resultado.textContent = `A pagar R$: ${total.toFixed(2)}`;
})

function calcularDesconto(valor,taxa) {
  if (taxa === 10) {
    return valor * 0.10;
  } else if(taxa === 20){
    return valor * 0.20;
  }
  return valor * 0.50;
}
