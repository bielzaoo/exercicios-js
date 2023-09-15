const btnVerificar = document.querySelector("#btnVerificar");

btnVerificar.addEventListener("click", () => {
  const innNum = document.querySelector("#inNum");
  const resultado = document.querySelector("#resultado");

  const num = Number(innNum.value);

  if (!num || Number.isNaN(num)) {
    resultado.textContent = "Digite apenas números.";
    innNum.focus();
    return;
  }

  let somaDosDivisores = 1;
  let divisores = "1";
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      divisores += "," + i;
      somaDosDivisores += i;
    }
  }
  resultado.textContent = `Divisores de ${num}: ${divisores} (Soma: ${somaDosDivisores})\n`;

  if (somaDosDivisores === num) {
    resultado.textContent += `${num} É um Número Perfeito`;
  }
  console.log("foi");
});
