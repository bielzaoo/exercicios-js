const btnCalc = document.querySelector("#btnCalc");

btnCalc.addEventListener("click", () => {
  const inData = document.querySelector("#inData");
  const inValor = document.querySelector("#inValor");
  const outDataLimite = document.querySelector("#outDataLimite");
  const resultado = document.querySelector("#resultado");

  let multaValor = Number(inValor.value);

  let dataInflacao = inData.value;
  dataInflacao = dataInflacao.split("-");

  let dataLimite = new Date();
  dataLimite.setFullYear(2024);
  let dataLimiteDia = dataLimite.getDate();
  let dataLimiteMes = dataLimite.getMonth() + 1;
  let dataLimiteAno = dataLimite.getFullYear();

  // checa se a dia, mes e ano informado pelo usuuário passou o limite.
  if (Number(dataInflacao[0]) > dataLimiteAno) {
    resultado.textContent = `Valor a ser pago: ${multaValor} (valor normal)`;
  } else if (Number(dataInflacao[1]) > dataLimiteMes) {
    resultado.textContent = `Valor a ser pago: ${multaValor} (valor normal)`;
  } else if (
    Number(dataInflacao[2]) > dataLimiteDia &&
    Number(dataInflacao[1]) >= dataLimiteMes
  ) {
    resultado.textContent = `Valor a ser pago: ${multaValor} (valor normal)`;
  } else {
    multaValor *= 0.8;
    resultado.textContent = `Valor a ser pago: R$ ${multaValor.toFixed(
      2
    )} (20% desc)`;
  }

  // caso o mes seja menor que 10, adciona um 0 do aldo direito, ex: 00, 01...
  let mesFormatdado = dataLimiteMes < 10 ? "0" + dataLimiteMes : dataLimiteMes;
  let dataLimiteFormat = `${dataLimiteDia}/${mesFormatdado}/${dataLimiteAno}`;

  outDataLimite.textContent = `Data Limite para pagar com desconto:
   ${dataLimiteFormat}`;
});
